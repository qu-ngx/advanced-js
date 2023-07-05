function getToDo(id) {

    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();


        request.onreadystatechange = function () {
            if (this.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                const dataString = JSON.stringify(data);
                resolve(data);
            }

            if (this.readyState === 4 && request.status != 200) {
                reject('Something goes wrong');
            }

        };

        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        request.send();
    });

}


//Promises

getToDo(1).then(data1 => {
    console.log('>>> get data', data1);
    return getToDo(2);
}).then(data2 => {
    console.log('>>> get data', data2);
    return getToDo(3);
}).then(data3 => {
    console.log('>>> get data', data3);
}) 

.catch(err => {
    console.log('>>>> ', err);
});