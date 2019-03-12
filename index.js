var ss = ["HTML", 11 , "JavaScript", 2 , "CSS", 23, 12];
 
console.log(ss.push(-3));
console.log(ss);

console.log(ss.unshift(1000));
console.log(ss);

console.log(ss.push("Last array element"));
console.log(ss);

console.log(ss.splice(3, 1));
console.log;

console.log(ss.filter(function(item){
   return typeof item ==="number";
}))
console.log;

console.log(ss.map(function (a){return a*a;}));
console.log;

console.log(Math.max(...ss));