/////////////////////////// is 的用法 ///////////////////////////
{
    let obj1 = {
        name: 'xiecheng',
        age: 34
    }

    let obj2 = obj1;

    Object.is(obj1, obj2) === true;
}
/////////////////////////////////////////////////////////////////



/////////////////////////// assign 的用法 ///////////////////////////
{
    const target = {
        a: 1,
        b: 2
    }
    const source = {
        b: 4,
        c: 5
    }

    // 会合拼所有的属性
    //let returnedTarget = Object.assign(target, source)
    // console.log(target)
    // console.log(target.c);
    // console.log(returnedTarget)

    //let returnedTarget = Object.assign(target, undefined);
    //console.log(target); // target 不会有任何变化

    //let returnedTarget = Object.assign(target, null);
    //console.log(returnedTarget); // target 不会有任何变化

    // let returnedTarget = Object.assign(undefined, source) // 抛出错误
    // let returnedTarget = Object.assign(null, source)      // 抛出错误
}
////////////////////////////////////////////////////////////////////





/////////////////////////// keys 的用法 ///////////////////////////

// keys 的用法是轮寻所有属性
{
    let obj = {
        name: 'xiecheng',
        age: 34,
        school: 'imooc'
    }

    // Object.keys(obj).forEach(key => {
    //     console.log(key, obj[key])
    // });
    // console.log(Array.isArray(Object.keys(obj))); // true
}
//////////////////////////////////////////////////////////////////




/////////////////////////// getOwnPropertyNames 的用法 ///////////////////////////
// getOwnPropertyNames 的用法是轮寻所有属性, 和 keys 的区别在于，getOwnPropertyNames 可以获取不可枚举的属性
{
    let obj = {
        name: 'xiecheng',
        age: 34,
        school: 'imooc'
    }
    Object.getOwnPropertyNames(obj).forEach(key => {
        // console.log(key, obj[key]);
    })

    // console.log(Array.isArray(Object.getOwnPropertyNames(obj))); //true
}

/////////////////////////////////////////////////////////////////////////////////


/////////////////////////// defineProperty 的用法 //////////////////////////
{
    const obj = {};
    Object.defineProperty(obj, 'a', {
        value: 1,
        enumerable: false
    });

    //console.log(Object.keys(obj)); // []
    //console.log(Object.getOwnPropertyNames(obj)); // ["a"]
    //console.log(obj.a); // 虽然不可枚举， 但是依然是 public 的
}
////////////////////////////////////////////////////////////////////////////





/////////////////////////// getOwnPropertyDescriptor 的用法 //////////////////////////
{
    // getOwnPropertyDescriptor 是获取属性的所有属性
    const obj = {
        name: 'Alice'
    };

    // 为对象添加一个不可枚举且不可写的属性
    Object.defineProperty(obj, 'age', {
        value: 30,
        writable: false,
        enumerable: false,
        configurable: true
    });

    // 获取属性描述符
    const descriptor = Object.getOwnPropertyDescriptor(obj, 'age');
    // console.log(descriptor);
    // console.log(descriptor.writable);
}
/////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////// create 的用法 ////////////////////////////////////
{
    const person = {
        isHuman: false,
        printIntroduction: function () {
            console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        },
    };

    const me = Object.create(person);

    me.name = 'Matthew';
    me.isHuman = true;

    // me.printIntroduction();
}
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////// entries 的用法 ///////////////////////////////////
{
    let user = {
        name: 'John',
        age: 30
    }

    // loop over keys-and-values
    for (let [key, value] of Object.entries(user)) {
        console.log(`${key}:${value}`) // name:John, then age:30
    }
}
/////////////////////////////////////////////////////////////////////////////////////