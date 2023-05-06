const spanHtml = document.querySelectorAll("span");
const sel = document.querySelectorAll("select");

function calcular() {



    if ((sel[0].value == 9) && (sel[1].value == 1) && (sel[2].value == 1)) {
        return spanHtml[0] = "<p>password 1 correcto</p>";
    }

    else if ((sel[0].value == 7) && (sel[1].value == 1) && (sel[2].value == 4)) {
        return spanHtml[0] = "<p>password 2 correcto</p>";
    }

    else {
        return  spanHtml[0] = "<p>assword incorrecto</p>";
    }
}
