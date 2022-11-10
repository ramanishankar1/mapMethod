var num = [10, 20, 30, 40, 50]
var number = new Map([...num.entries()].sort(((a, b) => b[0] - a[0])))
console.log(number)
for (let [key, value] of number) {
    console.log(value)
}
//Using String
var names = ["Ramani", "Sabaree", "Muthu"]
var sepName = names.map(name => name.toUpperCase())
console.log(sepName);

//Using Function
var numbers = [10, 20, 30, 40, 50, 100]
var initval = 0

function add(num1) {
    for (let i = 0; i < num1.length; i++) {

         initval = initval + num1[i]
         let finalval=initval
        console.log(finalval);
        // finalval.push(initval)
    
    }
     return initval
}
var addedVal=add(numbers)
console.log(addedVal)

function addone(x){
    return x+1

}

function map(array,instructions){
    let output=[]
    for(let i=0;i<array.length;i++){
        output.push(instructions(array[i]))
    }
    return output
}

console.log(map([10,20],addone));