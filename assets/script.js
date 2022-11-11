/*========== Transição automática Slider ==========*/
let count = 1;
document.getElementById("radio-1").checked = true;

setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 3) {
    count = 1
  }

  document.getElementById("radio-" + count).checked = true;
}

/*========== Fetch api slider ==========*/

fetch("https://labs.inforcedata.com.br/desafio-frontend/banners.json")
  .then((res) => res.json())
  .then((data) => {

    let img = '';
    let action = '';
    let text = '';
    let textNode = '';

    img = document.querySelector("#img-1");
    img.setAttribute('src', data[0].imagem);

    action = document.querySelector("#action-1");
    action.setAttribute('href', data[0].call_to_action);

    text = document.querySelector("#text-1");
    textNode = document.createTextNode(data[0].titulo);
    text.appendChild(textNode);


    img = document.querySelector("#img-2");
    img.setAttribute('src', data[1].imagem);

    action = document.querySelector("#action-2");
    action.setAttribute('href', data[1].call_to_action);

    text = document.querySelector("#text-2");
    console.log("text: ", text);
    textNode = document.createTextNode(data[1].titulo);
    text.appendChild(textNode);
  })

  
