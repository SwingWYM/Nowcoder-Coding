function curryIt(fn) {
	var a = function(a){
		var b = function(b){
			var c = function(c){
				return fn(a,b,c);
			}
			return c;
		}
		return b;
	}
	return a;
}



function curryIt(fn) {
	var a = function(x){
		var b = function(y){
			x = x + y;
			return b;
		}
		console.log(x);
		b.toString = b.valueOf = function(){return x;}
		return b;
	}
	return a;
}
