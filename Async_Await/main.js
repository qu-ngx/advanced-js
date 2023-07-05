const getNewToDo = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    return data;
}

console.log(getNewToDo());

getNewToDo().then(data => {
    console.log('>>> get data ', data);
})