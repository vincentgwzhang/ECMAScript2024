{
    let myNumber = 1_000_000;
    // console.log(myNumber); //output: 1000000
    let num = 0.000_0002;
    // console.log(num); //output: 2e-7
}


{
    let myStr = 'assasinate';
    // console.log(myStr.replaceAll('s', 'm'));
}




{
    const myObject = new WeakRef({
        name: 'John',
        age: 25
    });

    // console.log(myObject.deref()); //output: {name: “John”, age: 25}

    // console.log(myObject.deref().name); //output: John
}





{
    const promise1 = new Promise((resolve, reject) => { reject('promise1 was resolved'); });
    const promise2 = new Promise((resolve, reject) => { resolve('promise2 was resolved'); });
    const promise3 = new Promise((resolve, reject) => { resolve('promise3 was resolved'); });

    let result = Promise.any([promise1, promise2, promise3]);

    // result.then(res => console.log(res));
}





{
    // x &&= y 相当于if(x) {x=y;}

    let a = true;
    let b = false;
    let c = 5;

    a &&= c; // a 为 true，执行赋值操作，a 现在等于 5
    // console.log(a); // 输出: 5

    b &&= c; // b 为 false，不执行赋值操作，b 保持原值
    // console.log(b); // 输出: false
}






{
    // x ||= y 相当于if(!x) {x=y;}

    let a = null;
    let b = 0;
    let c = 5;

    a ||= c; // a 为 null（即逻辑假），执行赋值操作，a 现在等于 5
    // console.log(a); // 输出: 5

    b ||= c; // b 为 0（即逻辑假），执行赋值操作，b 现在等于 5
    // console.log(b); // 输出: 5
}




{
    // 相当与 if (x === null || x === undefined) {x = y;}
    let a = null;
    let b;
    let c = 5;

    a ??= c; // a 为 null，执行赋值操作，a 现在等于 5
    console.log(a); // 输出: 5

    b ??= c; // b 为 undefined，执行赋值操作，b 现在等于 5
    console.log(b); // 输出: 5

    let d = 0;
    d ??= c; // d 为 0（非 null 或 undefined），不执行赋值操作，d 保持原值
    console.log(d); // 输出: 0

}