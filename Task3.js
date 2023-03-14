const car = {
    color: "black"
}
car.color = "green"
car.power = function(){
    console.log("engine power");
}
car.power()

function sum (pears,apples){
    return pears + apples
}
let result = sum (20,30)
console.log (result);

function NameDef (name){
const user = "Daria"
 name === user ? console.log ("Hello, " + user ) : console.log ("there is no such name")
}
NameDef ("Daria");

function type (parameter){
    console.log (typeof parameter);
}
type("12")

function IsPrime (n){
if (n<=1) return "is not a prime";
if (n>2){
    for (i = 2; i < n; i++){
        if (n%i === 0)
        return "is not a prime";
    }   
}
return "is prime"
}
console.log(IsPrime(4))