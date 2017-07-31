function count(start, end) {
	var i = start;
	console.log(i);
	var interval = setInterval(function(){
		if (i < end) {
			console.log(++i);
		}
		else{
			clearInterval(interval);
		}
	},100)
	return {
		cancel:function(){
			clearInterval(interval);
		}
	}

}



function count(start, end) {
	console.log(start);
	timeout = setTimeout(function(){
		if (start < end) {
			count(start + 1,end);
		}
		
	}, 1000);
	return{
		cancel:function(){
			clearTimeout(timeout);
		}
	}
}

function count(start, end) {
	console.log(start);
	timeout = setTimeout(function(){
		start = start + 1;
		console.log(start);
		if (start < end) {
			timeout = setTimeout(arguments.callee,1000);
		}
		
	}, 1000);
	return{
		cancel:function(){
			clearTimeout(timeout);
		}
	}
}

c = count(1,10);