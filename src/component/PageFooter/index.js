/**
 * Created by Meric on 2016/10/27.
 */
import React, { PropTypes } from 'react';
import './style.scss';

class PageHeader extends React.Component {
	render() {
		return (
			<footer className="footer-default" style={this.props.style}>
				<div className="footer-content">
					{this.props.children}
				</div>
			</footer>
		);
	}
}
PageHeader.PropTypes = {
	style: PropTypes.object,
	children: PropTypes.array,
};
export default PageHeader;
