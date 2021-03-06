function containsRepeatingLetter(str) {
	return /([a-zA-Z])\1+/.test(str)
}
//表达式在匹配时，表达式引擎会将小括号 "( )" 包含的表达式所匹配到的字符串记录下来。在获取匹配结果的时候，小括号包含的表达式所匹配到的字符串可以单独获取。这一点，在前面的举例中，已经多次展示了。在实际应用场合中，当用某种边界来查找，而所要获取的内容又不包含边界时，必须使用小括号来指定所要的范围。

//其实，"小括号包含的表达式所匹配到的字符串" 不仅是在匹配结束后才可以使用，在匹配过程中也可以使用。表达式后边的部分，可以引用前面 "括号内的子匹配已经匹配到的字符串"。引用方法是 "/" 加上一个数字。"/1" 引用第1对括号内匹配到的字符串，"/2" 引用第2对括号内匹配到的字符串……以此类推，如果一对括号内包含另一对括号，则外层的括号先排序号。换句话说，哪一对的左括号 "(" 在前，那这一对就先排序号。


function captureThreeNumbers(str) {
	var result = str.match(/\d{3}(\d)/);
	if (result) {
		return result[0];
	}
}
//0是整个匹配，1是第一个括号

function matchesPattern(str) {
	return /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/.test(str);
}