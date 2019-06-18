
let numbers = ['one', 'two', 'three', 'four', 'five']

console.log(numbers)
console.log(numbers.shift())   //the first element is gone

numbers.unshift('new')          //inserts new element at start
console.log(numbers)

numbers.pop()                   //Deletes last element
console.log(numbers)        

numbers.push('Six')             //Inserts at end
console.log(numbers)        

numbers.splice(2, 1, 'Something')   //replaces elements
//console.log(numbers)        

console.log(numbers.slice(1, 3))        