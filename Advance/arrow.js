

let bas = (name) => 'Hey '+ name

console.log(bas('Rupam'))

let arr = [{

        title: 'up',
        isDone: true
},
{
    title: 'down',
    isDone: true
},
{
    title: 'left',
     isDone: false
},
{
    title: 'right',
    isDone: false
},
{
    title: 'up',
    isDone: false
}]


let find = arr.filter((todo) => {
    if(todo.isDone === false)
    { 
        console.log(todo.title) 
    } 
})
//prints only title

// find.forEach(function(todo){

//     return console.log(todo.title)
// })


//find.forEach((todo) => console.log(todo.title))

