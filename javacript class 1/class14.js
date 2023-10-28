// immediatly invoked function iifi functions


(function chai() {
    console.log("DB IS CONNECTED");
})();

///DB IS CONNECTED

//without name
////////////////////////////////////////////////////////////

((name)=> {
    console.log(`DB 2 IS CONNECTED From ${name}`);
})('sameer')
// DB 2 IS CONNECTED From sameer
