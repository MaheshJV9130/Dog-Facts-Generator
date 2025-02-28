let url = "https://dogapi.dog/api/v1/facts";
const facts = document.getElementById("facts");
const generate = document.getElementById("generate");
let dogImgurl = "https://dog.ceo/api/breeds/image/random";
let dogImg = document.getElementById("dogImg");
getData();
getDogImg();

async function getData() {
  let response = await fetch(url);
  let jsonForm = await response.json();
  let txtFact = String(jsonForm.facts);
  console.log(txtFact);
  facts.innerHTML = txtFact;
}


async function getDogImg() {
  let response = await fetch(dogImgurl);
  let img = await response.json();
  let imgUrl = img.message;
  dogImg.src = imgUrl
}

generate.addEventListener("click", () => {
  getData();
  getDogImg();
});
