let url ="https://dogapi.dog/api/v1/facts";
const facts = document.getElementById("facts");
const generate =document.getElementById("generate");

async function getData(){

    let response = await fetch(url)
    let jsonForm = await response.json();
    let txtFact = String(jsonForm.facts)
    console.log(txtFact);
    facts.innerHTML = txtFact;
    
}

generate.addEventListener('click',()=>{
    getData()
});
