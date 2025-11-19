function hello() {
    alert("Hello, world!");
}
let a=5;
let b=10;
console.log("Sum:", a + b);
console.log("Product:", a * b);
console.log(a==b);

console.log(greet("hair"));
function greet(name){
    return "hello,"+name+"!"
}
console.log(greet("shyam"))

const greet2=(function(name){
return "hi,"+name+"!"
}
console.log(greet2("ram")))

const greet3 =(name)=>{
    return "hey,"+name+"!"
}
 const greet4=name=>"yo,"+name+"!"


const varname =document.querySelector("#myId");
varname.addEventListener("click",function()){
    alert("button clicked!");
}
const varname2 =document.querySelector("#myId2");
varname2.addEventListener("input",()=>{
    alert("button 2 clicked!");
})