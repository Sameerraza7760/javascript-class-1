// ARRAY

// let heroesA=["spiderMan","batman","superman"]

// let heroesB=["Sameer","Uzair","ghaffar","Mustafa"]
// heroesA.push(heroesB)
// console.log(heroesA);

// ['spiderMan'  ,'batman',  'superman',[ 'Sameer', 'Uzair', 'ghaffar', 'Mustafa' ]]

// console.log(heroesA[3]);
// [ 'Sameer', 'Uzair', 'ghaffar', 'Mustafa' ]


// console.log(heroesA[3][1]);
//Uzair

// now if we actuallay merge the two or more array together so we used concat and spread operator

// const newArray=heroesA.concat(heroesB)
// console.log(newArray);
// [
//     'spiderMan',
//     'batman',
//     'superman',
//     'Sameer',
//     'Uzair',
//     'ghaffar',
//     'Mustafa'
//   ]

// console.log(heroesA);
// [ 'spiderMan', 'batman', 'superman' ]
// its not effect the old array else give the new one array

// in spread operator
// const newArray=[...heroesA,...heroesB]
// console.log(newArray);

// [
//     'spiderMan',
//     'batman',   
//     'superman', 
//     'Sameer',   
//     'Uzair',    
//     'ghaffar',
//     'Mustafa'
//   ]

//nestedArray
// const newArray=[1,2,3,[4,5],[6,7,8,[9,10]]]
// const ALLitemsinOneArray=newArray.flat(Infinity)
// console.log(ALLitemsinOneArray);
// [1,2,3,4,5,6,7,8,9,10]


// console.log(newArray);
// [ 1, 2, 3, [ 4, 5 ], [ 6, 7, 8, [ 9, 10 ] ] ]
// not effect the old array but the the new one 

// let array=["sameer","uzair","sawear"]
// console.log(Array.isArray("ahsan"));
//false
// cheak that the array have or not and return boolean
// console.log(Array.isArray("uzair"));

// console.log(Array.from("Ahsan"));
// [ 'A', 'h', 's', 'a', 'n' ]

// console.log(Array.from({name:"hitesh"})) 
//[]
//return an empty array becasue it cannot dothiss



// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3));


// // [ 100, 200, 300 ]






