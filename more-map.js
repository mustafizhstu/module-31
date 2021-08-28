const friends = ['anis', 'penis', 'humaira', 'mustafiz'];
const output = friends.map(f => f.length);
//console.log(output);
//array of objects
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productsName = products.map(product=>product.name);
const productsPrice = products.map(product=>product.price);
console.log(productsName);
console.log(productsPrice);
products.map(product => console.log(product));

//when return lagbe na tokhon forEach use korte hobe;

products.forEach(product => console.log(product));