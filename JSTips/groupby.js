var data = [{
	"name": "a1",
	"age": 20,
	"city": "Hyderabad",
	"pincode": 521126
}, {
	"name": "a2",
	"age": 28,
	"city": "Hyderabad"
}, {
	"name": "a3",
	"age": 20,
	"city": "Hyderabad",
	"pincode": 500018
}, {
	"name": "a1",
	"age": 28,
	"city": "Banglore"
}, {
	"name": "a1",
	"age": 28,
	"city": "",
	"pincode": 500018
}];

function groupBy(data,groupByKey)
{
	var jsonData = {}, key;
	
	for(var i=0;i<data.length;i++)
	{
		if(data[i].hasOwnProperty(groupByKey)){
			key = data[i][groupByKey]
			//working source
				// if(!jsonData.hasOwnProperty(data[i][groupByKey]))
				// 	jsonData[data[i][groupByKey]] = [];
				
				// jsonData[data[i][groupByKey]].push(data[i]);
			//working source
			
			
			//testing source
			if(!jsonData.hasOwnProperty(key))
				jsonData[key] = data[i];
			else
			{
				if(!Array.isArray(jsonData[key]))
					jsonData[key] = [jsonData[key]];

				jsonData[key].push(data[i]);
			}
		}
	}
	
	return JSON.stringify(jsonData, null, 2);
}


function groupsBy(data,groupByKey)
{
	var jsonData = {}, key
	
	data.forEach(function (item, index)
	{
		if(!item.hasOwnProperty(groupByKey))
			return;
		else
		{
			key = item[groupByKey];
			if(Array.isArray(jsonData[item[groupByKey]]))
				jsonData[key].push(item);
			else
			{
				jsonData[key] = item;
				jsonData[key] = [jsonData[key]];
			}
		}
	});
	
	return JSON.stringify(jsonData, null, 2);
}

console.log(groupsBy(data, 'city'));