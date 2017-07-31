function rgb2hex(sRGB) {
    var reg = /rgb\(\d+\,\s*\d+\,\s*\d+\)/;
    var flag = true;
    if (!reg.test(sRGB)) {
    	return sRGB;
    }
    var s = sRGB.slice(4,sRGB.length - 1).split(',');
    s = s.map(function(item){
    	item = parseInt(item).toString(16);
    	if (item.length < 2) {
    		return '0' + item;
    	}else if (item.length == 2) {
    		return item;
    	}else{
    		flag = false
    	}
    });
    if (flag) {
    	return '#' + s.join('')
    }
    else{
    	return sRGB
    }
}

rgb2hex('rgb(255, 255, 255)');



function cssStyle2DomStyle(sName) {
	return sName.replace(/([a-zA-z0-9]*)\-([a-zA-z0-9])/g,function(a,b,c){
		// console.log(a);
		if (b) {
			return b + c.toUpperCase();
		}
		else{
			return c;
		}
	})
}


cssStyle2DomStyle('font-size')
cssStyle2DomStyle('-webkit-border-image')



function square(arr) {
	return arr.map(function(item){
		return item * item;
	})
}