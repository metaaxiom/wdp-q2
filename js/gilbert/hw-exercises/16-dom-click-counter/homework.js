//alert("welcome to my world.");

//document.querySelector("#clickable-button")

let latestScore = document.getElementById("latest-score");
let clickableBtn = document.getElementById("clickable-button");
// a callback is a function that is executed by another function
// when some particular process has been completed
    // in this case, when the click event occurs
    // then the callback function passed to the
    // event listener will run
clickableBtn.addEventListener("click", (e) => {
    // ex: "0" -> 0
    latestScore.innerText = parseInt(latestScore.innerText) + 1;
});