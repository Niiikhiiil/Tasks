//task 1
//create a function to filter array of numbers
// in filter method ,there is always a condition that filter the array 
//or we can use map to iterate the elements of array
const arr=[-2,-8,5,6,7,1,9,0,10,-1] 
const filterhandle=()=>{
	const a=arr.filter(ele=>ele>=6)
	return a;
}
console.log(filterhandle());

// output:[ 6, 7, 9, 10 ]

// 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
