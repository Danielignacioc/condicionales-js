let alucardVal = document.querySelector("#alucard-imp");
let andersonVal = document.querySelector("#anderson-imp");
let serasVal = document.querySelector("#seras-imp");
const btn = document.querySelector("#evr");

const cStickers = document.querySelector("#cantidad-stickers");

let total = +alucardVal + +andersonVal + +serasVal;

btn.addEventListener("click", () => {
  if ((total) => 10) {
    return cStickers.innerHTML("Llevas muchos stickers");
  } else if (total < 10 && total > 0) {
    return cStickers.innerHTML("Llevas " + total + " stickers");
  } else {
    return cStickers.innerHTML("intentalo de nuevo");
  }
});
