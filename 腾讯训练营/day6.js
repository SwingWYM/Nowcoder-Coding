function fizzBuzz(num) {
	if (num == undefined || typeof num != 'number') {
		return false;
	}else if (num % 5 == 0 && num % 3 == 0) {
		return 'fizzbuzz';
	}else if (num % 5 == 0) {
		return 'buzz';
	}else if (num % 3 == 0) {
		return 'fizz';
	}else{
		return num;
	}
}


function functionFunction(str) {
	function f(a){
		str = str + ', ' + a;
		return f;
	}
	f.toString = f.valueOf = function(){return str;}
	return f;
}