/**
 * Created by Administrator on 2016/12/14.
 */
var utils={
    makeArray:function (arg) {
        try{
            return Array.prototype.slice.call(arg);
        }catch(e){
            var ary=[];
            for(var i=0;i<arg.length;i++){
                ary.push(arg[i])
            }
        }
    }
}