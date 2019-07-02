
function myValidation(){

let myValue = document.getElementById('sugg').value

//Assignment <--
// let p = document.querySelector('#idOne')
// p.textContent = myValue  -->

if(isNaN(myValue) || myValue < 1 || myValue >20){

    console.log('Not a Valid Input')
}else{

    console.log('This is a valid input')
}

}