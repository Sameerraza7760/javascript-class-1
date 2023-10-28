//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ INTRESTING @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2


// function addOne(num) {
//     return num+1
    
// }
// console.log(addOne(5));
//6


// Arror Function


// const addTwo=()=>{
// return num+2
// }

// console.log(addTwo(5));
//7


// but at the same point if we call the normal function before like this


// console.log(addOne(5));
// function addOne(num) {
//     return num+1
    
// }

//6 
// still worked 



// but what happened when we call the arrow function before function so what happend

// console.log(addTwo(5));

// const addTwo=()=>{
//     return num+2
//     }
    

    // the error is cannot accses the addTwo befoe inilize
    
    //thats the deference



    //What is this 
    // this reffered to currunt context

    //for example 


//     let user={
//         userName:'SameerRaza',
//         age:19,
//         email:'sameer12@gmail.com',
//         welcomemessege: function(){
//               console.log(`${this.userName},Welcome to the website`);
//               console.log(this);
//         }
//     }

    
// console.log(user.welcomemessege());


// user.userName='Ahsan'
  
// console.log(user.welcomemessege());



// {
//     userName: 'SameerRaza',
//     age: 19,
//     email: 'sameer12@gmail.com',
//     welcomemessege: [Function: welcomemessege]
//   }
//   undefined
//   Ahsan,Welcome to the website
//   {
//     userName: 'Ahsan',
//     age: 19,
//     email: 'sameer12@gmail.com',
//     welcomemessege: [Function: welcomemessege]
//   }
//   undefined

//////////////////////////////////////////////////////////////////////////////////////////////

// console.log(this);
//{} because this is the node envirment if we used this on browser so it return the window object




////////////////////////////////////////////////////////////////////////////////////////
// function chai(){
//     let userName='sameer'
//     console.log(this);
// }
// this also return an object or some items or function


// function chai(){
//     let userName='sameer'
//     console.log(this.userName);
// }
// undefined

//this not worked on  function when we accses the function value on this

// but what happened in an arrow function for this

// const arrowfunction=()=>{
//     let userName='sameer'
//     console.log(this);
// }
// arrowfunction()
// {}


/////////////////////////////////////////////////////////////////////////////////////////////////////

// what is explecit return and implecit return

// const arrowfunction=()=>{
//     let userName='sameer'
//    return userName
// }
// console.log(arrowfunction());
//sameer


// now implecit return

// const addNum=(num1,num2)=> (num1+num2)


// console.log(addNum());
// NaN


// const addNum=(num1,num2)=> (num1+num2)


// console.log(addNum(""));


// undefined


// const addNum=(num1,num2)=> (num1+num2)


// console.log(addNum(4,3));
//7

// if we return an object 
// const addNum=(num1,num2)=> ({name:'sameer'})


// console.log(addNum(4,3));

// { name: 'sameer' }


