//your JS code here. If required.
// let table = document.querySelector(".table");
let div = document.querySelector(".form-group")
let title = document.getElementById("title")
let author = document.getElementById("author")
let isbn = document.getElementById("isbn")


let table = document.createElement("table");
table.className = "table table-striped";
// document.body.append(table)
div.append(table) 

let thead = table.createTHead();
let row = thead.insertRow();
let th = document.createElement("th");
row.append(th);
th.innerHTML = "Title"
let th2 = document.createElement("th");
row.append(th2);
th2.innerHTML = "Author"
let th3 = document.createElement("th");
row.append(th3);
th3.innerHTML = "ISBN#"


let tbody = document.createElement('tbody');
tbody.id = "book-list";
table.append(tbody);

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    
    let body_row = tbody.insertRow();
    let title_cell = body_row.insertCell()
    title_cell.innerHTML = title.value;
    
    let author_cell = body_row.insertCell();
    author_cell.innerHTML = author.value;

    let isbn_cell = body_row.insertCell()
    isbn_cell.innerHTML = isbn.value;


    let clear_cell = body_row.insertCell()
    clear_cell.innerHTML = "<button class='delete' style='background-color:red;'>X</button>";
    
    let del = document.getElementsByClassName("delete");
    let lastDelButton = del[del.length - 1];
    lastDelButton.addEventListener("click", (e) => {
        e.preventDefault()
        // body_row.deleteCell();
        e.target.parentElement.parentElement.remove();
    })
})