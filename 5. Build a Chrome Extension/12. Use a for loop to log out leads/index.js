
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Log out the items in the myLeads array using a for loop 
let myLeads = ["site1.com", "site2.com", "site3.com"]


for (let i of myLeads) {
    console.log(i)
}

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}