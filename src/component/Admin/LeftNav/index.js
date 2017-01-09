/**
 * author by Laisf on 2016/12/21.
 * 后台主页左边菜单
 */
import React, { Component } from 'react';
import  { Nav, NavItem,Icon } from 'amazeui-react';
import './index.scss'

class LeftNav extends Component {
    render() {
        return (
            <div className="admin-left">
                <Nav style={{width:'180px'}}>
                    <NavItem header>Blog控制台</NavItem>
                    <NavItem href="#/article">
                        <Icon icon="home">首页</Icon>
                    </NavItem>
                    <NavItem href="#/index">关于我们</NavItem>
                    <NavItem href="#/editor">编辑器</NavItem>
                    <NavItem divider />
                    <NavItem href="http://www.amazeui.org">响应式</NavItem>
                    <NavItem href="http://www.amazeui.org">移动优先</NavItem>
                </Nav>
            </div>
        );
    }
}

export default LeftNav;