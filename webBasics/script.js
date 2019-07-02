// alert('The file is attached')

console.log(document.title)


//Select and change the content of the p tag
let el = document.querySelectorAll('p')
el.forEach(function(p){

    p.textContent = 'This text has changed'
})

//Creating a new p element in the body tag
let createEl = document.createElement('p')

createEl.textContent = 'This element is created via JS'

//in qS, select where to create the el
//appendChild, appends the el after all p tags

document.querySelector('body').appendChild(createEl)   

//Event Listener
document.querySelector('button').addEventListener('click', function(event){

    event.target.textContent = 'I was Clicked'
})


//This will log the inputted value whenever the cursor is clicked outside
//  document.querySelector('#sugg').addEventListener('change', function(event){

//     console.log(event.target.value);
// })


//This will log as soon as something is written in input field, using input instead of change
document.querySelector('#sugg').addEventListener('input', (ev) => { console.log(ev.target.value)})


