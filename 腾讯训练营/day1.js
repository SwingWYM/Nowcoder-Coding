//如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
function indexOf(arr, item) {
	return arr.indexOf(item);
}	


//计算给定数组 arr 中所有元素的总和
function sum(arr) {
    var sum = 0;
	for (i in arr) {
		if (arr.hasOwnProperty(i)) {
			sum = sum + arr[i];
		}
	}
	return sum;
}
console.log(sum([ 1, 2, 3, 4 ]));

//使用eval：
function sum(arr) {
   return eval(arr.join('+'));
}

//移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
function remove(arr, item) {
    var result = [];
	for(i in arr){
        if(arr.hasOwnProperty(i)){
            if(arr[i] != item){
                result.push(arr[i]);
            }
        }
    }
    return result;
}