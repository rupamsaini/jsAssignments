
const myTodos = []
myTodos.push('Wake-up early')
myTodos.push('Learn Js')
myTodos.push('Exercise')
console.log('Hey Rupam! You have following things to do today:')

myTodos.forEach(function(todo, ind){

console.log(`${ind+1} -- ${todo}`)

})