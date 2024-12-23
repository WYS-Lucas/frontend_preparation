const m = new Map();  // key-value pairs.

// size, set(), get(), has(), delete(), clear()

const foo = new Map();
foo.set('a', true);
foo.set('b', false);
console.log(foo.size);
foo.get('a');  

for (let key in foo.keys()) {
    console.log(key);
}

for (let value in foo.values()) {
    console.log(value);
}

for (let entry in foo.entries()) {
    console.log(entry[0], entry[1]);
}

foo.forEach(function(value, key, map) {
    console.log(`Keys:${key}, values:${value}`);
});