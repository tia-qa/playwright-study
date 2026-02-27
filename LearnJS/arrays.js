//[array - elements]

arrayname = [] //( In JS, square bracket is used.
arr = [] //empty array
arr1 = [1,2,3,4,5,6,7]
arr2 = ["A", "B", "C"]
arr3 = [1, "G", true, {firstname: "Raju", lastname: "G"}]

arr1 : Number = [2,2,4,5,4242, "Raju"]

//access the first element
arr2[0]
console.log(arr2[1])
// .length , includes. sort, reduce, filter,concat, push, unshift
//push - adds at the end
//unshift - adds at the beginnnning
//pop - removes things from the last
//shift - first element gets removed
//includes 
arr = ['read', 'work', 'exercise', 'eat', 'sleep']
console.log(arr.includes("eat"))//true



//Map, Filter, reduce, foreach, slice, splice

arr = [1,2,3,4,5]
arr1=arr.map(x => x*3)
console.log(arr1)

arr2 = ["abc", "def", "ghi","pos"]
arr3 = arr2.map(element => element+ " blr")
console.log(arr)
