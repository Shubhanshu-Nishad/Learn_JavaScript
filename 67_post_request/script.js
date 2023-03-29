const createTodo = async(todo) => {
    let options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}
const getTodo = async(id) => {
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let response = await p.json();
    return response;
}
mainfun = async() => {
    let todo = {
        title: 'Shubhansuh666',
        body: 'Nishad',
        userId: 111111,
    };
    let todores = await createTodo(todo);
    console.log(todores);
    console.log(await getTodo(24));
}
mainfun();