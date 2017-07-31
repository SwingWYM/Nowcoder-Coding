function duplicates(arr) {
	var result = [];
	arr = arr.sort();
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] == arr[i - 1] && result.indexOf(arr[i]) < 0) {
			result.push(arr[i])
		}
	}
	return result;
}



function formatDate(oDate,sFormation){
  var obj = {
    yyyy:oDate.getFullYear(),
    yy:(""+ oDate.getFullYear()).slice(-2),
    M:oDate.getMonth()+1,
    MM:("0"+ (oDate.getMonth()+1)).slice(-2),
    d:oDate.getDate(),
    dd:("0" + oDate.getDate()).slice(-2),
    H:oDate.getHours(),
    HH:("0" + oDate.getHours()).slice(-2),
    h:oDate.getHours() % 12,
    hh:("0"+oDate.getHours() % 12).slice(-2),
    m:oDate.getMinutes(),
    mm:("0" + oDate.getMinutes()).slice(-2),
    s:oDate.getSeconds(),
    ss:("0" + oDate.getSeconds()).slice(-2),
    w:['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
  };
  return sFormation.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}



function fibonacci(n) {
    if (n == 1 || n == 2) {
    	return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}