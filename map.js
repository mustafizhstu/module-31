const object1 = [3,4,5,6,7,8];
const object2 = [];
const elements = number => number*2;
for(const number of object1){
    object2.push(elements(number));
}
//console.log(object2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array
//loop through loop thorugh
//The total steps will be writtne  only one code it will be done by map
//const output = object1.map(elements);
//const output = object1.map(number => number*2);
const output = object1.map(x => x*x);
console.log(output);
