

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

function borde(option) {

  const img = document.getElementsByTagName("img");
  let con = 0;

  for (let imagen of img) {
    let bordeVerde = imagen.style.border = "solid 2px green";
    let sinBorde = imagen.style.border = "none";


    if (!option && (con % 2 == 0)) {
      return bordeVerde;

    }

    else if (option && (con % 2 == 1)) {
      return sinBorde;
    }
    con++;
  }
}
