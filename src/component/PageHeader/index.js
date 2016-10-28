/**
 * Created by Administrator on 2016/10/25 0025.
 */
import React from 'react';
import Header from './Header';
import HeaderNav from './HeaderNav';
import './style.scss';

class PageHeader extends React.Component {
  render() {
      return (
          <div className="banner">
              <div className="container">
                  <Header />
                  <HeaderNav />
              </div>
          </div>
      );
  }
}

export default PageHeader;
