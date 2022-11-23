var currArr = [];
function currying(val)
{
	if(val){
		currArr.push(val);
    }
    return currying;
    // else{
    //     return currArr.reduce(function(acc, curVal){
	// 		return acc+curVal;
	// 	});
	// }
}

Function.prototype.sum = function(arrData)
{
    if(arrData.length>0){
        return arrData.reduce(function(acc, curVal){
            return acc+curVal;
        });
    }
}

Array.prototype.sum = function()
{
    if(this.length>0){
        return this.reduce(function(acc, curVal){
            return acc+curVal;
        });
    }
}

var fun = currying(1)(2)(3)(4)(5)();
console.log(fun.sum(currArr));
console.log(currArr.sum());
console.log([0,4,84,82].sum());