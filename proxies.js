var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = 2;

console.log(p.a, p.b); // 1, 2
console.log('c' in p, p.c); // false, 37