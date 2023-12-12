// //java script --> script baseed programming language
// console.log('hello');
// //to run jaava script you need to install node js and baasic setup of the vs code should be done before hand.

// //variable declaration in js--> let and var
// let a = 5;
// console.log(a);
// a="prajwal";
// console.log(a);

// //arithmetic  operation -> +,-,*,/,%,**
// let d = 1;
// let e = 2;
// console.log(d+e);
// console.log(d-e);
// console.log(d*e);
// console.log(d/e);
// console.log(d%e);
// console.log(d**e);

// //pre/post inc/dec operator  ++e/e++ --> e=e+1 
// console.log(++e);
// console.log(d++);

// //assignment operators
// let x = 3;
// x+=3;
// x-=5;
// x/=5;
// x*=5;

// //comparision oeprators
// console.log(3>4);
// console.log(3!==4);
// console.log(3===3);
// console.log(3===4);

// // equlaity -- loose equlaity and strict equality
// //loose wale mai we compare only the value and strict equality mai value aur datatype dono comapre karte hai..

// //ternary operator
// let age =16;
// let status=(age>=18)?'I can vote':'I cannot vote';
// console.log(status);

// let rectangle={
//   age:18,
//   length:2,
//   breadth:3,

//   draw: function(){
//     console.log('drawing');
//   }
// };

// console.log(rectangle.draw());
// console.log(rectangle.length);
// console.log(rectangle);
// console.log(rectangle.constructor);

//creation of objects can be done in 2 ways--> factory function and constructor

//creating object using factory function-->Camel Case
// function createRectangle(length,breadth){
//   return rectangle={
//     length:length,
//     breadth:breadth,

//     draw: function(){
//       console.log('drawing rectangle');
//     }
//   };
// }

// //function create kyun?-->how to create a object using factory function
// let obj = createRectangle(5,4);
// let obj1 = createRectangle(7,9);
// console.log(obj.length);
// console.log(obj1.breadth);
// console.log(obj.draw());
// console.log(obj);
// console.log(obj.constructor);

//creating object using constructor -->we dont return anything and pascal notation
//this keyword is used to refer current object we are working in.
// function Rectangle(len,bre){
//   this.length=len;
//   this.breadth=bre;
//   this.draw=function(){
//     console.log('drawing');
//   }
// }

//object creation using constructor
//new keyword is used to create an empty object -->we call the function using this empty object and this keyword in constructor will allocate the values.
// let rectangleObject=new Rectangle(4,6);
// console.log(rectangleObject);
// console.log(rectangleObject.draw());
// console.log(rectangleObject.length);
// console.log(rectangleObject.breadth);
// console.log(rectangleObject.constructor);
// console.log(Rectangle.constructor);
//every function is an object and every object has its own constructor.-->why function is a constructor??-->what is object??-->which has some values or some attributes.
// let Rect = new Function(
//   'length','breadth',
//   `this.length=len;
//   this.breadth=bre;
//   this.draw=function(){
//     console.log('drawing');
//   }
// }`);

// let recti = new Rect(2,3);
// console.log(recti);
// rectangleObject.color='yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// //types in js--primitive--number,string,.. and reference types or objects -- function,objects,array
// let f = 10;
// let g = f;
// f++;
// console.log(f);
// console.log(g);

// let d={value:20};
// let p =d;
// d.value++;
// console.log(d.value);
// console.log(p.value);

// //note: primitives are copied by there value and references are copied by there address/reference.
// let a1=10;
// function inc(a1)
// {
//   a1++;
// }
// inc(a1);
// console.log(a1);
// //jab kisi primitive ko function mai pass karte hai to iska copy banega.
// let a2={value:10};
// function inc1(a2){
//   a2.value++;
// }
// inc1(a2);
// console.log(a2.value);

//iterating through objects --For-of and For-in loops
// let rectangle={
//   length:2,
//   breadth:4
// };
//for-in loop
// for(let key in rectangle){
//   console.log(key,rectangle[key]);
// }

// //for-of loop -- can only be used in iterables --arrays and maps.
// for(let key of Object.entries(rectangle)){
//   console.log(key);
// }

// if('color' in rectangle){
//   console.log('present');
// }
// else{
//   console.log('absent');
// }

//object cloning -- iteration,assign and spread
// let a3 = {value:10};
// let a4 = a3;
//object cloning using iteration
// let src={
//   a:10,
//   b:20,
//   c:30
// };
// let dest={};
// for(let key in src){
//   dest[key]=src[key];
// }
// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning using assign
// let src={
//   a:10,
//   b:20,
//   c:30
// };
// let src1={
//   value:50
// };
// let dest = Object.assign({},src,src1);
// console.log(dest);
// src.a++;
// console.log(dest);

//object cloning using spread
// let src={
//   a:10,
//   b:20,
//   c:30
// };
// let destin={...src};
// console.log(destin);
// src.a++;
// console.log(destin);
// //garbage collector
//math object
//refer mdn
//string as primitive and object
//date and time
let date=new Date();