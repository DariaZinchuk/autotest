const str = "ahb acb aeb aeeb adcb axeb";
const regexp = /a.b/g;

console.log(str.match(regexp));

const str1 = "2 + 3 223 2223";
const regexp1 = /2 \+ 3/g;

console.log(str1.match(regexp1));

const date = new Date ();
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());
