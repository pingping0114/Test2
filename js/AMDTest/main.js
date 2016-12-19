/**
 * Created by shelly on 2016/12/20.
 */
/**  refer to:　http://www.ruanyifeng.com/blog/2012/11/require_js.html */
require.config({
    baseUrl: "js/AMDTest",
    paths: {
        "tool":"tool",
        "math": "math",
        "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
    }
});

require(['math',"tool"], function (math, tool){
    // some code here
  var res =  math.add(1,2);
    console.log(res);

    var ABB=function(){};
    var SubAAA = ABB.extend(function AAA(){},{add:function(){console.log("add")}, hello: "hello"});
//ABB父类， AAA子类
    new SubAAA().hello;
});