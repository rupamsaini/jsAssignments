

const convertToRs = (dollar) =>{
if(typeof dollar === 'number'){
return dollar * 64
}else{
    throw Error('There is an error')
}
}

try{
    const Rupee = convertToRs(5)
    console.log(Rupee)
} catch(e){
    console.log(e)
}


console.log('This will not execute if the program crashes')