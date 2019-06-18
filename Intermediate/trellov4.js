

let myTodos = [{

    what: 'Wake-up early',
    when: 'Today'

}, {

    
    what: 'Buy Grocery',
    when: 'Tomorrow'

}, {
    
    what: 'Learn JS',
    when: 'Tomorrow'

}]

// //Method 1
// const findingByIn = myTodos.findIndex(function(todo, title){

//     return todo.what === 'Learn JS'
// })

// console.log(findingByIn)

// //Method 2
// const findingByEl = myTodos.find(function(todo, title){

//     return todo.what === 'Learn JS'
// })

// console.log(findingByEl)


function findTodos(todo1, title){

    const findByIn = todo1.findIndex(function(myTodo, title1){

        return myTodo.when === title

    })
    return todo1[findByIn]

}

let found = findTodos(myTodos, 'Tomorrow')
console.log(found)