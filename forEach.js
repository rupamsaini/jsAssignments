const days = ['Mond', 'Tue', 'Wed', 'Thu', 'Fri']



// let user = function(){   
//     console.log('Hello')
// }

// days.forEach(user)      //It can callback function, of array(days) length


// //We can also pass function without name in forEach

// days.forEach(function(){   
//     console.log('Hello')
// })

// //We can pass a param in function which prints the array
// //The param can be anything
// days.forEach(function(din){

// console.log(din)

// })

//The second param tells array index or position
days.forEach(function(din, index){

console.log(`Starts with ${index+1} -- ${din}`)
})

