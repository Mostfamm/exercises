console.log("Hello, world!");
const myVariable = "The potential of the future " 
const result = myVariable + "is the best thing ever"
console.log(result) 

const  password="a112"
const confirmPassword="a112"
if(password==confirmPassword){
 console.log("true")  
} 
console.log((5 > 2) && false) 
console.log(!("knife" === "sword")) 
console.log((1 < 2) || (-1 > -1) || !false) 
console.log((31 % 5) == "1") 
console.log(!!true)
let username = prompt("What is your username?") 

const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
b = a
}

d = a + (b * c)
d++
b += 2
console.log(a);
console.log(b);
console.log(c);
//////////////////////////////////////////////////////////////////////////////////////////////////
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
let swap=genes[2];
genes[2]=genes[4];
genes[4]=swap;
genes.splice(3,1);
genes.push("AZIN2");
genes.push("AZIN2");
genes.unshift("FXT");
console.log(genes);
/////////////////////////////////////////////////////////////////////////////////////////////
let p1 = {
name: "Mariah",
age: 20,
city:"mashhad"
}
let p2 = {
name: "ahmad",
age: 20,
city:"mashhad"
}
if(p1.city==p2.city){
console.log(p1.name+" wanted to date "+p2.name);
}
else
{
console.log(p1.name+" wanted to date "+p2.name+" but couldn’t");

}
/////////////////////////////////////////////////////////////////////////////////////////////////////
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []
for(let i = 0; i < 3; i++){
people.push({name: names[i], age: ages[i]} )
}
console.log(people);
/////////////////////////////////////////////////////////////////////////////////////////////////////
const posts = [
{id: 1, text: "Love this product"},
{id: 2, text: "This is the worst. DON'T BUY!"},
{id: 3, text: "So glad I found this. Bought four already!"}
]
for(let Index in posts){
if(Index.id==2){
posts.splice(1,1);
}
}
console.log(posts);
/////////////////////////////////////////////////////////////////
let x = [ 
     {name: "ant", 
     color: "brown"}, 
     {name: "flower", 
     color: "green"}
 ]
 x.push( {name: "ant", color: "green"} );
 console.log(x[2].name);
 /////////////////////////////////////////////////////////////////////////////
 
 let car = {wheels: 4} 
 car['color'] = 'blue';
 console.log(car);
 //////////////////////////////////////////
  x = [ {human: {name: 'Daena', age: 31} } ][0].age
 console.log(x);
 
if (13 == "space") {
let cowSound = "moo"
}
else {
console.log("Cow says " + cowSound)
}
