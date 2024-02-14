"use strict";
let dosa = document.querySelector(".inloop1");
let dosa1 = 0;
let samosa = document.querySelector(".inloop2");
let samosa1 = 0;
let idly = document.querySelector(".inloop3");
let idly1 = 0;
let bara = document.querySelector(".inloop4");
let bara1 = 0;
let aluchop = document.querySelector(".inloop5");
let aluchop1 = 0;
let upama = document.querySelector(".inloop6");
let upama1 = 0;

document.querySelector(".dosaB").addEventListener("click", function () {
  dosa1++;
  dosa.textContent = " " + " " + dosa1;
});

document.querySelector(".samosaB").addEventListener("click", function () {
  samosa1++;
  samosa.textContent = " " + " " + samosa1;
});
document.querySelector(".idlyB").addEventListener("click", function () {
  idly1++;
  idly.textContent = " " + " " + idly1;
});
document.querySelector(".baraB").addEventListener("click", function () {
  bara1++;
  bara.textContent = " " + " " + bara1;
});
document.querySelector(".aluchopB").addEventListener("click", function () {
  aluchop1++;
  aluchop.textContent = " " + aluchop1 + " ";
});
document.querySelector(".upamaB").addEventListener("click", function () {
  upama1++;
  upama.textContent = " " + " " + upama1;
});
let namee = document.querySelector("#name");
let address = document.querySelector("#address");
let phone = document.querySelector("#phnum");

let change = document.querySelector("#orderDetails");
document.querySelector(".save").addEventListener("click", function () {
  alert(`
  ORDER DETAILS:-

  ..................
  NAME :  ${namee.value},
  ADDRESS :  ${address.value},
  PHONE NUMBER :  ${phone.value}

  ..............................
  DOSA:    59 * ${dosa1}      = ${59 * Number(dosa1)},
  SAMOSA:  49 * ${samosa1}    = ${59 * Number(samosa1)},
  IDLY:    49 * ${idly1}      = ${59 * Number(idly1)},
  BARA:    49 * ${bara1}      = ${59 * Number(bara1)},
  ALUCHOP: 49 * ${aluchop1}   = ${59 * Number(aluchop1)},
  UPAMA:   59 * ${upama1}     = ${59 * Number(upama1)},
   
  Total Amount = ₹ ${
    59 * Number(dosa1) +
    49 * Number(samosa1) +
    49 * Number(idly1) +
    49 * Number(bara1) +
    49 * Number(aluchop1) +
    59 * Number(upama1)
  }`);

  alert("✅ Orderd Sucessfully");
});

document.querySelector(".reset").addEventListener("click", function () {
  dosa.textContent = " " + " " + 0;
  samosa.textContent = " " + " " + 0;
  idly.textContent = " " + " " + 0;
  bara.textContent = " " + " " + 0;
  aluchop.textContent = " " + " " + 0;
  upama.textContent = " " + " " + 0;
  namee.value = " ";
  address.value = " ";
  phone.value = " ";
});
