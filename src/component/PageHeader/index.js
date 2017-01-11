/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import classNames from 'classnames';
import Header from './Header';
import HeaderNav from './HeaderNav';
import './style.scss';

class PageHeader extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        window.onscroll = ()=> {
            if (document.body.offsetHeight > window.screen.height + this.refs.header.offsetHeight){
                if(document.body.scrollTop>=240){
                    this.refs.header.className=classNames(this.refs.header.className.replace(/\sheader-fixed/g, ''), "header-fixed");
                }else{
                    this.refs.header.className=classNames(this.refs.header.className.replace(/\sheader-fixed/g, ''));
                }
            }else{
                this.refs.header.className=classNames(this.refs.header.className.replace(/\sheader-fixed/g, ''));
            }
        }
    }
    scrollToTop = ()=>{
        var y =document.body.scrollTop||document.documentElement.scrollTop;
        if(y>260){
            var rate = y/80;
            var myInterval = setInterval(function () {
                if(y <=0 ){
                    clearInterval(myInterval);
                }
                y = y - rate;
                window.scrollTo(0,y);
            },1);
        }

    }
    render() {
        return (
            <div ref="header" className="banner">
                <div className="container">
                    <Header />
                    <HeaderNav onScrollTop={this.scrollToTop}/>
                </div>
            </div>
        );
    }
}

export default PageHeader;
