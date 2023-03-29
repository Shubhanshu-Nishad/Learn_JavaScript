let api = fetch('https://jsonplaceholder.typicode.com/todos/4');
api.then((response) => {
        //console.log(value);
        console.log(response.status);
        console.log(response.ok);
        console.log(response.headers);
        //return value.json();
        return value.text();
    }).then((value) => {
        console.log(value);
    })
    // 2response process 200 t0 299