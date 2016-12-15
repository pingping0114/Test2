/**
 * Created by shelly on 2016/12/15.
 */
function  A(){}
A.prototype.toString = function(){return "a";};
A.prototype.hi = function(){return "hi";};
A.prototype.open = function(){return "open";};
A.prototype.ggg=function(){ alert(this.toString());}
a = new A();
a.ggg();
function B(){}
B.prototype = a;
B.prototype.ggg=function(){
    this.toString();
    this.open();
}
new B().ggg();

function closer(){
    var b=1;
    cl = function(){alert(++b);}
}
var c = closer();
cl();cl();cl();cl();

var c = (function(number){
   var num = number + 1;
    return function aaa(a)
    {
        alert(num+" "+a);
    }
})(5);

c("nihao");







