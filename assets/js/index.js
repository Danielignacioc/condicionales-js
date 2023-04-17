let alucardVal = document.querySelector("#alucard-imp").value;
let andersonVal = document.querySelector("#anderson-imp").value;
let serasVal = document.querySelector("#seras-imp").value;
const btn = document.querySelector("#evr").value;

const cStickers = document.querySelector("#cantidad-stickers");

btn.addEventListener("click", () => {
  let total = +alucardVal + +andersonVal + +serasVal;
  if ((total) => 10) {
    return cStickers.innerHTML("Llevas muchos stickers");
  } else if (total < 10 && total > 0) {
    return cStickers.innerHTML("Llevas " + total + " stickers");
  } else {
    return cStickers.innerHTML("intentalo de nuevo");
  }
});
