function partial(fn, str1, str2) {
	var result = function(str3){
        return fn(str1,str2,str3);
    }
    return result;
}


function useArguments() {
    var sum = 0;
	for(i = 0;i<arguments.length;i++){
        sum = sum + arguments[i];
    }
    return sum;
}



