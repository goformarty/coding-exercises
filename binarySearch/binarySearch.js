function binary(num, arr) {
	let minIndex = 0;
	let maxIndex = arr.length - 1;

	let middleIndex,middle;

	while (minIndex <= maxIndex) {
		middleIndex = Math.floor((minIndex + maxIndex) / 2);
		middle = arr[middleIndex];
		
		if (middle === num) {
			return middleIndex;
		} else if (middle < num) {
			minIndex = middleIndex + 1;
		} else {
			maxIndex - middleIndex - 1;
		}
		return -1; 
	}
}

