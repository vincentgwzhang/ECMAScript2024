{

    function getFile(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve({ a: 1, b: 2 }), time);
        });
    }

    async function getAll() {
        let result = [getFile(1000), getFile(200), getFile(3000)];

        for (let item of result) {
            const res = await item;
            console.log(res);
        }
    }

    async function getAll2() {
        let result = [getFile(1000), getFile(200), getFile(3000)];
        const allResult = await Promise.all(result);

        allResult.forEach(res => console.log(res));
    }

    async function main() {
        console.log('123');
        await getAll();
        console.log('456');
    }

    // main();
}





{// spread 做法
    const input = {
        a: 1,
        b: 2
    }

    const output = {
        ...input,
        c: 3
    }

    // console.log(output) // {a: 1, b: 2, c: 3}
}

{
    const input = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, ...rest } = input
    // console.log(rest) // 1 {b: 2, c: 3}
}




{// Promise 添加finally

    function promiseWithFinally() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
                // reject('fail')
            }, 1000)
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            console.log('finally')
        });
    }

    async function exec() {
        await promiseWithFinally();
        console.log('checked');
    }

    exec();
}