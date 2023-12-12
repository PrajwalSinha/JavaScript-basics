//objects in js -- variables-linked              
console.log('chalaiye shuru karte hai');
//object create
//object ke andar koi function banao to method kahte hai usse
// let rectangle={
//   length:1,
//   breadth:2,

//   draw: function(){
//     console.log('drawing rectangle');
//   }
// };
// console.log(rectangle.draw());
// console.log(rectangle.length);
// console.log(rectangle.breadth);
//object creation--how?? .factory function and construction function-->best practice to create object

//factory function 
// function createRectangle(length,breadth){
//   return rectangle={
//     length:length,
//     breadth:breadth,
  
//     draw: function(){
//       console.log('drawing rectangle');
//     }
//   };
  
// }

// let rectangleObj1=createRectangle(5,4);
// let rectangleObj2=createRectangle(2,3);
// let rectangleObj3=createRectangle(7,9);

// console.log(rectangleObj1);
// console.log(rectangleObj2);
// console.log(rectangleObj3);

//camel case -> numberOfStudents
//constructor function -- pascal notation--first letter of everyword is capital-->prop/methods->initialise/define no return
//this refers to the current object you are working on.

function Rectangle(len,bre){
  this.length = len;
  this.breadth = bre;
  this.draw = function(){
    console.log('drawing');
  }
}

//object creation using constructor
//new keyword js mai empty object return karta hau -- empty object se function call kiya.
let rectangleObject = new Rectangle(4,6);
console.log(rectangleObject);
console.log(rectangleObject.draw());

//dynamic nature of objects
let a = 5;
a = 'babbar';
//object ke case se relate kare to agar koi object hai to removal aur addition of property possible hai.
rectangleObject.color='yellow';
console.log(rectangleObject);
delete rectangleObject.color;
console.log(rectangleObject);

//constructor property in js-- object in js has a property called constructor jo ke batata hai apka object bana kaise hai.
console.log(rectangleObject.constructor);
console.log(Rectangle.consturctor);
//function bhi ek object hai aur har ek object ka ek constructor hota hai.

// let Rect= new Function(
//   'length','breadth',
//   `this.length = length;
//   this.breadth = breadth;
//   this.draw = function(){
//     console.log('drawing');
//   }
// }`);
// let recti = new Rect(2,3);
// console.log(recti);

//Types in js -- primitive--number,string.. or value types and refernce types or objects -- functions objects and array
let f = 10;
let g = f; //isme f aur g ka alag block hai i.e. isme copy banti hai. 
f++;
console.log(f);
console.log(g);
let d = {value:10};
let p = d; //address pass hota hai es case mai..i.e. same address mai point karte hai.

d.value++;
console.log(d.value);
console.log(p.value);

//note: primitives are copied by there value and references are copied by there address/reference.
let a1 = 10;
function inc(a1)
{
  a1++;
}
inc(a1);
console.log(a1);
//jab kisi primitive ko function mai pass karte hai to iske copy banegi.
let a2 = {value:10};
function inc1(a2){
  a2.value++;
}
inc1(a2);
console.log(a2.value);

//iterating through objects--For-of and For-in loops

let rectangle={
  length:2,
  breadth:4
};

//for-in loop
// for(let key in rectangle){
//   //keys are reflected through key variable
//   //values are reflected through rectangle[key]
//   console.log(key,rectangle[key]);
// }

//for-of loop --can only be used in iterables -- arrays and maps.
// for(let key of Object.entries(rectangle)){
//   console.log(key);
// }

if('color' in rectangle){
  console.log('Present');
}
else{
  console.log('Absent')
}

//object cloning --  iteration,assign and spread
let a3 = {value:10};
let a4 = a3; //ye cloning nhi hai.
// let src = {
//   a:10,
//   b:20,
//   c:30
// };
// let dest ={};
// for(let key in src)
// {
//   dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning using assign
// let src = {
//   a:10,
//   b:20,
//   c:30
// };
// let src2={value:25};
// let dest = Object.assign({},src,src2);

// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning using spread
let src = {
    a:10,
    b:20,
    c:30
  };
let destin={...src};
console.log(destin);
src.a++;
console.log(destin);

//Garbage Collector hota hai js mai like in c/c++ hume allocate aur deallocate dono karna part ahai. basically ye pata karta hai aise var/const jo ke use me nhi hai aur memory de-allocate kar leta hai.
