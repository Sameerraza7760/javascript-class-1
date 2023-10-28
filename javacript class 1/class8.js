
//if we want to add symbol in an object and print so like this
let sym=Symbol("key")


let user={
    name:"sameer",
    email:'sameer1@gmail.com',
    [sym]:"key",
    phoneNumber:'21642562562',
    age:'19',
    lastOnline:['monday','tuesday','thursday','friday']
}
// if we accses the key 
// console.log((user.name));
// //sameer
// console.log(user.lastOnline);
// [ 'monday', 'tuesday', 'thursday', 'friday' ]
// console.log(user.lastOnline[2]);
//thursday
//but to accsess the key as better approch 
// console.log(user['email']);
// sameer1@gmail.com
// console.log( typeof user['sym']);
// string
// but there is a string so we insert a symbil in square braces

// console.log( typeof user['sym']);
///SYMBOL

//if we chaned the key in an onject so we do this
// user.email='sameer12@gmail.com'
// console.log(user);
// {
//     name: 'sameer',
//     email: 'sameer12@gmail.com',
//     phoneNumber: '21642562562',
//     age: '19',
//     lastOnline: [ 'monday', 'tuesday', 'thursday', 'friday' ],
//     [Symbol(key)]: 'key'
//   }

//the email has chenged

// if we want that now no one changed the onjecy so we freeze like this

// Object.freeze(user)
// user.email='ahsan@gmail.com'
// console.log(user);
// {
//     name: 'sameer',
//     email: 'sameer12@gmail.com',
//     phoneNumber: '21642562562',
//     age: '19',
//     lastOnline: [ 'monday', 'tuesday', 'thursday', 'friday' ],
//     [Symbol(key)]: 'key'
//   }

// the object.email is not changed is called the freeze


// user.greeting='Hello'

// console.log(user);
// {
//     name: 'sameer',
//     email: 'sameer1@gmail.com',
//     phoneNumber: '21642562562',
//     age: '19',
//     lastOnline: [ 'monday', 'tuesday', 'thursday', 'friday' ],
//     greeting: 'Hello',
//     [Symbol(key)]: 'key'
//   }

//greeting is add 



//if we add the function in object
// user.Function=function(){
//     console.log('hello world');
// }




// console.log(user.Function());
// hello world

// console.log(user.Function);
// [Function (anonymous)]


// user.Function=function (params) {
//     console.log(`heloo ${this.name}`);
// }


// console.log(user.Function());
//heloo sameer





