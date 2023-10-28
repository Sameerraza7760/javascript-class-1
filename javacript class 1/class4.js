// console.log(null>0);
// //false
// console.log(null==0);
// //false
// console.log(null>=0);
// //true


// console.log(undefined>0);
// //false
// console.log(undefined==0);
// //false
// console.log(undefined>=0);
//false

//compare with undefined always return a false


// === stricky cheak


// console.log('22'==22);
// true when compare ==

// let name1='sameer'

// name1='zauir'
// console.log(name1);


// what is permitve and non permitive

// Number: Represents both integer and floating-point numbers. Example: let x = 5;
// String: Represents a sequence of characters. Example: let name = 'John';
// Boolean: Represents a logical value, either true or false. Example: let isStudent = true;
// Undefined: Represents an uninitialized variable. Example: let someVariable;
// Null: Represents the intentional absence of any object value. Example: let nullValue = null;
// Symbol (ES6): A unique and immutable value often used as object property keys. Example: const sym = Symbol('description');


// Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type. Example: let person = { name: 'Alice', age: 30 };
// Array: An ordered list-like object. Example: let colors = ['red', 'green', 'blue'];
// Function: A reusable block of code that performs a specific task. Example: function add(a, b) { return a + b; }



// let a = 5; // Primitive type
// let b = a; // b now holds a copy of the value 5

// a = 10; // Modifying a doesn't affect b

// console.log(a); // Output: 10
// console.log(b); // Output: 5

// let arr1 = [1, 2, 3]; // Non-primitive type (an array)
// let arr2 = arr1; // arr2 now holds a reference to the same array as arr1

// arr1.push(4); // Modifying arr1 also affects arr2

// console.log(arr1); // Output: [1, 2, 3, 4]
// console.log(arr2); // Output: [1, 2, 3, 4]


// let email;
// undefined




// const id=Symbol(212)
// const anotherID=Symbol(212)

// console.log(
//     id==anotherID
// )

// not match












// type of value     Result


// undefined          'undefined'
// Null               'object'
// Boolean            'Boolean'
// Number             'number'
// String              'string'
//function              'function
//symbol'              'symbol'





//stack(primitive)  //heap (non premitive)

// let youtubename='carry'
// anothername=youtubename

// anothername='motii'
// console.log(anothername); // moti
// console.log(youtubename);// carry

//let we assign a value of youtubename='carry' and after we make another varibale and store oldone in anothername the 
//old variable is gives copy not orignal 



// let user1={
//    name:'sameer',
//    email:'sameer12@gmail.com'
// }

// let user2=user1

// user2.email='anil2@gmail.com'

// console.log(user1);




// console.log(user1.email);
 
// let name1=user1.email
// let name2=name1


// name2='anil2@gmail.com'
// console.log(name1);


//in pirimitive if we change the value of new varible the oldone is not changed
// and in non perimitive or heap when we change the value of newone the oldone is changed




// const name='sameer'
// const number=12

// console.log(name+number+'hanann');







// in modern era we used bectiz not string like this


// console.log(`${name} ${number} hann`);





// const name1 = new String('sameer');

// console.log(name.__proto__);
//obj
// console.log(name.length);
//6 is ans

// console.log(name.toUpperCase());
//SAMEER

// console.log(name.charAt(2));  // it start with zeroo
// a is ans
// console.log(name.indexOf('m'));
// 2 is ans



// const name2=name1.substring(0,4)
// console.log(name2);
// same is ans 
// const name2=name1.substring(0,4)

//   name2=name1.slice(-6,2)
  //sa is ans it always start at the end 

// console.log(name2);






// const name1='          sameer'

// console.log(name1);
// //      sameer
// console.log(name1.trim());
//sameer      trim() remove extra spaces








// const url='https//sameergithub//20%.com'

// // console.log(url.replace('20%','-'))
// //https//sameergithub//-.com


// console.log(url.includes('sameer'))
// //true
// console.log(url.includes('ahsan'));
//false  it chek that this name availible in variable or not











































