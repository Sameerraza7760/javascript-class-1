// const myObject={
//     js:'javascript',
//     cpp:'C++',
//     rb:'ruby',
//     swift:'Swift by apple'
// }

// for (const key in myObject) {
//    console.log(`${key} shortcut is of ${myObject[key]}`);
// }

// js shortcut is of javascript
// cpp shortcut is of C++
// rb shortcut is of ruby
// swift shortcut is of Swift by apple

///////////////////////////////////////////////////////////////////////////////////////////////



// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']

// for (const key in name) {
// console.log(key);
// }

// 0
// 1
// 2
// 3
// 4
// 5


///////////////////////////////////////////////////////////




// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']

// for (const key in name) {
// console.log(name[key]);
// }

// console.log('');


// ahsan
// uzair
// junaid
// ali
// ebaad
// mustafa

//////////////////////////////////////////////////////////

// const map= new Map()
// map.set('IN',"india")
// map.set('PK','pakistan')
// map.set('FR','franse')
// console.log(map);
//{ 'IN' => 'india', 'PK' => 'pakistan', 'FR' => 'franse' }

// for (const key in map) {
//     console.log(map[key]);
//     }

    // error map is not iterable



    ///////////////////////////////////////////////


    // const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']


    // name.forEach(item => {
    //     console.log(item);
    // });

    // ahsan
    // uzair
    // junaid
    // ali
    // ebaad
    // mustafa


    // for each loop takes the callback the call back function have not name


///////////////////////////////////////////////////////////////////////////////////////

// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']

// function printName(item) {
//     console.log(item);
    
// }


// name.forEach(printName); in this we do not give argument as an item to the printname 
//callbackfunction because its already give automatic item 


// ahsan
// uzair
// junaid
// ali
// ebaad
// mustafa





////////////////////////////////////////////////////////


// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']


//   name.forEach((item,index,arr)=>{
// console.log(item,index,arr);
//   }) 

//   ahsan 0 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]
// uzair 1 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]
// junaid 2 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]
// ali 3 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]
// ebaad 4 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]
// mustafa 5 [ 'ahsan', 'uzair', 'junaid', 'ali', 'ebaad', 'mustafa' ]


/// Not only gives the item he give more things like index arr


/////////////////////////////////////////////////////////////////////////////////////





// const object=[{
//     name:'sameer',
//     email:'sameer12@gmail.com',
//     age:19
// },
// {
//     name:'sameer',
//     email:'sameer12@gmail.com',
//     age:19
// },{
//     name:'sameer',
//     email:'sameer12@gmail.com',
//     age:19
// }
// ]

// object.forEach((item)=>{
// console.log(item.email);
// })


// sameer12@gmail.com
// sameer12@gmail.com
// sameer12@gmail.com

///////////////////////////////////////////////////////////


// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']


//  const loop= name.forEach((item)=>{
// console.log(item);
//   }) 


//   console.log(loop);


  //ahsan
// uzair
// junaid
// ali
// ebaad
// mustafa
// undefined

///////////////////////////////////////////////////////



// const name=['ahsan','uzair','junaid','ali','ebaad','mustafa']


//  const loop= name.forEach((item)=>{

// return item
//   }) 


//   console.log(loop);

  //undefined
  //because foreachloop does not return anythings 


///////////////////////////////////////////////////////

//   const num=[1,2,3,4,5,6,7]

//     const filterednum= num.filter((item)=>(item>4))

//     console.log(filterednum);
  


//     console.log(num);
      //[ 5, 6, 7 ]


// orignal array as it is
// [  1, 2, 3, 4, 5, 6, 7]




///////////////////////////////////////////


// const num=[1,2,3,4,5,6,7]

//     const filterednum= num.filter((num)=>{
//       return  num>4
//     })

//     console.log(filterednum);
  

//[ 5, 6, 7 ]
    // console.log(num);
    // [
    //     1, 2, 3, 4,
    //     5, 6, 7
    //   ]

    /////////////////////////////////////////////////////

    // how we do in foreach method sooo

//     const num=[1,2,3,4,5,6,7]

//  const newNum=[]

//     num.forEach((item)=>{
//      if (item>4) {
//         newNum.push(item)
//      }
//     })
//     console.log(newNum);

    //[ 5, 6, 7 ]


    ////////////////////////////////////////////////////


//   const object=[{
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:16
//         },
//         {
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:14
//         },{
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:16
//         }
//         ,{
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:19
//         }
//         ,{
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:19
//         }
//         ]
        
//         const filteredname=object.filter((item)=>(item.age===16))
//         console.log(filteredname);


//[
//   { name: 'sameer', email: 'sameer12@gmail.com', age: 16 },
//   { name: 'sameer', email: 'sameer12@gmail.com', age: 16 }
//]

//////////////////////////////////////////////////////////////////////////////////////



//whats the difference between filter and find 
//let see


// const arr=[1,2,,3,3,4,6,7,8,9]

// const filterItearr=arr.filter((item)=>item===2)
// console.log(filterItearr);




// [ 2 ]




// const arr=[1,2,,3,3,4,6,7,8,9]

// const filterItearr=arr.filter((item)=>item===2)
// console.log(filterItearr);


// [3,3]


// filter reuturn array

//////////////////////////////



// find


// const arr=[1,2,,3,3,4,6,7,8,9]
// const findItem=arr.find((item)=>(item===3))
// console.log(findItem);

//3


//not return an array and just give one word 
















///////////////////////////////////////////////


//   const object=[{
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:16
//         },
//         {
//             name:'sameer',
//             email:'sameer12@gmail.com',
//             age:14
//         },{
//             name:'danish',
//             email:'sameer12@gmail.com',
//             age:16
//         }
//         ,{
//             name:'uzair',
//             email:'sameer12@gmail.com',
//             age:19
//         }
//         ,{
//             name:'ahsan',
//             email:'sameer12@gmail.com',
//             age:19
//         }
//         ]
        

//         const ah={
//             name:'sameer',
//             age:9,

//         }
       
        // const filteredname=object.filter((item)=>{return item.age===16 && item.name==='sameer'})
        // console.log(filteredname);


        //[ { name: 'sameer', email: 'sameer12@gmail.com', age: 16 } ]




        //////////////////////////// NOW MAP LOOP ////////////////////////////


        // const number=[1,2,3,4,5,6,7,9,10]
        // const myNum=number.map((item)=>{
        //     return item+10
        // })

        // console.log(myNum);
        // [
        //     11, 12, 13, 14, 15,
        //     16, 17, 19, 20
        //   ]


        //////////////////////////////////////////////

        /////////////////////////// NOW CHANING ////////////////////////////


//         const number=[1,2,3,4,5,6,7,9,10]
//         const myNum=number.map((item)=>(item*10)).map((num)=>(num+1))
//         console.log(myNum);

// //[
//     11, 21, 31,  41, 51,
//     61, 71, 91, 101
//   ]



//////////////////////////////////////////////////////



// const number=[1,2,3,4,5,6,7,9,10]
//         const myNum=number.map((item)=>(item*10)).map((num)=>(num+1)).filter((item)=>(item>=40))
//         console.log(myNum);


        // [ 41, 51, 61, 71, 91, 101 ]


        ////////////////////////////////////////////////


        //reduce function



// const number=[1,2,3,4,5,6,7,9,10]
//         const total=number.reduce((acc,currval)=>{
//             console.log(`acc value ${acc} and currval ${currval} `);
//             return acc+currval
//         },0)


//         console.log(total);


// acc value 0 and currval 1 
// acc value 1 and currval 2 
// acc value 3 and currval 3
// acc value 6 and currval 4
// acc value 10 and currval 5
// acc value 15 and currval 6
// acc value 21 and currval 7
// acc value 28 and currval 9
// acc value 37 and currval 10
// 47


////////////////////////////////////////////////////////////////////////////


// const shoppinkCart=[
//     {
//         name:'sameer',
//         course:'js',
//         price:1200
//     },
//     {
//         name:'sameer',
//         course:'js',
//         price:1200
//     },
//     {
//         name:'sameer',
//         course:'js',
//         price:1200
//     },
//     {
//         name:'sameer',
//         course:'js',
//         price:1200
//     }
// ]


//   const total= shoppinkCart.reduce((acc,item)=>(acc+item.price),0)

//   console.log(total);


//   4800


/////////////////////////////////////////////////////