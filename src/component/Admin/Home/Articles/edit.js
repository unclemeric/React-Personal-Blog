/**
 * author by Laisf on 2017/1/7.
 */
import React, { Component } from 'react';
import PublishArticle from '../../PublishArticle';

class EditArticle extends Component {
    render() {
        return (
            <PublishArticle isEdit={true} articleId={this.props.params.id} />
        )
    }
}
export default EditArticle;
