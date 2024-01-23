myLeads = []
let saveBtn = document.getElementById("save-btn")
let input = document.getElementById("input-el")
let textEl = document.getElementById("text-el")
let deleteBtn = document.getElementById("delete-btn")
let addUrl = document.getElementById("add-url")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(typeof leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads = JSON.parse(localStorage.getItem("myLeads"))
    render(myLeads)
}
saveBtn.addEventListener("click", function() {
    myLeads.push(input.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    input.value = ""
})

function render(leads){
    let listOfLeads =""
    for(let i=0; i<leads.length; i++){
        listOfLeads += `<li><a target="_blank" href="${leads[i]}">${leads[i]}</a></li>`
    }
    textEl.innerHTML = listOfLeads
}

deleteBtn.addEventListener("dblclick", function() {
    myLeads = []
    textEl.textContent = ""
    localStorage.clear()
})

addUrl.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        let url = tabs[0].url
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
})
