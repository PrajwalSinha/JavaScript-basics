// // //studying inbuilt object pahla hai math--in-built hota hai.--yaar yaad mat karna kuch
// // console.log(Math.random());
// // console.log(Math.random());
// // // 0 to 1 koi  ek no generate karega
// // console.log(Math.PI);
// // console.log(Math.round(1.8));
// // console.log(Math.round(1.2));
// // console.log(Math.max(2,1,4,3));
// // console.log(Math.min(5,2,8,1,9));
// // console.log(Math.abs(-2)); //modulus deta hai.

// // //next is string which is an primitive
// // let lastName='babbar';
// // //but js mai string primitive aur object string bhi hota hai.
// // let firstName = new String('love');
// // console.log(typeof lastName);
// // console.log(typeof firstName);
// // console.log(firstName.constructor);//string is its constructor
// // console.log(String.constructor);
// // //can I convert primitive wala string to an object-- jaise dot lagayenge to js automatically usse object ke tarah treat karne lagega.
// // console.log(lastName.length);
// // console.log(lastName[0]);
// // console.log(lastName.includes('ba'));
// // console.log(lastName.indexOf('b'));
// // console.log(lastName.toUpperCase());
// // console.log(lastName.trim());//trim se starting aur ending spaces trim ho jayega
// // console.log(lastName.replace('babb','car'));
// // //you can explore more methods in mdn docs.
// // let message='This is my first Message';
// // let words=message.split(' ');//split ke parameter mai space pass kiya hai maine.
// // console.log(words);

// // //Template Literal-- use of backticks and uska usage clearly mentioned hai neeche.
// // let mes = 'this is \n my book \n and hello'
// // console.log(mes);
// // //but baar baar n dalna thora muskil lag rha hai..kuch kuch symbols ko print karne e liye we need to use escape sequences like for null cahracter--\0 and so on so ek baar mdn docs refer kar lena to know kon kon se aise symbols hai.
// // let mesi=
// // `This is
// // my first
// // message`; // so agar '' iske jagah we use back quote which is `` then we can do get the output in the style in which we want the output to look like.
// // console.log(mesi);

// // let mail =
// // `Hello ${lastName}, //dynamically calling the last name.

// //  Thanks for the oppurtunity.


// //  Regards,
// //  Babbar`;
// //  console.log(mail);

// // //date and time
// // let date = new Date();
// // console.log(date);

// // let date2 = new Date('June 20 1998 07:15');
// // console.log(date2);

// // let date3 = new Date(1998,6,20,7);
// // console.log(date3); //month ka indexing 0 se ho rhe hai 0-jan

// // date3.setFullYear(1947);
// // console.log(date3);
// // //getter and setters se access aur kuch bhi karskte hai.


// //Arrays--object/reference type -- collection of item.
// // arrays -- 1. adding new elements,2. finding elements 3. removinfg elemnts 4. splitting elements 5.combining elements --in js it is not neccessary that the datatype in the array are similar it may differ.

// //creation of arrays
// let numbers = [1,3,5,7];

// console.log(numbers);
// //we access the elments in the array using indexes..indexing starts from 0 and goes till n-1.
// //insertion of elemnts in the array
// //end ,begin,middle ---for end--numbers.push(9) begin-numbers.unshift(8) in middle numbers.splice(index,delete_count,'a','b','c')

// numbers.push(9);
// console.log(numbers);
// numbers.unshift(8);
// console.log(numbers);
// numbers.splice(2,0,'a','b','c','d');
// console.log(numbers);
// numbers.splice(1,1,2);
// console.log(numbers);
// //splice is used to insert the elements at any arbitary index of the array.

// //searching in array
// let num = [1,4,5,7];
// console.log(num.indexOf(7));
// console.log(num.indexOf(9));
// //if the element is not present in the array the indexOf will give the output as 1.

// //we want to check if an number exists in the array or not.
// if(num.indexOf(4)==-1){
//   console.log('element is not present in the array');
// }
// else{
//   console.log('element is present in the array');
// }
// //but this is not the right way to find out if the number is present in the array or not the best practice to find out if the element is present in the array or not is mentioned below

// console.log(num.includes(7));
// //more advanced way to do so is--
// console.log(num.indexOf(4,2));
// //in the above method we can see that we are trying to check if the number 4 is present in the array or not from the second index of the array.

// //abhi tak jo bhi finding searching humne kiya hai wo primitive ke upar kiya hai ek baari refeernces ke upar try karte hai..
// //array of objects
// let courses = [  
//   {no:1, naam:'Love'},
//   {no:2, naam:'Rahul'}
// ];
// console.log(courses);
// //console.log(courses.indexOf({no:1,naam:'love'}));
// //in order to deal with array of objects we use call back functions.
// //ek real life example se samjhne ke koshish karte hai lets assume ke aapki mummy ko shahi panner banana hai to usse banane ke liye aapki mummy ne aapse pucha ke beta kya aapne panner laaye to agar hum isse callback function se coorelate karke dekhe to hume pata chalega ke humare panner laane ya na laane ke action pe shahi panner ka  banana depend karta hai.
// //A callback is a function passed as an argument to another function This technique allows a function to call another function. A callback function can run after another function has finished.
// let course = courses.find(function(course){
//   return course.naam=='Love';
// });
// console.log(course);
// //ab mere ko ek baat bata kya hum upar likhe callback function ko short mai likh skte hai kya?? je haan likh skte hai using arrow function..dekhte hai kaise--aur readable ho jayega
// //points to remember -- function keyword ke jagah arrow use karlo aur agar ek input parameter ho to bracket bhi hata skte ho. aur agar tumhara code single line ak hai jaisa ke upar hai to brackets bhi hata skte ho aur return statement bhi.
// //using arrow function. no parameter then ()=>....;
// let coursee = courses.find(course =>course.naam==='Love');
// console.log(coursee);

// //remvoving element
// //end -> pop()   beginning-> shift()  middle->splice(3,no. of element you want to delete);


// let number = [1,2,3,4,5,6,7];

// //end
// number.pop();
// //beginning
// number.shift();
// //remove
// number.splice(2,3);
// console.log(number);

// //emptying an array
// let nume = [1,2,3,4,5];
// let numbers2 = nume;
// //nume = [];//worst tarika
// //nume.length = 0;//best
// nume.splice(0,nume.length);
// console.log(numbers2);
// console.log(nume);
// //ye tarika nhi hai delete karne ka

// //combining and slicing arrays
// let first = [1,2,3];
// let second = [4,5,6];
// let combined = first.concat(second);
// console.log(combined);
// //slice method to remove elements
// let marks=[10,20,30,40,50,60,70,80];
// let sliced=marks.slice(2,6);//(start index , excluding the last index)
// let slice=marks.slice(2);
// let slic = marks.slice();
// console.log(sliced);
// console.log(slice);
// console.log(slic);
// //hw cobining and slicing on objects.
// //spread operator se combine karna
// let fir = [1,2,3];
// let sec = [2,4,6];
// let comb = [...first,'a',false,...second,'b',true];
// console.log(comb);

// //copy kaise create karun??
// let another = [...comb];
// console.log(another);

// //iterating an array -- for of loop iterables mai chalta hai and for-each loop

// let arr = [10,20,30,40,50];

// for(let value of arr){
//   console.log(value);
// }

// //for-each loop
// arr.forEach(function(number){  //callback function
//   console.log(number);
// });

// //for-each loop using arrow function
// arr.forEach(number=>console.log(number));

// //Joining arrays
// let numer = [10,20,30,40,50];
// const joined = numer.join(',');
// console.log(joined);

// //split is string method

// // let message = 'This is my first message';
// // let parts = message.split(' ');

// // console.log(parts);

// // let joined = parts.join('_');
// // console.log(joined);


// // let numbers = [5,10,4,40];

// // numbers.sort();

// // console.log(numbers);

// // numbers.reverse();
// // console.log(numbers);


// // let numbers = [1,2,-1,-4];

// // let filtered =  numbers.filter(value => value >= 0);

// // console.log(filtered);


// // let numbers = [7,8,9,10];
// // console.log(numbers);

// // let items = numbers.map(value => 'student_no' + value);

// // console.log(items);

// let numbers = [1,2,-6,-9];

// let items = numbers
//             .filter(value => value >= 0)
//             .map(num => {value: num});

// console.log(items);