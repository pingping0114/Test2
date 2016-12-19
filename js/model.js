/**
 * Created by shelly on 2016/12/19.
 */

var module1 = ( function (mod){
    //...
    mod.m3 = function () {
        return "3";
    };
    return mod;
})(window.module1 || {});
console.log(module1.m3())
