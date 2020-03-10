function getJsonObject(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success) success(JSON.parse(xhr.responseText));
            } else {
                if (error) error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}

// Load data into <table> element.
function loadElements() {
    bookList = []; // book list container
    getJsonObject('data.json',
        function(data) {
            bookList = data; // store the book list into bookList
            console.log(bookList); // print it into console (developer tools)
            console.log(bookList[0]); // print the first book object into console 
            // here you can call methods to laod or refresh the page 
            // loadBooks() or refreshPage()
        },
        function(xhr) { console.error(xhr); }
    );

    //TODO: Insert json objects into <table>.
    for (obj in bookList){
        //TODO: failed insert.
        var element = '<p>test</p>'
        var tablerow = document.createTextNode(element);
        document.getElementsByTagName('tbody').appendChild(tablerow);
    }
}

window.onload(loadElements());
