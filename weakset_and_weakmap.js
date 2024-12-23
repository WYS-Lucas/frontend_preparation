const a = [[1,2],[3,4]];
const ws = new WeakSet(a);
// can't iterate through weakset, there's no size attribute.

const wp = new WeakMap();
const key = {foo: 1};
wp.set(key, 2);
// weakmap only accept object as keys.