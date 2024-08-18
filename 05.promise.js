{
    function getJSON(url) {
        const promise = new Promise((resolve, reject) => {

            const handler = function () {
                if (this.readyState != 4) {
                    return;
                }

                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error('Resource can not find'))
                }
            }

            const client = new XMLHttpRequest();
            client.open("GET", url);
            client.onreadystatechange = handler;
            client.responseType = 'json';
            client.setRequestHeader('Accept', 'application/json');
            client.send();
        });

        return promise;
    }

    getJSON("https://www.163.com")
        .then(res => console.log(res))
        .catch(error => console.log(error));
}


{
    function mockApiCall(success) {
        if (success) {
            return Promise.resolve({//立即解决
                code: 200,
                data: ['1', '2', '3']
            });
        } else {
            return Promise.reject({//理解reject
                code: 500,
                msg: '服务异常'
            });
        }
    }

    mockApiCall(true)
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => {
            console.log('Error:', error);
        });

    mockApiCall(false)
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => {
            console.log('Error:', error);
        });

}