// OBJECT

//Single turn object
// const user1=new Object()
// console.log(user1);
// {}


// non single turn object
// const user={
// }
// console.log(user);
// {}
// if we add items in user so 

// user.name='sameer'
// user.email='sameer@gmail.com'
// user.age=19

// console.log(user);
// { name: 'sameer', email: 'sameer@gmail.com', age: 19 }

// const regularUser={
//  email:'sameer12@gmail.com',
// age :19,
//  fullName   :{
//     firstName:'Sameer',
//     lastName:'Raza'
//  }
// }

// console.log(regularUser.fullName);
// { firstName: 'Sameer', lastName: 'Raza' }
// console.log(regularUser.fullName.firstName);
//Sameer



// const obj1={
//     1:'a',
//     2:'b',
//     3:'c'
// }
// const obj2={
//     4:'a',
//     5:'b',
//     6:'c'
// }


// const obj3={obj1,obj2}
// console.log(obj3);
// {
//     obj1: { '1': 'a', '2': 'b', '3': 'c' },
//     obj2: { '1': 'a', '2': 'b', '3': 'c' }
//   }



// if we merger together in new onj so we used assign or spread opeartot



//by using assign
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }
// if we include obj3 so actuallay we can add also

//by using spreadoperator

// const obj3={...obj1,...obj2}
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }


// const obj={
//     name:'sameer',
//     lastName:'Raza',
//     age:19,
// }
// console.log(Object.keys(obj));
// [ 'name', 'lastName', 'age' ]
// console.log(Object.values(obj));
// [ 'sameer', 'Raza', 19 ]

// if we want to cheak the item in object that have or not
// console.log(obj.hasOwnProperty('name'));
//true
// console.log(obj.hasOwnProperty('area'));
//false


// const user={
//     name:'SameerRaza',
//     age:19,
//     lastLoggedin:'Monday'
// }
// console.log(user);
// { name:'SameerRaza', age:19,lastLoggedin:'Monday'}
// now if we distructore the object property so like this
// const user=user.name is not the best approch
//  const {name}=user
 //SameerRaza

// const {name:UserName}=user
// console.log(UserName);
//Sameerraza

