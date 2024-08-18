{
    let arr = [7, 8, 9, 10, 11];

    // forEach 函数
    arr.forEach(function (elem, index, array) {
        // console.log(elem, index)
    })





    // map 函数
    let result = arr.map(function (value) {
        value += 1
        return value
    })
    // console.log(result); 8,9,10,11,12





    // filter 函数
    result = arr.filter(function (value) {
        return value == 10
    })
    // console.log(result) // 10





    // some 函数
    result = arr.some(function (value) {
        return value == 10
    })
    // console.log(result) // true





    // every 函数
    result = arr.every(function (value) {
        return value == 10
    })
    // console.log(result) // true





    // reduce 函数， 累加
    let sum = arr.reduce(function (prev, cur, index, array) {
        // console.log(`index = ${index}, prev = ${prev}, cur = ${cur}`);
        return prev + cur;
    }, 0)
    // console.log(sum); = 45
}



// Array.from
{
    Array.from("foo"); // ['f', 'o', 'o']

    const set = new Set(["foo", "bar", "baz", "foo"]);
    Array.from(set);   // [ "foo", "bar", "baz" ]

    const map = new Map([
        [1, 2],
        [2, 4],
        [4, 8],
    ]);
    Array.from(map);   // [[1, 2], [2, 4], [4, 8]]


    const mapper = new Map([
        ["1", "a"],
        ["2", "b"],
    ]);
    Array.from(mapper.values());
}


// Array.of
{
    Array.of(7); // [7]
}

// Array.find, 返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined
{
    let array = [5, 12, 8, 130, 44];

    let found = array.find(function(element) {
        return element > 10;
    });
    
    // console.log(found);
}

// copyWithin: Copy to index 1 all elements from index 3 to the end
{
    const array1 = ['a', 'b', 'c', 'd', 'e'];
    // console.log(array1.copyWithin(1, 3));
}