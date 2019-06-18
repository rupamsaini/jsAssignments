

let a = 123
let b = 123.000

if(a===b){              //true, becasue their identity is equal
    console.log('True')
}
else{
console.log('False')
}

let c = {}
let d = {}

if(c===d){              //false, because every object has diff. structure
    console.log('Equal')
}
else{
console.log('Not Equal')
}

let e = {}
let f = e

if(e===f){              //true, because both are refering to same object
    console.log('Equal1111')
}
else{
console.log('Not Equal1111111')
}