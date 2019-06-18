
let iAmGlobal = 'This is a global var'

if(true){
    let iAmLocal = "This is a local var"
    //var iAmLocal = "This is a local var" 
    //this will still be accessible outside the scope(when var used)
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmLocal)  //as let is used, it is not available outside scope
console.log(iAmGlobal);