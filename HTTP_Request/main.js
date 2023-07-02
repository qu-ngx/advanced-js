var xhttp = new XMLHttpRequest();
    
//Get data
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
    // Typical action to be performed when the document is ready:
    //    document.getElementById("demo").innerHTML = xhttp.responseText;
    console.log('Check res:', xhttp.responseText); 
    }
};

//Request data
xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhttp.send();