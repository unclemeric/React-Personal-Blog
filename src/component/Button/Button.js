/**
 * Created by Meric on 2016/10/24.
 */
import React, { PropTypes } from 'react';

class Button extends React.Component {
  constructor(props) {
	  super(props);
  }
	render() {
		return (
			<input type={this.props.type || 'button'} value={this.props.text} />
		);
	}
}

Button.propTypes = {
	type: PropTypes.string,
	text: PropTypes.string.isRequired,
};

export default Button;
