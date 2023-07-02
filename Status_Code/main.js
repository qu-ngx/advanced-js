    //Get data
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status === 200) {
        // Typical action to be performed when the document is ready:
        //    document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log('Check res:', request); 
        } else {
            console.log('>>> Code has errors. Status code: ', request.status);
        }
    };

    //Request data
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    request.send();