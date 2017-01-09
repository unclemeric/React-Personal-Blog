/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import { Link } from 'react-router';
import './style.scss';

/**
 * 介绍栏的链接是手写上去的 在markdown编辑保存到数据库之后  把文章链接拷过来
 * @type {[*]}
 */
const NavDatas = [
    { href: '/', text: '首页' },
    { href: '/articles', text: '文章' },
    { href: '/notes', text: '笔记' },
    { href: '/profile', text: '个人简介' },
    { href: '/feedback', text: '留言' },
    { href: '/articles/70c71446-f6f2-40a9-874f-657ddbc02130', text: '介绍' }
];

class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <ul className="cl-effect-15">
                    {
                        NavDatas.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={item.href} activeStyle={{ color: '#fff' }} onlyActiveOnIndex>{item.text}</Link>
                                </li>
                            );
                        })
                    }
                    <div className="clearfix" />
                </ul>
            </div>
        );
    }
}

export default HeaderNav;
