const linkForm = document.querySelector("#linkForm");
const linkList = document.querySelector("#linkList");

linkForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const linkText = document.querySelector("#linkText").value;
    const linkURL = document.querySelector("#linkURL").value;

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = linkURL;
    a.textContent = linkText;
    a.target ="_blank";

    const action = document.createElement("div");
    action.className = "action";

    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = "favorite";
    favoriteButton.addEventListener("click", function(){
        li.classList.toggle("favorite")
    })
})