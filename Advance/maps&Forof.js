

let obj = {

    name: 'A',
    age: 20
}

let obj1 = {

    
    name: 'B',
    age: 25
}

let obj2 = {

    
    name: 'C',
    age: 29
}

let mappy = new Map()

mappy.set('a1', obj)

mappy.set('b1', obj1)

mappy.set('c1', obj2)

console.log('Size of the map: '+mappy.size)
console.log(mappy.get('c1'))

//for-of example in maps
// for( const [key, value] of mappy.entries()){
//     console.log(key +' = '+ value.name)
// }

mappy.forEach((value, key) => console.log(`${value.name} = ${key}`)  //Assignment to convert into string literals
    )

    //Maps, for array of arrays
let arr = [['one', 1], ['two', 2], ['three', 3]]

let arrayMap = new Map(arr)

arrayMap.forEach((val, key) => console.log(val +' = '+ key))
