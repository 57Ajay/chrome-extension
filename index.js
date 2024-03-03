let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const renderLeads = ()=>{

    let listItems = ""
    for (let i = 0; i < myLeads.length; i++){
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]}
            </a>
        <li/>`
        console.log(listItems)
    
        /* We can also use another method for same purpose*/ 
        // Example-1
        // ulEl.innerHTML += "<li>" + myLeads[i] + "<li/>"
        // Example-2:
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li) 
    
    }
    
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
    
})





