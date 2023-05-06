const spanHtml = document.getElementsByTagName("span");

function calcular() {
  const sel = document.querySelectorAll("select");

  if (sel[0].value == 9 && sel[1].value == 1 && sel[2].value == 1) {
    return (spanHtml[0].innerHTML = "<p>password 1 correcto</p>");
  } else if (sel[0].value == 7 && sel[1].value == 1 && sel[2].value == 4) {
    return (spanHtml[0].innerHTML = "<p>password 2 correcto</p>");
  } else {
    return (spanHtml[0].innerHTML = "<p>Password incorrecto</p>");
  }
}
