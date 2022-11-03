# Dom Manipulation Assignment

![](./thumbnail.png)

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

    document.querySelector(".side-bar .crayons-card h2").innerHTML =
    "Battu V Revanth";
    document.querySelector(".side-bar .crayons-card p").innerHTML =
    "Aspiring JavaScript Fullstack Developer";

![Output](./output-screenshots/01.png)

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

     let arr = [];
     let elements = document.querySelectorAll(".as-imagegrid-item");
     for (let i = 0; i < elements.length; i++) {
     arr.push(elements[i].innerText.replace("\nSupport", ""));
     }
     console.log(arr);

![Output](./output-screenshots/02.png)

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

```
let newSec = document.createElement("section");
newSec.classList.add("parent");
let faq = document.createElement("h3");
faq.innerText = "My New FAQ";
newSec.appendChild(faq);
document.querySelector(".accordion-homepage").appendChild(newSec);
```

![Output](./output-screenshots/03.png)

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

```
document.querySelector(".customer-support .one-tel-number").innerText =
  "9448022338";
```

![Output](./output-screenshots/04.png)

5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

```
document.querySelector(
  "#smartphone-deals .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn"
).innerText = "Check out";
```

![Output](./output-screenshots/05.png)

6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

```
function hover() {
  document.querySelector(".searchinput___19uW0").style.backgroundColor = "Red";
}
document.addEventListener("mouseover", hover);
```

![Output](./output-screenshots/06.png)

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

```
function wordSearch(Text) {
  let search = document.querySelector("#top-nav-search-input");
  search.value = Text;
  let form = document.querySelector("#top-nav-search-form");
  form.submit();
}
wordSearch("function");
```

![Output](./output-screenshots/07.png)

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

```
let langs = document.querySelectorAll("#SIvCob a");
function del(langs) {
  for (let i = 0; i < langs.length; i += 2) {
    langs[i].remove();
  }
}
del(langs);
```

![Output](./output-screenshots/08-1.png)

9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

```
document.querySelector("h1").style.color = "#b44040";
document.querySelector("h1").style.fontFamily = "monospace";
```

![Output](./output-screenshots/09.png)

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

```
let clrChange = document.querySelector(".btn-cta-big .login-btn-text");
function bgChange() {
  clrChange.style.backgroundColor = "red";
}
clrChange.addEventListener("mouseover", bgChange);
```

![Output](./output-screenshots/10.png)

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

```
let logo = document.querySelector(".wrapper .logo .icon");
logo.style.backgroundImage = "url(https://ineuron.ai/images/ineuron-logo.png)";

```

![Output](./output-screenshots/11.png)

12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

```
let btnClr = document.querySelector(".col-sm-6 button");
btnClr.style.backgroundColor = "blue";
```

![Output](./output-screenshots/12.png)

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

```
document.querySelector(".fl-rich-text span").innerHTML = "JSBOOTCAMP";
```

![Output](./output-screenshots/13.png)

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

```
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";
```

![Output](./output-screenshots/14.png)

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

```
document.querySelectorAll(".ps-top .ps-title")[4].style.textAlign = "right";
```

![Output](./output-screenshots/15.png)

16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

```
document.querySelector(".geist-wrapper .section-title_title__VEDfK").innerHTML =
  "Start with Scratch";
```

![Output](./output-screenshots/16.png)

17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

### Output

```
let button = document.querySelector(".span4 .btn-container");
let curDate = new Date();
button.innerText = curDate;
```

![Output](./output-screenshots/17.png)

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

```
document.querySelector(".p-footer").style.backgroundColor = "orange";

```

![Output](./output-screenshots/18.png)

19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

### Output

```
let logo = document.querySelector(".navbar-brand .logo").src;
console.log(logo);
```

![Output](./output-screenshots/19.png)

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

```
let clrChange = document.querySelector(".wide h3");
clrChange.style.color = "orange";
```

![Output](./output-screenshots/20.png)
