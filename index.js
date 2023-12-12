console.log('Namaste Dunia version 4');
let a=5;
console.log(a); 
const num = 12;
console.log(num);
a = "babbar";
console.log(a);
a=3;
console.log(a);
//arithmetic operators 
let d = 1;
let e = 2;
let f =d+e;
let g = d-e;
let h = d/e;
let i = d%e;
let j = d**e;
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
// pre/post inc/dec operator
console.log(++e);
console.log(e++);
//assignment operators
// let x = 3;
// x+=5;
// x-=5;
// x/=5;
// x*=5
//comparision operators
console.log(3>4);
console.log(3!==4);
console.log(3===3);
console.log(3===4);
//equality operator 2 tarah ka hai -- loose equality(==) aur strict equality(===) loose equality mai sirf value check karte hai wo strict equality mai value aur datatype dono check karte hai.. (1=='1')--> true (1==='1')-->false
//ternary operator
let age = 27;
let status = (age>=18)?'I can vote':'I cannot vote';
console.log(status);
//logical operator-- and or not and--all condn true or any single condition true not ulta hai.
// how deal with non booleans matlab t aur f ke bina -- concept of false and true -- kuch values hote hai jaise falsy aur truthy falsy mai undefined null 0 false '' aur Nan hota hai aur iske elawa jo bhi hai wo truthy hai aur ek concept hota hai or operator ka i.e. short circuting jaise (false||'1'||'2')-> output 1.
//bitwise operator bitwise AND - & dono 1 hai tab 1 aaayega aur bitwise OR - | dono mai se ek bhi 1 hai to output 1 hota hai.
//operator precedence -- let c = a+b*d/c; are use karo brackets ka kuch nhi yaad karna padega.
//control statements --> if-else and switch.
let marks = 98;
if(marks>=90){
  console.log('A');
}
else if(marks>=80){
  console.log('B');
}
else if(marks>=70){
  console.log('C');
}
else if(marks>=60){
  console.log('D');
}
else{
  console.log('E');
}
let nume=2;
switch(nume){
  case 1: console.log('A');
  break;
  case 2: console.log('B');
  break;
  case 3: console.log('C');
  break;
  case 4: console.log('D');
  break;
  default: console.log('E');
}
//loops-- for loop .while .do while . what is infinite loop? .For-in Loop .For-of Loop(basically used for repetition of tasks)..   for(initilisation;condition;Inc/dec/updation){.....//content...}
//for loop
for(let i=0;i<=5;i=i+1){
  console.log('babbar'+ i);
}
//while loop
let m = 0; //initilisation
while(m<=5){
  console.log(m);
  m++;
}
//do-while loop: koi condition true ho ya na ho to tabhi ek baar execute karega.
let k = 0;//initialisation
do
{
  console.log(k);
  k++;
}while(k<=5);