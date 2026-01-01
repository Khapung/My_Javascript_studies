let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    // 2. Call the renderLeads() function
    renerLeads()
    inputEl.value = ""  
})

// 1. Wrap the code below in a renderLeads() function
function renerLeads() {
    let inText = ""
    for (let i of myLeads) {
    inText += "<li>" + i + "</li>"
    ulEl.innerHTML = inText
    }
}


