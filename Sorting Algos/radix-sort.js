function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])


// my implementation

	


const radixSort = arr => {
	let max_digits = mostDigits(arr)
	for (var i = 0; i < max_digits; i++) {
        var bucket0 = [], bucket1 = [], bucket2 = [], bucket3 = [], bucket4 = [], bucket5 = [], bucket6 = [], bucket7 = [], bucket8 = [], bucket9 = []
		for (var q in arr){
			switch (getDigit(arr[q], i)) {
			  case 'undefined':
				bucket0.push(arr[q])
				break;
			  case 0:
				bucket0.push(arr[q])
				break;
			  case 1:
				bucket1.push(arr[q])
				break;
			  case 2:
				bucket2.push(arr[q])
				break;
			  case 3:
				bucket3.push(arr[q])
				break;
			  case 4:
				bucket4.push(arr[q])
				break;
			  case 5:
				bucket5.push(arr[q])
				break;
			  case 6:
				bucket6.push(arr[q])
				break;
			  case 7:
				bucket7.push(arr[q])
				break;
			  case 8:
				bucket8.push(arr[q])
				break;
			  case 9:
				bucket9.push(arr[q])
				break;
			}	
		}
		console.log(bucket0, bucket1, bucket2, bucket3, bucket4, bucket5, bucket6, bucket7, bucket8, bucket9)
		arr = [].concat(...bucket0, ...bucket1, ...bucket2, ...bucket3, ...bucket4, ...bucket5, ...bucket6, ...bucket7, ...bucket8, ...bucket9)
	}
	return arr
}

radixSort([0,2,5,5555,6666,2356,85])





