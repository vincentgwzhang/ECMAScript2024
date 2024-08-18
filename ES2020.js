{
    const bigInt = 9007199254740993n;
    // console.log(bigInt);
    // console.log(typeof bigInt);

    // console.log(1n == 1);  //true
    // console.log(1n === 1); //false
}



{
    function promise_all() {
        Promise.all([
            Promise.reject({
                code: 500,
                msg: '服务异常'
            }),
            Promise.resolve({
                code: 200,
                data: ['1', '2', '3']
            }),
            Promise.resolve({
                code: 200,
                data: ['4', '5', '6']
            })
        ]).then(res => {
            console.log(res)
            console.log('成功')
        }).catch(err => {
            console.log(err)
            console.log('失败')
        })
    }



    // Promise.allSettled() 返回的 Promise 永远不会拒绝。
    function promise_settle() {
        Promise.allSettled([
            Promise.reject({
                code: 500,
                msg: '服务异常'
            }),
            Promise.resolve({
                code: 200,
                data: ['1', '2', '3']
            }),
            Promise.resolve({
                code: 200,
                data: ['4', '5', '6']
            })
        ]).then(res => {
            console.log(res)
            // console.log('成功')
            const data = res.filter(item => item.status === 'fulfilled')
            console.log(data)
        }).catch(err => {
            console.log(err)
            console.log('失败')
        })
    }

    // promise_settle();
}





{
    const user = {
        address: {
            street: 'xx街道',
            getNum() {
                return '80号'
            }
        }
    }

    const street2 = user?.address?.street
    // console.log(street2); // 如果不是，结果就是undefined
}






{
    const b = 0 // 或者null undefined false
    const a = b || 5
    // console.log(a)
}





{
    let b;
    const a = b ?? 123;
    // console.log(a);
}