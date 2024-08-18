{
    // 一个 async 函数总是返回一个 Promise
    async function foo() {
        return 42;
    }
    
    // foo().then(value => console.log(value)); // 包装成 Promise
}

{
    async function foo() {
        let value = await Promise.resolve(42);
        console.log(value); // 输出: 42
    }
    
    // foo();
}


////////////////////////////////////////////////////////////////////////////////


{// Old practise
    function getUserData() {
        fetchData()
            .then(user => {
                console.log('Data received:', user);
                return user;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    
    // getUserData();    
}





{
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = { user: 'John Doe', age: 30 };
                resolve(data);
            }, 2000);
        });
    }
    
    async function getUserData() {
        try {
            console.log('Fetching data...');
            const user = await fetchData();
            console.log('Data received:', user);
            return user;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
    // getUserData();    
}





{
    const obj = {
        name: 'imooc',
        web: 'www.imooc.com',
        course: 'es'
    }
    // console.log(Object.keys(obj))
    const res = Object.keys(obj).map(key => obj[key])
    // console.log(res)
}






{
    const obj = {
        name: 'imooc',
        web: 'www.imooc.com',
        course: 'es'
    }
    
    // console.log(Object.values(obj))
}





{
    let grade = {
        'lilei': 98,
        'hanmei': 87
    }
    
    for (let [key, value] of Object.entries(grade)) {
        // console.log(key, value);
    }
}




{
    const str = '12345';
    // console.log(str.padStart(8, 'x'));
    // console.log(str.padEnd(8, 'y'));
    // console.log(str.padStart(8));
    // console.log(str.padEnd(8));
}




{
    function clownsEverywhere(
        param1,
        param2,
    ) {
        /* ... */
    }
    
    clownsEverywhere(
        'foo',
        'bar',
    )
}