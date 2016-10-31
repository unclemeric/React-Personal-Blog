/**
 * Created by Meric on 2016/10/27.
 */
import React from 'react';
import './style.scss';
import Config from '../../config';
import header from '../../static/images/header.png';

export default class Profile extends React.Component {
	getAge() {
		const dateYear = new Date().getFullYear();
		let age = 0;
		try {
			age = dateYear - Config.profile.birthYear;
		} catch (e) {
			console.warn('not set birth of year');
		}
		return age;
	}
	render() {
		return (
			<div className="profile">
				<div className="profile_left">
					<h3>UncleMeric</h3>
					<img src={header} alt="" style={{ display: 'inline-block' }} />
					<div>
						<i className="person_i">{this.getAge()}岁</i>
					</div>
					<div>
						<i className="home_i">{Config.profile.home}</i>
					</div>
					<div>
						<i className="place_i">{Config.profile.place}</i>
					</div>
					<div>
						<i className="email_i">{Config.profile.email}</i>
					</div>
					<div>
						<i className="github_i">{Config.profile.gitHub}</i>
					</div>
					<div>
						<i className="qq_i">{Config.profile.qq}</i>
					</div>
				</div>
				<div className="profile_right">
					<h3>个人简介：</h3>
					<pre>
						一只Java后端转Web前端开发的程序猿。<br />
						对软件开发和设计有浓厚的兴趣，尤其是前端框架和node技术。<br />
						有较强的团队精神，对工作态度积极，有上进心，追求新技术，自学能力比较强，业余时间喜欢研究新技术，喜欢与人交流技术，取长补短，完善自己。<br />
						会NodeJs、ReactJs，正在学习AngularJs和VueJs。<br />
					</pre>
				</div>
			</div>
		);
	}
}
