function comprobar() {
  const valores = document.getElementsByTagName("input");
  let spanHtml = document.getElementsByTagName("span")[0];

  let pHtml = "";
  let alucard = valores[0];
  let anderson = valores[1];
  let seras = valores[2];
  let total = +alucard.value + +anderson.value + +seras.value;

  pHtml += `
    <p>llevas ${+alucard.value + +anderson.value + +seras.value} stickers</p>
    `;

  if (total >= 10) {
    spanHtml.innerHTML = "<p>Llevas muchos stickers</p>";
  } else if (total < 10 && total > 0) {
    spanHtml.innerHTML = pHtml;
  } else {
    return (spanHtml.innerHTML = "<p>INTENTALO DE NUEVO</p>");
  }
}

function borde(sId, option = false) {
  const eltoId = document.getElementById(sId);
  let con = 0;
  let borde;

  con += 1;
  while (option)  {
    if ((con % 2) == 1) {
      borde = eltoId.style.border = "solid 2px green";
      return borde;

    } else  if ((con % 2) == 0) {
      borde = eltoId.style.border = "solid 0 white";
      return borde;
    }
    con++;
    option = false;
  }
}

function seleccionar(sId) {
const eId = document.getElementById(sId);


  document.addEventListener("keydown", function (event) {
    for (let i; event.key.length - 1 > i; i++ ) {
      console.log("con");
    if ((i / 2 ) % 2 == 0) {
      const color = (eId.style.border = "solid 2px green");
      return color;
    } else if  ((i / 2 ) % 2 == 1)  {
      const color = (eId.style.border = "solid 0");
      return color;
    }
  }
  });
}

