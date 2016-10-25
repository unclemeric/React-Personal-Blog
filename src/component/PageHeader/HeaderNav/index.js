/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import './style.scss';

const NavDatas = [
    { href: 'about.html', text: 'Home' },
    { href: 'about.html', text: 'ABOUT' },
    { href: 'about.html', text: 'PHOTOS' },
    { href: 'about.html', text: 'ARCHIVES' },
    { href: 'about.html', text: 'CONTACT' },
];

class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header-nav">
                <ul className="cl-effect-15">
                    {
                        NavDatas.map((item, index) => {
                            return (
                                <li className={index === 0 ? 'active' : null}>
                                    <a href={item.href} data-hover={item.text}>{item.text}</a>
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
