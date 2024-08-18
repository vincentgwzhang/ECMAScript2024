{
    // 方法 Object.fromEntries() 把键值对列表转换为一个对象

    let obj = Object.fromEntries([
        ['foo', 1],
        ['bar', 2]
    ])

    // console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
    // {foo: 1, bar: 2}
}






{
    // console.log('   abc    '.trimStart());
    // console.log('   abc    '.trimEnd());
}







{
    const numbers = [1, 2, 3]
    numbers.map(x => [x * 2]) // [[2], [4], [6]]
    numbers.flatMap(x => [x * 2]) // [2, 4, 6]
}



{// toString() 看函数源代码

    // console.log(Number.parseInt.toString())
}



{// catch 可以忽略 e
    const validJSON = json => {
        try {
            JSON.parse(json)
            return true
        } catch {
            return false
        }
    }
    
    const json = '{"name":"imooc", "course": es}'
    // console.log(validJSON(json))
}




{
    // console.log(JSON.stringify('\uD83D\uDE0E')) // 笑脸
}