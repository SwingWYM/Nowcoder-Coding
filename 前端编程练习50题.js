//*****************************查找数组元素位置：注意兼容性＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
function indexOf(arr, item) {
	if(Array.prototype.indexOf){
        return arr.indexOf(item);
    }
    else{
        for (i in arr){
            if(arr.hasOwnProperty(i)){
                if(arr[i] === item){
                    return i;
                }
            }
        }
        return -1;
    }
}

//************************数组求和：eval的用法＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//eval可以将字符串转换为js代码执行
function sum(arr) {
	return eval(arr.join('+'));
}

//*************************移除数组中的元素－返回新数组:Array.prototype.filter()**************
function remove(arr,item){
    return arr.filter(function(ele){
         return ele != item;
    })
}
//************************移除数组中的元素－在原数组上操作返回:arr.splice()******************
//如果倒着检测就不用考虑数组改变后的位置影响
function removeWithoutCopy(arr, item) {
	i = 0;
	while (i < arr.length) {
		if (arr[i] === item) {
			arr.splice(i,1);
		}
		else{
			i ++;
		}
	}
	return arr;
}
//使用indexOf判断是否存在item
function removeWithoutCopy(arr, item) {
    while(arr.indexOf(item) != -1){
        arr.splice(arr.indexOf(item),1);
    }
    return arr;
}

//***********************数组末尾添加元素，不修改原来数组：slice、concat＊＊＊＊＊＊＊＊＊＊＊＊
//slice
function append(arr, item) {
	var arr1 = arr.slice(0);
    arr1.push(item);
    return arr1;
}
//concat
function append(arr, item) {
	var arr1 = arr.concat(item);
    return arr1;
}
//*************************删除数组末尾，不修改原来数组:slice()＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
function truncate(arr) {
	var arr1 = arr.slice();
    arr1.pop();
    return arr1;
}
//更简洁，不需要pop
function truncate(arr) {
	return arr1 = arr.slice(0,-1);
}
//**************************开头添加元素，不修改原数组：＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//concat
function prepend(arr, item) {
	var pre = [item];
    return pre.concat(arr);
}
//slice+unshift
function prepend(arr, item) {
	var arr1 = arr.slice();
    arr1.unshift(item);
    return arr1;
}
//************************删除第一个元素，不修改原数组＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//利用slice
function curtail(arr) {
    return arr.slice(1);
}
//利用filter
function curtail(arr) {
    return arr.filter(function(v,i) {
        return i!==0;
    });
}
//利用push.apply+shift
function curtail(arr) {
    var newArr=[];
    [].push.apply(newArr, arr);
    newArr.shift();
    return newArr;
}
//利用join+split+shift    注意！！！：数据类型会变成字符型
function curtail(arr) {
    var newArr = arr.join().split(',');
    newArr.shift();
    return newArr;
}
//利用concat+shift
function curtail(arr) {
    var newArr = arr.concat();
    newArr.shift();
    return newArr;
}
//普通的迭代拷贝
function curtail(arr) {
    var newArr=[];
    for(var i=1;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}
//*****************************合并数组，不改变原来数组＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//利用concat
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
//利用slice+push.apply
function concat(arr1, arr2) {
    var newArr=arr1.slice(0);
    [].push.apply(newArr, arr2);
    return newArr;
}
//利用slice+push
function concat(arr1, arr2) {
    var newArr=arr1.slice(0);
    for(var i=0;i<arr2.length;i++){
        newArr.push(arr2[i]);
    }
    return newArr;
}
//普通的迭代拷贝
function concat(arr1, arr2) {
    var newArr=[];
    for(var i=0;i<arr1.length;i++){
        newArr.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
        newArr.push(arr2[j]);
    }
    return newArr;
}

//************************指定位置插入元素，不改变原来数组＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//利用slice+concat
function insert(arr, item, index) {
    return arr.slice(0,index).concat(item,arr.slice(index));
}
//利用concat +splice
function insert(arr, item, index) {
    var newArr=arr.concat();
    newArr.splice(index,0,item);
    return newArr;
}
//利用slice+splice
function insert(arr, item, index) {
    var newArr=arr.slice(0);
    newArr.splice(index,0,item);
    return newArr;
}
//利用push.apply+splice
function insert(arr, item, index) {
    var newArr=[];
    [].push.apply(newArr, arr);
    newArr.splice(index,0,item);
    return newArr;
}
//普通的迭代拷贝
function insert(arr, item, index) {
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i]);
    }
    newArr.splice(index,0,item);
    return newArr;
}

//*****************************数组中item出现的次数＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//index,splice
function count(arr, item) {
	num = 0;
    while(arr.indexOf(item) != -1){
        num ++;
        arr.splice(arr.indexOf(item),1);
    }
    return num;
}
//filter
function count(arr, item) {
	a = arr.filter(function(value,i,arr){
		return value === item;
	});
	return a.length;
}

//************************查找重复元素＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
function duplicates(arr) {
	result = [];
	 for(i in arr){
        if((arr.indexOf(arr[i],Number(i) + 1) != -1) && (result.indexOf(arr[i]) == -1))
         	result.push(arr[i]);
    }
    return result;
}
// debug(duplicates([1, 2, 4, 4, 4, 3, 2, 3, 1, 5, 3]).sort());
//将传入的数组arr中的每一个元素value当作另外一个新数组b的key，然后遍历arr去访问b[value]，若b[value]不存在，则将b[value]设置为1，若b[value]存在，则将其加1。可以想象，若arr中数组没有重复的元素，则b数组中所有元素均为1；若arr数组中存在重复的元素，则在第二次访问该b[value]时，b[value]会加1，其值就为2了。最后遍历b数组，将其值大于1的元素的key存入另一个数组a中，就得到了arr中重复的元素。
function duplicates(arr) {
     //声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
     var a = [],b = [];
     //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
     for(var i = 0; i < arr.length; i++){
         if(!b[arr[i]]){
             b[arr[i]] = 1;
             continue;
         }
         b[arr[i]]++;
     }
     //遍历b数组，将其中元素值大于1的元素下标存入a数组中
     for(var i = 0; i < b.length; i++){
         if(b[i] > 1){
             a.push(i);
         }
     }
     return a;
 }
 //先排序//先排序，如果后一个与前一个相等且未保存，则保存。
 function duplicates(arr) {
    var a=arr.sort(),b=[];
    for(var i in a){
        if(a[i]==a[i-1] && b.indexOf(a[i])==-1) b.push(a[i]); 
    }
    return b;
}
//lastIndexOf()
function duplicates(arr) {
 var result = [];
    arr.forEach(function(elem){
       if(arr.indexOf(elem) !=arr.lastIndexOf(elem) && result.indexOf(elem) == -1){
           result.push(elem);
       }
    });
    return result;
}
//filter,sort
function duplicates(arr) {
	a = arr.sort();
	return a.filter(function(elem,i){
		return elem === arr[Number(i) + 1] && elem !== arr[Number(i) - 1];
	});

}


//***************************求二次方：map＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//这事最好的方法了。其它的就是遍历
function square(arr) {
	return arr.map(function(elem,i,arr){
		return elem * elem;
	});
}
// debug(square([1,2,3,4]))




//*************************查找元素位置＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//常规思路，遍历
function findAllOccurrences(arr, target) {
	result = [];
	for (i in arr) {
		if (arr.hasOwnProperty(i)) {
			if(arr[i] == target)
				result.push(i);
		}
	}
	return result;
}
//filter
function findAllOccurrences(arr, target) {
    var result=[];
    arr.filter(function(item,index){
        return item===target&&result.push(index);
    });
    return result;
}
//  ||前面满足了便不会再执行后面的
function findAllOccurrences(arr, target) {
var temp = [];
    arr.forEach(function(val,index){
        val !== target ||  temp.push(index);
    });
    return temp;
}
// debug(findAllOccurrences('abcdefabc'.split(''), 'a').sort())


//********************************正确的函数定义＊＊＊＊＊＊＊＊＊＊＊＊＊
//这里getValue只能用函数表达式，不能用定义函数的方式，因为定义的方式会被提前到程序最前面，那么无论输入的flag是什么，return的都是b。
function functions(flag) {
    if (flag) {
       getValue = function() { return 'a'; }
    } else {
       getValue = function() { return 'b'; }
    }

    return getValue();
}
// debug(functions(true))


//＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊parseInt＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
//按10进制去处理字符串，碰到非数字字符，会将后面的全部无视
function parse2Int(num) {
    return parseInt(num,10);
}
// debug(parse2Int('12'))
// debug(parse2Int('12px'))//12
// debug(parse2Int('0x12'))



//*************************流程控制＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊
function fizzBuzz(num){
	if (num == null || typeof num != 'number') {
		return false;
	}
	else if(num % 5 == 0 && num % 3 == 0){
		return 'fizzbuzz';
	}
	else if(num % 5 == 0){
		return 'buzz';
	}
	else if(num % 3 == 0){
		return 'fizz';
	}
	else{
		return num;
	}
}
// debug(fuzzBuzz(34))


//************************函数传参********************************
//数组形式用apply
function argsAsArray(fn, arr) {
	return fn.apply(this,arr);
}
// debug(argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']))


//***************************函数的上下文*********************************
function speak(fn, obj) {
	return fn.call(obj)
}
// debug(speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'}))
//三种方案
//apply
function speak(fn, obj) {
    return fn.apply(obj);
}
//call
function speak(fn, obj) {
    return fn.call(obj);
}
//bind
function speak(fn, obj) {
    return fn.bind(obj)();
}

//****************************返回函数*******************************
function functionFunction(str) {
	function f(s){
		return str + ', ' + s
	}
	return f;
}
//两个以上括号的情况：
//内层函数返回自身，通过内层函数的toString或者valueOf方法返回输出结果，即可实现多个、多级调用，缺点是，直接调用函数在控制台输出内容会像这样子：function 1, 2, 3，需要显式或者隐式调用toString方法才能与输出样例一致。
function functionFunction(str){
    function f(s){
        str = str + ', ' + s;
        return f;
    }
    f.toString = f.valueOf = function(){return str;}//对所有的f都进行了赋值，否则就会输出函数
    return f;
 }
// debug(functionFunction('hello')('world')('sdf')('123'))



//******************************使用闭包********************************
//简单的描述闭包：如果在函数func内部声明函数inner，然后在函数外部调用inner，这个过程即产生了一个闭包。
//题目要求的是返回一个函数数组，如果在循环中直接写result[i] = function(){return fn(arr[i]);}或者result.push(function(){return fn(arr[i]);})，最终的结果是不正确的，因为在每次迭代的时候，那样的语句后面的方法并没有执行，只是创建了一个函数体为“return fn(arr[i]);”的函数对象而已，当迭代停止时，i为最终迭代停止的值，在函数被调用时，i依旧为最终迭代停止的值，因此无法返回正确的结果。
//为了解决这个问题，需要声明一个匿名函数，并立即执行它。
//function(num){return function(){return fn(arr[num]); }; }(i)，函数执行后，i立即传入并被内部函数访问到，因此就能得到正确的结果。闭包允许你引用存在于外部函数中的变量。
function makeClosures(arr, fn) {
	result = [];
	for (i in arr) {
		if (arr.hasOwnProperty(i)) {
			result.push((function(i){
				return function(){
					return fn(arr[i]);
				}
			})(i));
		}
	}
	return result;
}
var arr = [4,5,6]; 
var square = function (x) { 
	return x * x; 
}; 
var funcs = makeClosures(arr, square); 
// debug(funcs[1]());



// //*********************************二次封装函数*******************************
function partial(fn, str1, str2) {
	var result = function(s){
		return fn(str1,str2,s);
	}
	return result;
}
var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); }; 
// debug(partial(sayIt, 'Hello', 'Ellie')('!!!'));


//*********************************使用 arguments***************************
//arguments是一个类数组，不能使用forEach()
function useArguments() {
	var num = 0;
	for (i in arguments) {
		if (arguments.hasOwnProperty(i)) {
			num += arguments[i];
		}
	}
	return num;
}

//把arguments类数组转换成数组，jquery也有这个方法
function useArguments() {
    // var arr=Array.prototype.slice.call(arguments)//把arguments类数组转化为数组
    var arr = [].slice.call(arguments);//功能和上面一行一样
    return eval(arr.join("+"));//求和
}

//reduce
//reduce的第三个参数可以作为启动的初始值，如果有这个值，callback中的第一个a就是这个值
function useArguments(){
	result = [].reduce.call(arguments,function(a,b){
		return a + b;
	},0);
	return result;
}
// debug(useArguments(1, 2, 3, 4))


//************************************使用 apply 调用函数***************************
function callIt(fn) {
    return fn.apply(this,[].slice.call(arguments,1));
}
var a = 1; var b = 2; 
var test = function (first, second) { return first === a && second === b;}; 
// debug(callIt(test, a, b));



//*******************************二次封装函数********************************
function partialUsingArguments(fn) {
	var arguments1 = [].slice.call(arguments,1);
	var result = function(x,y){
		arguments2 = [].slice.call(arguments);
		arguments = arguments1.concat(arguments2)
		return fn.apply(this,arguments);
	}
	return result;
}

//使用bind()，调用时候的参数会被添加到bind指定的参数后。
function partialUsingArguments(fn){
	var arguments1 = [].slice.call(arguments,1);
	return fn.bind(this,arguments1[0],arguments1[1]);//这种方法不灵活，规定了bind的参数个数，这里用apply更好。
}
var a = 1; 
var b = 2; 
var c = 3; 
var d = 4;
var test = function (first, second, third, forth) {return first + second + third + forth;};
// debug(partialUsingArguments(test,a,b)(c,d));


//****************************柯里化，传入函数****************************************
function curryIt(fn) {
//最后返回fn(a,b,c)
    var length = fn.length;
    var args = [];
    var f = function(arg){
        args.push(arg)
        if (length > args.length) {
            return f;
        }
        else{
            return fn.apply(this,args);
        }
    }
    return f;
}
var fn = function (a, b, c) {return a + b + c}; 
//使用匿名函数，arguments.callee;
function curryIt(fn) {
     //获取fn参数的数量
     var n = fn.length;
     //声明一个数组args
     var args = [];
     //返回一个匿名函数
     return function(arg){
         //将curryIt后面括号中的参数放入数组
         args.push(arg);
         //如果args中的参数个数小于fn函数的参数个数，
         //则执行arguments.callee（其作用是引用当前正在执行的函数，这里是返回的当前匿名函数）。
         //否则，返回fn的调用结果
         if(args.length < n){
            return arguments.callee;
         }else return fn.apply("",args);
     }
 }
// debug(curryIt(fn)(1)(2)(3));


//*********************************或运算******************************
function or(a, b) {
    return a || b;
}
// debug(or(false, false))



//*********************************模块*************************************
function createModule(str1, str2) {
    this.greeting = str1;
    this.name = str2;
    this.sayIt = function () {
        return this.greeting + ',' + this.name;
    }
    return this;
}
function createModule(str1,str2){
    var obj = {
        greeting:str1,
        name:str2,
        sayIt:function(){
            return this.greeting + ',' + this.name;
        }
    };
    return obj;

}
c = createModule(1,2);
// debug(c.greeting)
// debug(c.sayIt())



//*******************************二进制转换:判断二进制的第bit位的值********************************
//位移
function valueAtBit(num, bit) {
   return ((num >> (bit - 1)) & 1); 
}
//toString(2)
function valueAtBit(num, bit) {
  var s = num.toString(2);
     return s[s.length - bit];
 }
 //位移+除余
function valueAtBit(num, bit) {
    return (num>>(bit-1)) % 2;
}

// debug(valueAtBit(128, 8))




//*******************************二进制转换:给定二进制字符串，将其换算成对应的十进制数字************
function base10(str) {
    return parseInt(str,2);
}
//暴力法
function base10(str) {

    var res=str.split('');
    var sum=0;
    for(var i=0;i<res.length;i++)
    {
        sum+=res[i]*Math.pow(2,res.length-i-1);
    }
    return sum;
}
// debug(base10('11000000'))





//****************************将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位*************
//slice或者substring()
function convertToBinary(num) {
    str = num.toString(2);
    str = '00000000' + str;
    // return str.substring(str.length - 8, str.length)
    return str.slice(str.length - 8);
}
//join的方法，使用join提供了新的思路。
function convertToBinary(num) {
    num = num.toString(2);
    len = ('' + num).length;
    return Array(len < 8 ? 8 - len + 1 : 0).join(0) + num;
}   
// 






//**********************乘法:a 和 b 可能是小数，需要注意结果的精度问题 **************************************
function multiply(a, b) {
    len = 0;
    if ((a + '').indexOf('.') > -1) {
        len += (a + '').split('.')[1].length;
    }
    if ((b + '').indexOf('.') > -1) {
        len += (b + '').split('.')[1].length;
    }
    return (a + '').replace('.','') * (b + '').replace('.','')/Math.pow(10,len);
}
// debug(3/2)
//使用toFixed()来取小数位数,四舍五入
//根据两个数相乘的精度来决定最后的精度，先将其转换成字符串，然后根据小数点的位置确定小数位数，
//字符串长度减去‘.'的位置后还要再减去1得到正确的小数位数，取两个相加，然后用toFixed()函数确定 //结果的小数位数
function multiply(a, b) {
   //求两个数相乘的精度
    var stra=a.toString();
    var strb=b.toString();
    if (stra.indexOf('.') > -1 && stab.indexOf('.') > -1) {
        var len=stra.length-stra.indexOf('.')-1 + strb.length-strb.indexOf('.')-1;
    }
    else if (stra.indexOf('.') > -1) {
        var len=stra.length-stra.indexOf('.')-1;
    }
    else if (strb.indexOf('.') > -1) {
        var len = strb.length-strb.indexOf('.')-1
    }
    else{
        var len = 0;
    }
    //
    return parseFloat(a*b).toFixed(len);
}
// debug(multiply(8, 0.00011))




//***********************************改变上下文*******************************
function alterContext(fn, obj) {
   return fn.call(obj)
}
// debug(alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' }))



//****************************批量改变对象的属性：prototype**************************************
function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting;
}
var C = function(name) {this.name = name; return this;}; 
var obj1 = new C('Rebecca'); 
alterObjects(C, 'What\'s up'); 
// debug(obj1.greeting);



//*****************************属性遍历**********************************************
function iterate(obj) {
    result = [];
    for (prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop + ': ' + obj[prop]);
        }
    }
    return result;
}

var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
// debug(iterate(new C()));
// debug((new C()).foo)




//*********************************判断是否包含数字***************************************
function containsNumber(str) {
    for (prop in str) {
        if (str.hasOwnProperty(prop)) {
            if (str[prop] >=0 && str[prop] <= 9) {
                return true;
            }
        }
    }
    return false;
}
//正则表达式
function containsNumber(str) {
    return /\d/.test(str);
}
function containsNumber(str) {
    var pattern=/\d/g;
    if(str.match(pattern))
        return true;
    else
        return false;
}

// debug(containsNumber('abc5'));
// debug('9'.charCodeAt())





//***********************************检查重复字符串********************************
//是否有相邻的重复字符串
function containsRepeatingLetter(str) {
    return /([a-zA-Z])(\1)+/.test(str);
}
function containsRepeatingLetter(str) {
    return /([a-zA-Z])(\1)+/ig.test(str);
}//!!!!不能只有g
//是否有相同字符串，不管是不是相邻
  // str = "abca";
  // str1 = /(.).*\1/g.test(str);
  // debug(str1);
//去除相同字符串，如果相同字符串中间有字符，也会被去掉。
  // str = "Google" 
  // str1 = str.replace(/(.).*\1/g,"$1")
//去除相同字符串，
    // debug('aba'.replace(/(.).*(\1)/g,function($1,$2,$3){  
    //         // 第一个参数匹配整个匹配值，从第二个开始是匹配的子串  
    //         $1 = $2+$1.substring(1).replace(new RegExp($2,'g'),'');  
    //         return $1;  
    //     }))//ab

//去除相邻相同字符串，
    // debug('abbaa'.replace(/(.)(\1)+/g,function($1,$2,$3){  
    //     return $2;  
    // }))//aba


// debug(containsRepeatingLetter('rAatler'))


//**********************判断是否以元音字母结尾************************************
function endsWithVowel(str) {
    var reg = /[aeiouAEIOU]$/;
    return reg.test(str);
}
function endsWithVowel(str) {
    var reg = /[aeiou]$/i;
    return reg.test(str);
}
// debug(endsWithVowel('gorillA'))



//*****************获取指定字符串****************************************************
function captureThreeNumbers(str) {
    var reg  = /\d{3}/;
    // return reg.test(str);
    if (str.match(reg)) {
        return str.match(reg)[0];
    }else{
        return false;
    }
}
// debug(captureThreeNumbers('sd45f9'))




//************************判断是否符合指定格式***************************
function matchesPattern(str) {
    reg = /^\d{3}-\d{3}-\d{4}$/;
    return reg.test(str);
}
//有相同部分，reg可以写成/^(\d{3}-){2}\d{4}$/
// debug(matchesPattern('800-555-1212'));




//******************************判断是否符合 USD 格式***************************************
function isUSD(str) {
    var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;//注意一定要在最后加$!!!!!
    return reg.test(str);
}
//考虑首位能否为零，当不是0.xx这种情况的时候，首位不能为零，所以要啊进行改进
function isUSD(str) {
    var reg = /^\$(([1-9]\d{0,2}(,\d{3})*)|0)(\.\d{2})?$/;
    return reg.test(str);
}
debug(isUSD('$2904,933,209.93'));