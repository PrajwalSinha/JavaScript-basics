// console.log('hello');
// let a  = 5;
// console.log(a);
// a = "babbar";
// console.log(a);
// a=3;
// console.log(a);
// //arithmetic operators
// let d = 1;
// let e = 2;
// let f = d+e;
// //comparision operators
// // loose euality--we check the data only and strict equality--we check the data as well as its datatype
// //ternary operator
// let age = 17;
// let status=(age>=18)?'I can vote':'I cannot vote';
// console.log(status);
// //shortcircuting in or operator 
// let marks = 98;
// if(marks>=90){
//   console.log('S');
// }
// else if(marks>=80){
//   console.log('A');
// }
// else{
//   console.log('B');
// }
// let nume = 2;
// switch(nume){
//   case 1:
//     console.log('messi');
//     break;
//   case 2:
//     console.log('cristiano');
//     break;
// }
// for(let i=0;i<=5;i++){
//   console.log('babbar'+  i);
// }
// //objects in js
// let rectangel={
//   length:1,
//   breadth:2,

//   draw: function(){
//     console.log('drawing');
//   }
// };
// console.log(rectangel.draw());
// console.log(rectangel.length);

// //factory function
// function createRectangle(length,breadth){
//   return rectangle={
//     length:length,
//     breadth:breadth,

//     draw: function(){
//       console.log('rectangle');
//     }
//   }
// };

// let rectangleObj1 = createRectangle(5,4);
// //constructor -- pascal case
// //this is used to point out current object
// function Rectangle(len,bre){
//   this.length = len;
//   this.breadth = bre;
//   this.draw = function(){
//     console.log('drawing');
//   }
// }

// //new keyword; -- creates a new empty object
// let rectangleObjectt = new Rectangle(4,6);
// //dynamic nature of objects
// console.log(rectangleObjectt.constructor);

// let v = 10;
// let r = v;
// v++;
// console.log(v);
// console.log(r);
// let l = {value:10};
// let p = l;
// l.value++;
// console.log(l.value);
// console.log(p.value);

// let a1 = 10;
// function inc(a1)
// {
//   a1++;
// }
// console.log(a1);
// let a2 = {value:10};
// function inc1(a2){
//   a2.value++;
// }
// inc1(a2);
// console.log(a2.value);

// //math dddfunctiaon
// //random,MAth.PI,MAth.round,Math.max,Math.min,Math.abs
// //string
// let firstName = new String('love');
// //console.log(typeof lastName);
// console.log(typeof firstName);
// console.log(firstName.constructor);
// console.log(String.constructor);
// let lastname = 'babbar';
// console.log(lastname.length);

// let message='This is my first Message';
// let words=message.split(' ');//split ke parameter mai space pass kiya hai maine.
// console.log(words);
// let mes = 'this is \n my book \n and hello'
// console.log(mes);
// let mesi = `This 
// is
// the 
// first message`;
// console.log(mesi);

// let date = new Date();
// console.log(date);

// let date2 = new Date('June 20 1998 07:15');
// console.log(date2);

// let date3 = new Date(1998,6,20,7);
// console.log(date3); //month ka indexing 0 se ho rhe hai 0-jan

// date3.setFullYear(1947);
// console.log(date3);

// //arrays
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// numbers.push(9);
// console.log(numbers);
// numbers.unshift(8);
// console.log(numbers);
// numbers.splice(2,0,'a','b','c','d');
// console.log(numbers);
// numbers.splice(1,1,2);
// console.log(numbers);
// numbers.splice(1,2,3);
// console.log(numbers);

// //searching in array
// let num = [1,4,5,7];
// console.log(num.indexOf(7));
// console.log(num.indexOf(9));
// console.log(num.includes(7));
// //more advanced way to do so is--
// console.log(num.indexOf(4,2));

// let courses = [  
//   {no:1, naam:'Love'},
//   {no:2, naam:'Rahul'}
// ];
// console.log(courses);
// console.log(courses.indexOf({no:1,naam:'love'}));


//call back functions
//lets create an array of objects
let rectangle=[
  {length:2,breadth:3},
  {length:3,breadth:2}
];
console.log(rectangle);

let shape = rectangle.find(course=>course.length===2);
console.log(shape);

//lengthy -- arrow function
// 1. function keyword ko hata ke arrow (=>) use karo.
//2. agar function ke parameter mai ek entity passed hai to bracket hata do.
//3. agar 1 line code hai to  bracket hata do aur return statement bhi hata do. 
let shapes = rectangle.find(course => course.length===3);
console.log(shapes);