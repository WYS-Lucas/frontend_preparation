let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; 

let str = "352255";
let unique2 = [...new Set(str)].join(""); 

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

let union = new Set([...a, ...b]);
console.log(union);

let intersect = new Set([...a].filter(x => b.has(x)));

let difference = new Set([...a].filter(x => !b.has(x)));

console.log(intersect, difference);