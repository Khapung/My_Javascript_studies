// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

function saveLead() {
    console.log("Button clicked!")
}


let saveLeadBtn = document.getElementById("input-btn")

saveLeadBtn.addEventListener("click", function() {
    saveLead()
})
