var bookmarkName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("siteUrl");
var subBtn = document.getElementById("subBtn");
var bookmarkTableBody = document.getElementById("bookmarkTableBody");
let bookmarks = [];
if (localStorage.getItem("bookMarks")) {
    bookmarks = JSON.parse(localStorage.getItem("bookMarks"))
}
function addBookmark() {

    var bookmark = {
        name: bookmarkName.value,
        url: siteUrl.value
    }
    // if (validateUrl(siteUrl)) {
    //     const bookmark = {
    //         name: bookmarkName,
    //         url: siteUrl
    //     };

    bookmarks.push(bookmark);
    localStorage.setItem("bookMarks", JSON.stringify(bookmarks))
    console.log(bookmarks);
    displayBookmarks();
    clearInputs();
    //  else {
    //     alert("Invalid URL format. Please enter a valid URL starting with 'http://' or 'https://'.");
    // }
}

function displayBookmarks() {
    var marks = ``;
    for (let i = 0; i < bookmarks.length; i++) {
        marks += `
            <tr>
            <td>${i + 1}</td>
                <td>${bookmarks[i].name}</td>
                <td> <button class=" btn btn-primary"> <a class="text-white  text-decoration-none" href="${bookmarks[i].url}" >Visit</a></button></td>
                <td> <button class=" btn btn-danger" onclick="deleteBook(${i})"> Delete </button></td>
            </tr>
            `
    }

    bookmarkTableBody.innerHTML = marks
}

function deleteBook(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookmarks));
    displayBookmarks();

}

function clearInputs() {
    document.getElementById("bookmarkName").value = "";
    document.getElementById("siteUrl").value = "";
}

function validateUrl(url) {
    const urlPattern = /^(http|https):\/\/.+$/i;
    return urlPattern.test(url);
}


window.onload = function () {
    displayBookmarks();
}; 
