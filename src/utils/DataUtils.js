/**
 * author by Laisf on 2017/1/5.
 */
var Utils = {
    bindData:function(that,e,key){
        var state = that.state;
        state[key] = e.target.value;
        that.setState(state);
    }
}

module.exports = Utils;