/**
 * Created by shelly on 2016/12/15.
 */
define(function(){

 function defineSubClass(superClass,constructor, methods, statics ){
   // function constructor(){
      //  superClass.apply(this,arguments)
   // }
    constructor.prototype = inherit(superClass.prototype);
    constructor.prototype.constructor=constructor;
    if(methods) extend(constructor.prototype, methods);
    if(statics) extend(constructor, statics);
    return constructor;
}

function inherit(o){
    //if(Object.create)return Object.create(o);

        var FFF=function(){};
        FFF.prototype=o;
        return new FFF();

}
function extend(o,p){
    for(prop in p)
    {
        o[prop] = p[prop];
    }
}

Function.prototype.extend =function(constructor, methods, statics){
    return defineSubClass(this,constructor, methods, statics);
}


    return{
        defineSubClass:defineSubClass,
        inherit:inherit,
        extend:extend
    }
});