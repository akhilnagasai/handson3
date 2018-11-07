function pushZerosToEnd( x, y) 
{ 
	var count = 0;  
	for (i = 0; i < n; i++) 
		if (arr[i] != 0) 
			arr[count++] = arr[i];  
	while (count < n) 
		arr[count++] = 0; 
} 
// Driver program to test above function 
  var arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9] 
	var n = arr.length 
	pushZerosToEnd(arr, n); 
	console.log("Array after pushing all zeros to end of array :"+n); 
    for ( i = 0; i < n; i++) 
    {var x=arr[i]
		console.log(x); }
	

