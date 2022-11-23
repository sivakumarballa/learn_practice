//console.log(new Date());

//for(var i=0;i<arr.length;i++){
//    j=1;
//    while(j<=100)
//    {
//        num += 2;   
//        j++;
//    }
//    if(i==arr.length - 1)
//        console.log(arr[i]);
//-}
//console.log(num);


var num=0; j=0, arr=[], slicedArr=[];
	for(var i=1;i<=10000000;i++){
		arr.push(i);
	}

function withChunks()
{
	console.log(new Date());

	for(var i=0;i<arr.length;i++)
	{
		slicedArr = arr.slice(i, i+999999);
		i = arrChunks(i, slicedArr);
		
		setTimeout(function(){alert('after timeout');},0);
	}
	console.trace();
	console.log(new Date());
}

function arrChunks(from, arr)
{
    var num=0;
    for(var i=0;i<arr.length;i++)
    {
        j=0;
		while(j<=1000)
		{
			num = num + 2;   
			j++;
		}
    }
	console.log('end of the arrChunks ' + from + ' - ' + (from+arr.length));
	console.trace();
    return from + arr.length;
}