/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import { Link } from 'react-router';
import './style.scss';

const NavDatas = [
    { href: '/', text: 'Home' },
    { href: '/nav', text: 'ABOUT' },
    { href: '/header', text: 'PHOTOS' },
    { href: '/', text: 'ARCHIVES' },
    { href: '/', text: 'CONTACT' },
];

class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <ul className="cl-effect-15">
                    {
                        NavDatas.map((item) => {
                            return (
                                <li>
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
