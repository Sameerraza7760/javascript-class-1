// LET CONST  AND VAR


// var a=100
// let b=200
// const c=300

// console.log(a);
// 100
// console.log(b);
// 200
// console.log(c);
// 300


// {} this is called scopes inclute in if else and loop function not  in object

// if (true){
// var a='sameer'
// let b='ahsan'
// const c='uzair'
// }

// console.log(a);
// sameer
// console.log(b);
// undefined
// console.log(c);
// undefined





// thats why we dont used var because it can be accses outside the scope the let and const cannot accsess the outide the scope
//  and the second point is that when more programmer work in same project and one programmer make the var vaiable at the same time another 
// programmer also make the same as first so its not good the functionality not working properly
// thats why we used let and const 

// 1st programmer variable
// var a=300

// if (true){
//     //another programmer variable
//     var a='sameer'
//     let b='ahsan'
//     const c='uzair'
//     }

//     console.log(a);
//     sameer 
    
//     the 1st programmer variable is not consoled thats why var is bad


//     now we see in let
//     1st programmer variable
// let b=300

// if (true){
//     //another programmer variable
//     var a='sameer'
//     let b='ahsan'
//     const c='uzair'
//     }

//     console.log(b);
//     300
//     because let is not worked outside the scope




//     what is blocks scope and global scope
//     the ans is
    
//     var o=19
//     var t=89
//     this is global scope
    
//     {

//         var a =200
//         var b =300
//         //this is block scope
//     }


//     let a=200


//     function one (){
//         console.log(a);
//     }


//     one()
//     200 
//     the block scope take the accsess  from global but the global cannnot take the accses from block 

//     function one (){
//         let a=200

//         function two() {
//             let b=300
//             console.log(a);
//         }
//         two()
//         // console.log(b);
//         //b is not defined becasue the b in in block scope thats why it cannot accsess
//     }


//     one()

//     if we remove  console.log(b) so it it return the console.log(a)=200



//what is cloture 
// ans is the golbalscope cannot accses the the block scope but the block scope can acces the global scope


// let userName='Sameer'
// if (userName==='Sameer'){
//     console.log(userName);
// }
//Sameer








// if (true){
//     let Name='sameer'
//     if (Name==='sameer') {
//         let website='youtube'
//         console.log(Name);
//     }
//     console.log(website);
// }
// console.log(Name);
// the error in website and Name outside due to block scope

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