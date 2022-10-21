let fetchText = [];

let createNewBtn = document.createElement("button");
createNewBtn.classList.add("createNewBtn");
createNewBtn.innerText = "Skapa ett nytt dokument";

createNewBtn.addEventListener("click", function(){
  window.location ="./document.html"
});
document.body.append(createNewBtn);

fetch(`http://localhost:3000/users/text`, {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .then((result) => {
  let fetchText = result;
if (!fetchText.length == 0) {
for (let i = 0; i < fetchText.length; i++) {
  let div = document.createElement('div');
  div.classList.add("div")
  div.innerHTML = `<br>${fetchText[i].title} <br> <br>${fetchText[i].content}<br><br>`

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn")
  deleteBtn.innerText="Radera"
  div.append(deleteBtn); 

  deleteBtn.addEventListener("click", function(){
    let deleteItem = {
      id: fetchText[i].id,
    }

fetch(`http://localhost:3000/users/delete`, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(deleteItem),
  })
  .then((response) => response.text())
  .then((result) => {
    console.log("result",result);
    location.reload(false);
  })
  .catch((error) => console.error(error));
  })
  document.body.append(div);
}} else {
    let p = document.createElement("p")
    p.innerText = 'Listan är tom';
    document.body.append(p)
  }
}).catch((error) => console.error(error));

      


  

    
    




