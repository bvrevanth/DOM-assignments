// 01
document.querySelector(".side-bar .crayons-card h2").innerHTML =
  "Battu V Revanth";
document.querySelector(".side-bar .crayons-card p").innerHTML =
  "Aspiring JavaScript Fullstack Developer";

//   02
let arr = [];
let elements = document.querySelectorAll(".as-imagegrid-item");
for (let i = 0; i < elements.length; i++) {
  arr.push(elements[i].innerText.replace("\nSupport", ""));
}
console.log(arr);

// 03
let newSec = document.createElement("section");
newSec.classList.add("parent");
let faq = document.createElement("h3");
faq.innerText = "My New FAQ";
newSec.appendChild(faq);
document.querySelector(".accordion-homepage").appendChild(newSec);

// 04
document.querySelector(".customer-support .one-tel-number").innerText =
  "9448022338";

// 05
document.querySelector(
  "#smartphone-deals .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn"
).innerText = "Check out";

// 06
function hover() {
  document.querySelector(".searchinput___19uW0").style.backgroundColor = "Red";
}
document.addEventListener("mouseover", hover);

// 07
function wordSearch(Text) {
  let search = document.querySelector("#top-nav-search-input");
  search.value = Text;
  let form = document.querySelector("#top-nav-search-form");
  form.submit();
}
wordSearch("function");

// 8

let langs = document.querySelectorAll("#SIvCob a");
function del(langs) {
  for (let i = 0; i < langs.length; i += 2) {
    langs[i].remove();
  }
}
del(langs);

// 9
document.querySelector("h1").style.color = "#b44040";
document.querySelector("h1").style.fontFamily = "monospace";

// 10
let clrChange = document.querySelector(".btn-cta-big .login-btn-text");
function bgChange() {
  clrChange.style.backgroundColor = "red";
}
clrChange.addEventListener("mouseover", bgChange);

// 11
let logo = document.querySelector(".wrapper .logo .icon");
logo.style.backgroundImage = "url(https://ineuron.ai/images/ineuron-logo.png)";

// 12
let btnClr = document.querySelector(".col-sm-6 button");
btnClr.style.backgroundColor = "blue";

// 13

document.querySelector(".fl-rich-text span").innerHTML = "JSBOOTCAMP";

// 14
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

// 15
document.querySelectorAll(".ps-top .ps-title")[4].style.textAlign = "right";

// 16
document.querySelector(".geist-wrapper .section-title_title__VEDfK").innerHTML =
  "Start with Scratch";

// 17
let button = document.querySelector(".span4 .btn-container");
let curDate = new Date();
button.innerText = curDate;

// 18
document.querySelector(".p-footer").style.backgroundColor = "orange";

// 19
let logo = document.querySelector(".navbar-brand .logo").src;
console.log(logo);

// 20
let clrChange = document.querySelector(".wide h3");
clrChange.style.color = "orange";
