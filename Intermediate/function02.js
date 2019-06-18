

let myMultiplier = function(num1, num2){


return num1 * num2
}

let mul = myMultiplier(2, 3)
console.log(mul)

let user = function(name = 'Guest', coursesCount = 0){   //Defualt params
    return 'Hello '+ name +' Course Count is: '+ coursesCount
}

console.log(user('John', 1))