function append(arr, item) {
	return arr.concat(item)
}



function curtail(arr) {
	return arr.slice(1);
}


function insert(arr, item, index) {
	return arr.slice(0,index).concat(item,arr.slice(index))
}