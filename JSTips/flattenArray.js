var data = [1, 2, [3, 4, [[[5, 6], 7, [11,  12, [13]]]], 8], 9, 10];
// Output should be like [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 8, 9, 10];
function recursive(data)
{
	var result=[];
	for(var i=0;i<data.length;i++)
	{
		if(!Array.isArray(data[i]))
			result.push(data[i]);
		else
		{
            //ES - 6
            //result.push(...recursive(data[i]));
            //ES - 5
			result = result.concat(recursive(data[i]));
		}
	}
	return result;
}

console.log(recursive(data));