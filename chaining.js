//destructuring objects means that declare variable as the name of the object property
const myObject = {
    x:5, 
    y:6,
    z:7,
    a:8,
    b:9,
}
const {x,y,z,a} = myObject;
console.log(myObject?.p?.i);
//Can not read property of :something" undefined error we have to use optional chaining
//for optional chaining we have use ? before dot
console.log(a);


//destructuring objects

const [c,d] = ['fuck', "suck"];
console.log(c);

const {me,you,he,she} = {me:'mostafij', you:'rokaiya', he: 'anis', she:'humaira'};
console.log(me,you,he,she);



