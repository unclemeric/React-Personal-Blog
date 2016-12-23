/**
 * author by Laisf on 2016/12/22.
 */
import React from 'react';
import { Article } from 'amazeui-react';

class ArticleView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            article:{
                title:'正在加载',
                meta:'正在加载',
                before:'正在加载',
                content:'正在加载',
            }
        }
    }
    componentDidMount(){
        fetch(`http://localhost:3000/admin/article/${this.props.params.id}`,{type:'get'})
          .then((response) => {
          return response.json();
        }).then((rtn) => {
            this.setState({
                article: rtn
            })
        }).catch(function(err) {
            console.log(err);
        });
        console.log(this.props.params.id);
    }
    render() {
        return (
            <Article
                title={this.state.article.title}
                meta={this.state.article.meta}>
                <Article.Child role="lead">
                    {
                        this.state.article.before
                    }
                </Article.Child>
                <div dangerouslySetInnerHTML={{__html: this.state.article.content}}>
                </div>
            </Article>
        )
    }
}

export default ArticleView;