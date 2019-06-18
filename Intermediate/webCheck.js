
let username = 'Rupam123'
let password = '12345@44444'

let userCheck = function(user){

if((user.includes(123)) && user.length > 6){

    return true
}
return false

}

let passCheck = function(pass){

if((pass.includes('@') && (pass.length > 8))){

    return true
}
return 'Please check pass'
}

console.log(userCheck(username))
console.log(passCheck(password))