
const img = document.getElementsByTagName("img");
for (let imagen of img) {
  let imgHtml = imagen.style.border = "solid, 2px, green";
  borde(imgHtml);
}

function comprobar() {

  const valores = document.getElementsByTagName("input");
  let spanHtml = document.getElementsByTagName("span")[0];

  let pHtml = "";
  let alucard = valores[0];
  let anderson = valores[1];
  let seras = valores[2];
  let total =+alucard.value + +anderson.value + +seras.value


  
  pHtml += `
    <p>llevas ${+alucard.value + +anderson.value + +seras.value} stickers</p>
    `;


  if (total >= 10) {
    spanHtml.innerHTML = "<p>Llevas muchos stickers</p>";
  }
  else if (total < 10 && total > 0) {
    spanHtml.innerHTML = pHtml;
  }
  else {
    return spanHtml.innerHTML = "<p>INTENTALO DE NUEVO</p>";
  }
}


function borde(imagen) {


  for (let con=0; con < 4; con++) {
    if (con % 1) {

      return imagen.style.border = "solid, 2px, red";
    }

    else if (con % 0) {
      return imagen.style.border = "solid, 2px, green";
    }
    
    else {
      return alert("error: intente otra vez");
    }

  }
}
