/**
 * author by Laisf on 2017/1/6.
 */
import utils from './DataUtils';

module.exports = {
    formatViewList:function (list) {
        return {
            main:_.map(list||[],(item,i)=>{
                item.publishDate = item.publishDate || "";
                return {
                    title:item.title||"",
                    link:`#/articles/${item.id}`,
                    date:utils.dateToStr(new Date(item.publishDate),'Y-M-D H:M')
                }
            })
        }

    }
}