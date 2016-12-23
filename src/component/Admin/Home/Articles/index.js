/**
 * author by Laisf on 2016/12/21.
 */
import React, { Component } from 'react';
import { ListNews, Titlebar } from 'amazeui-react';
import './style.scss';

let data = {
    main: [
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '#/article/1',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
        {
            title: '我很囧，你保重....晒晒旅行中的那些囧！',
            link: '##',
            date: '2013-09-18',
        },
        {
            title: '我最喜欢的一张画',
            link: '##',
            date: '2013-10-14',
        },
        {
            title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
            link: '##',
            date: '2013-11-18',
        },
    ],
};

var main = _.map(data.main,function (item,i) {
    item.link = "#/article/"+(i+1);
    return item;
})
data.main = main;

class Articles extends Component {
    render() {
        return (
            <div className="admin-article-list">
                <ListNews style={{ background: 'transparent' }} header={<Titlebar title="推荐列表" />} data={data} />
            </div>
        );
    }
}

export default Articles;