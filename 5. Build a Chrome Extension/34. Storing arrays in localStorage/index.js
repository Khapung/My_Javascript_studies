let myLeads = `["www.awesomelead.com"]`

// turn th myLeads array into an array
myLeads = JSON.parse(myLeads)
// console.log the array to verify that it's an array
console.log(typeof myLeads)
// push a new value to the array
myLeads.push("www.newlead.com")
// turn the array back into a string again
myLeads = JSON.stringify(myLeads)   
// console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}
