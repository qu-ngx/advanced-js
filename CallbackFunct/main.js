const callback = (error, data) => {
    if(error) {
        console.log("calling callback", error, data);
    }
    
    if(data) {
        console.log("calling callback with data", error, data);
    }
}

function getToDo(callback) {
    var xhttp = new XMLHttpRequest();

//Get data
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && xhttp.status === 200) {
    const data = xhttp.responseText;
    callback(undefined, data);
}

    if (this.readyState === 4 && xhttp.status != 200) {
        callback('something wrong', undefined);
}

};

xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhttp.send();

}

getToDo(callback);