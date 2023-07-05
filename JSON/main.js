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
        const data = JSON.parse(xhttp.responseText);
        const dataString = JSON.stringify(data);
        callback(undefined, data);
        callback(undefined, dataString);
    }

        if (this.readyState === 4 && xhttp.status != 200) {
            callback('something wrong', undefined);
    }

}; 

xhttp.open("GET", "data.json", true);
xhttp.send();

}

getToDo(callback);