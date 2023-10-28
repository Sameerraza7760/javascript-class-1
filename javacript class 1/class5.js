// const number=400
// console.log( typeof number);
//number


// const anothernum=new Number(100)
// // console.log(anothernum);
// // [Number: 100]

// // const number=anothernum.toString()
// //string '100'
// // console.log(  number.length);
// // 3
// console.log(anothernum.toFixed(1));
//100.0





// const number=100.912
// console.log(number.toPrecision(3))
//101 it alwys give a short value when the value give 100.221 so he give a actual valuee



// // 
// const number=109221121
// console.log(number.toLocaleString());
// //it gives a us standard like this 109,221,121



// math

// console.log(Math.round(3.8));
// //4
// console.log(Math.round(3.3));
//3



// console.log(Math.ceil(2.1));
// //3
// console.log(Math.ceil(2.8));
// //3
// console.log(Math.ceil(2));
//2



// console.log(Math.max(8,4,2,1));
// // 8
// console.log(Math.min(8,5,4,3,1))
//1







// console.log(Math.floor(8.9));
// // 8


// console.log(Math.floor(7.9));
//7



// console.log(Math.random()*10);
// // 9.664264410088437
// // 9.664264410088437
// // its mean when Math.random choose the value between 0 to 1 the the value is multiply by 10 but it may be it return a value like 0.somthing

// console.log(Math.random()*10+1);
// its mean when Math.random choose the value between 0 to 1 the the value is multiply by 10 and the plus 1 it return greater then 1 for must


// console.log(Math.floor(Math.random()*10+1))

// it return a smaller value



// let min=10
// let max=20

// console.log(Math.floor(Math.random()*(max-min+1)));
// //it always return the value less the ten or equal to if we add min so it giv greate the 10
// console.log(Math.floor(Math.random()*(max-min+1)+min));

// DATE

// let date=new Date()
// 2023-10-13T22:28:46.254Z
// console.log(date.toString());
// Fri Oct 13 2023 15:28:58 
// console.log(date.toDateString());
// Fri Oct 13 2023

// console.log(typeof date);
//object

// let myDate=new Date(2023,0,23,5,3)
// console.log(myDate.toLocaleString());
// 1/23/2023, 5:03:00 AM



// let mytimstamp=Date.now()
// console.log(mytimstamp);
// 1697379940447
//the date is give the proper with milisecoonds if we want to small it so we diveide by 1000
// console.log(Math.floor(mytimstamp/1000));
// 1697380057




let newDate=new Date()
// console.log(newDate);
// 2023-10-15T14:28:50.355Z

// if we only get the month of current date so we do this because date is the object

// console.log(newDate.getMonth());
// 9
console.log(newDate.getDay());
// 0  becasue sunday






