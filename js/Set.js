function Set(){
	this.values = {}; //集合数据保存在对象属性里
	this.n=0;//集合的个数
	this.add.apply(this, arguments);//把所有的参数都添加进这个集合
}

Set.prototype.add=function(){
	for(var i = 0;i<arguments.length;i++){
		var val = arguments[i];
		var key = Set._v2s(val);
		if(!this.values.hasOwnProperty(key)){
			this.values[key]=val;
			this.n++;
		}
	}
	return this;//链式调用
}

Set.prototype.remove=function(){
	for(var i = 0;i<arguments.length;i++){
		var val = arguments[i];
		var key = Set._v2s(val);
		if(this.values.hasOwnProperty(key)){
			delete this.values[key];
			this.n--;
		}
	}
	return this;
}

Set.prototype.contains = function(value){
	return this.values.hasOwnProperty(Set._v2s(value));
}

Set.prototype.size = function(){
	return this.n;
}

//遍历集合中所有的元素，在指定上下文中调用f
Set.prototype.foreach = function(f,context){
	for(var key in this.values){
		if(!this.values.hasOwnProperty(key)){
		//忽略继承的属性
			f.call(context,this.values[key]); //调用f,传入value(this.values[key])
		}
	}
}

///////////important////////////////
Set._v2s= function(value){
	switch(value){
		case undefined: return "u";
		case null: return "n";
		case true: return "t";
		case false: return "f";
		default: switch(typeof value){
			case "number": return "#"+value;
			case "string": return '"'+value;
			default: return "@"+objectId(value);//object and function get @
		}
	}
//对任意对象都会返回一个字符串
//对不同对象返回不同的字符串
//对相同对象的多次调用返回相同的字串
////为了做到这点，我们给o加一个属性，在es5中不可枚举且只读。

function objectId(o){
	var prop = "|**objectid**|";
		if(!o.hasOwnProperty(prop)){
			o[prop] = Set._v2s.next++;//将下个赋值给他
		}
		return o[prop];
	}
};
Set._v2s.next=100;//设置初始id的值。

