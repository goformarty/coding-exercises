// fizz buzz using map object

var myMap = {
	3: 'fizz',
	5: 'buzz'
}

function fizzBuzz(num) {
	let arr = createArr(num);
	let nums = Object.keys(myMap);

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (arr[i] % nums[j] === 0) {
				arr[i] = myMap[Object.keys(myMap)[j]];
			}
		}
	}
	return arr;
}



function createArr(num) {
	var arr = [];
	for (let i = 1; i <= num; i++) {
		arr.push(i);
	}
	return arr;
}

fizzBuzz(10);