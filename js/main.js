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

// Create table row from JSON object.
function createRow(data){
    var table = document.getElementById('table');

    // Write table row.
    for (var i in data){
        var row = table.insertRow(-1);
        row.setAttribute("id", "row"+i);
        for(var j = 0; j < 9; j++){
            var cell = row.insertCell(-1);
            switch(true){
                case j == 0: // checkbox
                    cell.innerHTML = "<label><input type='checkbox'></label>";
                    cell.setAttribute("class", "checkbox");
                    break;
                case j == 1: // book cover
                    cell.innerHTML = "<img src='./"+ data[i]["img"] +"' class='book'>";
                    cell.setAttribute("class", "pic");
                    break;
                case j == 2: // title
                    cell.innerHTML = data[i]["title"];
                    cell.setAttribute("class", "title");
                    break;
                case j == 3: // star
                    var starhtml = ""
                    for(var k = 0; k < parseInt(data[i]["rating"]); k++){
                        starhtml += "<img src='./images/star-16.ico'>"
                    } 
                    cell.innerHTML = starhtml;
                    cell.setAttribute("class", "star");
                    break;
                case j == 4: // author
                    cell.innerHTML = data[i]["authors"];
                    cell.setAttribute("class", "author");
                    break;
                case j == 5: // year
                    cell.innerHTML = data[i]["year"];
                    cell.setAttribute("class", "year");
                    break;
                case j == 6: // price
                    cell.innerHTML = "$" + data[i]["price"]
                    cell.setAttribute("class", "price");
                    break;
                case j == 7: // publisher
                    cell.innerHTML = data[i]["publisher"];
                    cell.setAttribute("class", "publisher");
                    break;
                case j == 8: // category
                    cell.innerHTML = data[i]["category"];
                    cell.setAttribute("class", "category");
                    break;
            }
        }
    }        

}

// Load data into <table> element.
function loadElements() {
    bookList = []; // book list container
    getJsonObject('../data.json',
        function(data) {
            bookList = data; // store the book list into bookList
            console.log(bookList); // print it into console (developer tools)
            console.log(bookList[0]); // print the first book object into console 

            // here you can call methods to load or refresh the page 
            // loadBooks() or refreshPage()
            createRow(bookList);
        },
        function(xhr) { console.error(xhr); }
    );
}

window.onload = loadElements();

// Filter items based on selection.
function filterItem(){
    var selection = document.getElementById("select");
    var rows = document.getElementsByTagName("tr").length - 1;
    for (var i = 0; i < rows; i++){
        //TODO: add category into attributes.
    }
}

// Highlight items based on search.
function highlightItem(){
    //TODO: highlight
}

// Darkmode
function turnoffLight(){
    //TODO: darkmode checkbox
}

// Add to cart
function addCart(){
    //TODO: add cart
}

function resetCart(){
    //TODO: reset cart
}
