const callback = (error, data) => {
    if (error) {
        console.log("calling callback", error, data);
    }

    if (data) {
        console.log("calling callback with data", error, data);
    }
}

function getToDo(id, callback) {

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
getToDo('qiohroqhoirhi').then(data => {
    console.log('>>>> get data ', data);
}).catch(err => {
    console.log('>>> ', err);
})

getToDo(1).then(data => {
    console.log('>>>> get data ', data);
    getToDo(2).then(data => {
        console.log('>>>> get data ', data);
    })
}).catch(err => {
    console.log('>>>> ', err);
});