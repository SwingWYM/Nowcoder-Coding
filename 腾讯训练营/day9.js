//是否包含数组
function containsNumber(str) {
	return /.*\d+.*/.test(str);
}

function iterate(obj) {
	var result = [];
	for (item in obj) {
		if (obj.hasOwnProperty(item)) {
			temp = item + ': ' + obj[item];
			result.push(temp);
		}
	}
	return result;
}