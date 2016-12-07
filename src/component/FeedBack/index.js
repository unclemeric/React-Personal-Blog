/**
 * Created by Meric on 2016/10/27.
 */
import React from 'react';
import { Form, Input, FormGroup, ModalTrigger, Modal } from 'amazeui-react';
import './style.scss';

export default class FeedBack extends React.Component {
	constructor(props) {
		super(props);
		this.doSubmit = this.doSubmit.bind(this);
	}
	doSubmit(e) {
		e.preventDefault();
	}
	render() {
        const modal = <Modal title="提示">功能正在完善，谢谢支持。</Modal>;
		return (
			<div className="feedback">
				<Form horizontal>
					<h3 className="title">留言反馈</h3>
					<Input
						label="用户名" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10"
					/>
					<Input
						type="textarea" label="留言" labelClassName="am-u-sm-2" wrapperClassName="am-u-sm-10"
						placeholder="请输入您的建议..."
					/>
		  			<FormGroup>
					<Input
						type="checkbox" label="有回复时邮件通知孤" wrapperClassName="am-u-sm-offset-2 am-u-sm-10"
					/>
					</FormGroup>
					<ModalTrigger modal={modal}>
						<Input
							type="submit" amStyle="primary" value="提交"
							wrapperClassName="am-u-sm-offset-2 am-u-sm-10" onClick={this.doSubmit}
						/>
					</ModalTrigger>
				</Form>
			</div>
		);
	}
}
