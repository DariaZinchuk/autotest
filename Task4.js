const movies = ["Focus", "The Upside", "True Spirit", "The Witch"];

movies.forEach(movie => console.log (movie));

const carMan = ["Audi", "Lexus","Mazda","Hundai"];
const str = carMan.join(",");
console.log(str);
const arr = str.split (',');
console.log (arr);


const friends = ["Kate", "Julia", "Yana", "Oksana"];
const final = friends.map(friend => "Hello, " + friend);
console.log(final);


const num = [1,2,3,4,0]
num.forEach(number => console.log(Boolean(number)));

const order = [1,6,7,8,3,4,5,6];
order.sort((a,b) => b-a);
console.log(order);

const compare = [1,6,7,8,3,4,5,6];
const result = compare.filter(item => item > 3);
console.log(result);

function equalNum (arr, num) {
    const index = arr.findIndex((item,idx)=>num===idx);
    console.log(index)
}
const example = [1,4,7,9,"hello"];
equalNum(example,7)


for (let a=0; a < 10; a++) {
    console.log(a);
}


let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
} 
  console.log(i); 
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log (i);
    }
}