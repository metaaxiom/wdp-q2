let generateContainer = document.getElementById("generate-container");
let generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", (e) => {
    // generate a new circle in the container

    // only allow adding new circle if under limit
    if(generateContainer.childNodes.length < 16){
        // createElement creates elements in a sort of vaccuum
        // for it to show up on the webpage, you manually have to add it to the DoM
        let generatedCircle = document.createElement("div");
        // add generated-circle class to the new div we just created
        generatedCircle.classList.add("generated-circle");

        // now the generatedCircle element is ready to be added into the DoM
        // whenever you add an element to the DoM, you have to specify where in
        // the DoM to place it
        // we want to place this generatedCircle within generateContainer
        // appendChild adds an element inside another element
            // in this case, we're adding generatedCircle within generateContainer
            // generatedCircle is going to be the appended child of generateContainer
        generateContainer.appendChild(generatedCircle);
    }
    // if over limit, don't do anything
});