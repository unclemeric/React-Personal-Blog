/**
 * Created by Meric on 2016/10/27.
 */
import React from 'react';
import { Panel } from 'amazeui-react';
import header from '../../static/images/header.png';

class ConnectMe extends React.Component {
	render() {
		return (
			<Panel header="联系方式">
				<ul>
					<img src={header} alt="" style={{ display: 'block' }} />
					<li>邮箱:<a href="mailto:unclemeric@163.com">unclemeric@163.com</a></li>
					<li>QQ群:<span>45691985</span></li>
				</ul>
			</Panel>
		);
	}
}

export default ConnectMe;
