console.log("hello world");
function add(a,b){
    return a+b;
}
console.log(add(10,20));

// process is a global obj and locals is a global object in express

console.log(process.argv);
// slice the args
var proc=process.argv.slice(2)
console.log(add(parseInt(proc[0]),parseInt(proc[1])));

// modules in node js : library contains predefined funtions and methods are present

