
function enumeration(namesToValues){
	var enumeration =function(){ throw new Error("enum can not instance");}; //class
	var proto = enumeration.prototype={
			constructor:enumeration,
			toString:function(){return this.name;},
			toJson:function(){return this.value;},
			valueOf:function(){return this.value;}
	};
	enumeration.values=[];
	for(var name in namesToValues){
		var o = inherit(proto);
		o["name"] = name;
		o["value"] =  namesToValues[name];
		enumeration[name] = o;
		enumeration.values.push(o);
	}
	enumeration.foreach = function(func, context){
		for(var val in enumeration.values){
			func.call(context, enumeration.values[val]);
		}
	};
	
	return enumeration;
}

function inherit(o){
	function F(){}
	F.prototype = o;
	return new F();
}


////////////////////////////////
var Coin = enumeration({Penny:1, Nickel:5, 	Dime:10, Quarter:25});

var c = Coin.Dime;
c instanceof Coin;
c.constructor == Coin;
Coin.Penny==1;
String(Coin.Nickel)+"："+Coin.Nickel;
Coin.foreach(function(val){alert(val);},this);