/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import logo from '../../../static/images/logo.png';
import './style.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <a>
                        <img alt="" className="img-responsive" src={logo} />
                    </a>
                </div>
                <div className="am-header-right header-right" />
                <div className="clearfix" />
            </div>
        );
    }
}

export default Header;
