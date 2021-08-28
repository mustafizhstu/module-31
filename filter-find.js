//filter find javascripts

//to check the elements of array by given an condition.

const numbers = [3,4,5,,8,5,3,7,8,9,53,45,76,73];
const bigNumbers = numbers.filter(product => product>30);
//console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const productsPrice  = products.filter(product => product.price>100);
const productsColor = products.filter(product => product.color =='black');
//console.log(productsPrice);
//console.log(productsColor);
const whiteItem = products.find(product => product.color=='white');
console.log(whiteItem);
