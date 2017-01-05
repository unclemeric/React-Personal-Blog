/**
 * author by Laisf on 2016/12/22.
 */
import React from 'react';
import Editor from '../../lib/editor'

class MDEditor extends React.Component {
    _handleClick = () =>{
        console.log('这个是自定义按钮')
    }
    render() {
        return (
            <div>
                <div className="container" style={{paddingBottom: '20px',width: '80rem', maxWidth: '1600px'}} >
                    <Editor getValue={this.props.getValue||null}>
                        {/*<option title="自定义按钮" onClick={this._handleClick}><i>x</i></option>*/}
                    </Editor>
                </div>
            </div>
        );
    }
}

export default MDEditor;
