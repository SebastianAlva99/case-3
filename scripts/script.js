const linkForm = document.querySelector("#linkForm");
const linkList = document.querySelector("#linkList");

linkForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const linkText = document.querySelector("#linkText").value;
    const linkURL = document.querySelector("#linkURL").value;

    const li = document.createElement("li");
    const a = document.createElement("a");
})