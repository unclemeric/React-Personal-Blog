/**
 * author by Laisf on 2017/1/7.
 * 文章编辑页面组件
 */
import React, { Component } from 'react';
import PublishArticle from '../../PublishArticle';

/**
 * isEdit:是否编辑操作 （新增和编辑用同一组件）
 * articleId:文章id (从路由参数获取)
 */
class EditArticle extends Component {
    render() {
        return (
            <PublishArticle isEdit={true} articleId={this.props.params.id} />
        )
    }
}
export default EditArticle;
