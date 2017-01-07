/**
 * author by Laisf on 2017/1/6.
 */
import React,{ Component } from 'react';
import classnames from 'classnames';
import './style.scss';

/**
 * displayCount 省略号中间显示几个按钮
 * perPage 每页显示个数
 * totalSize 总数
 * doClickPage 获取页码
 */
class MyPagination extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
        }
    }
    onclickHandle= (e)=>{
        var currClass="";
        _.forEach(e.target.parentNode.childNodes,function(item){
            var s=item.className;
            s=s.replace("curr","");
            currClass=s;
            item.className=s;
        });

        e.target.className=classnames(currClass,'curr');
        var pageNum = 1;
        try {
            pageNum=parseInt(e.target.innerText);
        }catch(e){
            pageNum = 1;
        }
        this.setState({
            currentPage:pageNum
        });
        this.props.doClickPage&&this.props.doClickPage(pageNum);
    }
    getHalfDisplay = ()=>{
        var displayCount = this.props.displayCount||3;
        return Math.ceil(displayCount/2);
    }
    getStartAndEnd = (totalPage)=>{
        var displayCount = this.props.displayCount||3;
        var upper_limit = totalPage-displayCount;
        var ne_half=this.getHalfDisplay();
        var start=this.state.currentPage>ne_half?Math.max(Math.min(this.state.currentPage-ne_half, upper_limit), 0):0;
        var end=this.state.currentPage>ne_half?Math.min(this.state.currentPage+ne_half*1, totalPage):Math.min(displayCount, totalPage);
        return [start,end];
    }
    getCenterInfo = (totalPage) =>{
        var start_end=this.getStartAndEnd(totalPage);
        var li_list=new Array();
        for(var i=2;i<totalPage;i++){
            if(i>start_end[0]){
                if(i<start_end[1]+1){
                    li_list.push(<li key={i} className={i==0 ?'curr': ''} onClick={this.onclickHandle}>{i}</li>);
                }
            }
        }
        return li_list;
    }
    getPreInfo = (totalPage)=>{
        if(totalPage!=0){
            return <li className={'curr'}  onClick={this.onclickHandle}>1</li>;
        }
    }
    getPreEllipseText = (totalPage)=> {
        var v = this.getStartAndEnd(totalPage) ||[];
        if(v&&v[0]>1){//距离前面大于1个的时候显示省略号 否则直接显示数字
            return <li>...</li>;
        }
    }
    getNextEllipseText = (totalPage) =>{
        if(totalPage-1 > (this.getStartAndEnd(totalPage)[1]-1)){
            return <li>...</li>;
        }
    }
    getNextInfo= (totalPage) => {
        if(totalPage>1){
            return <li className={''} onClick={this.onclickHandle}>{totalPage}</li>;
        }
    }
    render() {
        var totalPage=Math.ceil((this.props.totalSize||0)/(this.props.perPage||10));
        var li_list=this.getCenterInfo(totalPage);
        var li_list1=this.getPreInfo(totalPage);
        var preEllipseText=this.getPreEllipseText(totalPage);
        var li_list2=this.getNextInfo(totalPage);
        var nextEllipseText=this.getNextEllipseText(totalPage);
        return (
            <ul className="my-pagination unselectable">
                {li_list1}
                {preEllipseText}
                {li_list}
                {nextEllipseText}
                {li_list2}
            </ul>
        );
    }
}

export default MyPagination;