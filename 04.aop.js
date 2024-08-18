{
    let o = {
        name: 'xiaoming',
        age: 20
    }
    
    let handler = {
        get(obj, key) {
            return Reflect.has(obj, key) ? obj[key] : ''
        }
    }
    
    let p = new Proxy(o, handler)
    
    console.log(p.from);
    console.log(p.name);
}