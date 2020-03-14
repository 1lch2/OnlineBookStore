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
function createRow(data) {
    var table = document.getElementById('table');

    // Write table row.
    for (var i in data) {
        var row = table.insertRow(-1);
        row.setAttribute("id", "shelf" + i);
        for (var j = 0; j < 9; j++) {
            var cell = row.insertCell(-1);
            switch (true) {
                case j == 0: // checkbox
                    cell.innerHTML = "<label><input type='checkbox' class='checkforcart'></label>";
                    cell.setAttribute("class", "checkbox");
                    break;
                case j == 1: // book cover
                    cell.innerHTML = "<img src='./" + data[i]["img"] + "' class='book'>";
                    cell.setAttribute("class", "pic");
                    break;
                case j == 2: // title
                    cell.innerHTML = data[i]["title"];
                    cell.setAttribute("class", "title");
                    break;
                case j == 3: // star
                    var starhtml = ""
                    for (var k = 0; k < parseInt(data[i]["rating"]); k++) {
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
        function (data) {
            bookList = data; // store the book list into bookList
            console.log(bookList); // print it into console (developer tools)
            console.log(bookList[0]); // print the first book object into console 

            // here you can call methods to load or refresh the page 
            // loadBooks() or refreshPage()
            createRow(bookList);
        },
        function (xhr) { console.error(xhr); }
    );
}

// Filter items based on selection.
function filterItem() {
    var selection = document.getElementById("select");
    var rows = document.getElementsByTagName("tr").length - 1;
    for (var i = 0; i < rows; i++) {
        //TODO: add category into attributes.
    }
}

// Darkmode
function darkMode() {
    var body = document.body;
    var darkbox = document.getElementById("dark");
    var darklabel = document.getElementById("darkswitch");
    var checkstat = darkbox.checked;
    var container = document.getElementById("container");
    var cartimg = document.getElementById("cart");
    var inputbox = document.getElementById("searchbox");
    var cartnum = document.getElementById("cartnum");
    var select = document.getElementById("select");

    if (checkstat) {
        // Background color
        body.style.backgroundColor = "black"
        container.style.backgroundColor = "#222222";
        container.style.color = "white";

        // Input box, select, switch, image and cart number background color
        cartimg.style.backgroundColor = "grey";
        inputbox.style.backgroundColor = "#222222";
        inputbox.style.color = "white"
        select.style.backgroundColor = "#222222";
        select.style.color = "white"
        darklabel.style.backgroundColor = "#156d49"
        darklabel.style.color = "white"
        cartnum.style.backgroundColor = "#222222";
        cartnum.style.color = "white"

    } else if (!checkstat) {
        body.style.backgroundColor = "white"

        container.style.backgroundColor = "rgb(236, 248, 243)";
        container.style.color = "black";

        cartimg.style.backgroundColor = "white";
        inputbox.style.backgroundColor = "white";
        inputbox.style.color = "black"
        select.style.backgroundColor = "white";
        select.style.color = "black"
        darklabel.style.backgroundColor = "#d4e3dd"
        darklabel.style.color = "black"
        cartnum.style.backgroundColor = "white";
        cartnum.style.color = "black"

        //TODO: change highlight colour when darkmode activated
    }
}

// Add to cart
function addCart() {
    var boxes = document.querySelectorAll(".checkforcart");
    var selectnum = 0;
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            selectnum += 1;
        }
    }
    if (selectnum > 1) {
        alert("You can only choose one at a time!");
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].checked = false;
        }
    } else if (selectnum == 1) {
        var num = prompt("How many do you want?", 1);
        var cartnum = document.getElementById("cartnum");
        totalnum = parseInt(cartnum.innerHTML) + parseInt(num); // Add up total number.
        cartnum.innerHTML = totalnum;
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].checked = false;
        }
    } else if (selectnum == 0) {
        alert("You have not selected any book.");
    }
}

function resetCart() {
    var choose = confirm("Do you wish to clear your cart?");
    if (choose) {
        var cartnum = document.getElementById("cartnum");
        cartnum.innerHTML = 0;
    }
}

// Highlight items based on search.
function highlightItem(indexlist) {
    for (var i = 0; i < indexlist.length; i++) {
        var rowid = "shelf" + indexlist[i];

        // Check dark mode.
        var darkbox = document.getElementById("dark");
        var checkstat = darkbox.checked;
        
        if(!checkstat){
            document.getElementById(rowid).style.backgroundColor = "yellow";
        }else{
            document.getElementById(rowid).style.backgroundColor = "#636300";
        }
    }
}


// Search title.
function search() {
    var form = document.getElementById("form");

    form.onsubmit = function (e) {
        var searchtext = document.getElementById("searchbox");
        var titlelist = document.querySelectorAll(".title");

        if (searchtext.value.length > 0) { // Check if the input is empty.
            var indexlist = [];
            for (var i = 0; i < titlelist.length; i++) {
                var currenttitle = titlelist[i].innerHTML;
                // Check if search text occurs in one of the titles.
                if (currenttitle.indexOf(searchtext.value) != -1) {
                    indexlist.push(i);
                }
            }

            if (indexlist.length == 0) {
                alert("No matched item.");
            } else {
                // Highlight the corresponding row.
                highlightItem(indexlist);
                e.preventDefault();
            }
        } else {
            alert("You have not typed anything.");
            e.preventDefault();
        }
    }
}

//TODO: Hover highlight: waiting to be finished.
// function darkModeHover() {
//     var darkbox = document.getElementById("dark");
//     var checkstat = darkbox.checked;
//     var rows = document.querySelectorAll(".shelf")
//     if (checkstat) {
//         rows.onmouserover = function () {
//             this.style.backgroundColor = "#222222";
//         }
//     }

// }


// Onload event.
window.onload = function () {
    this.loadElements();
    
    //TODO: refresh page
}
