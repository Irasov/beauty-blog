const icon = document.querySelector(".header__icon");
const menu = document.querySelector(".menu");
const slider = document.querySelector(".hero__slider");
const countSlides = slides.length;
const DIV = "div";
const LINK = "a";
const H3 = "h3";
const H2 = "h2";
const PARAGRAPH = "p";
const IMG = "img";
let currentSlide = 0;

if(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        icon.classList.toggle('_active');
    }); 
}
function createElement(tag, classes) {
    const  element = document.createElement(tag);
    for (let i = 0; i < classes.length; i += 1) {
        element.classList.add(classes[i]);
    }
    return element;
}

function createSlides() {
    let result = [];
    for(let i = 0; i < countSlides; i +=1) {
        const textCat = document.createTextNode(slides[i].cat);
        const textTitle = document.createTextNode(slides[i].title);
        const textSubtitle = document.createTextNode(slides[i].subtitle);
        const textBtn = "Read more";

        const slide = createElement(DIV, ["slider-hero__slide", "slide-hero"]);
        const left = createElement(DIV, ["slide-hero__left"]);
        const cat = createElement(H3, ["slide-hero__cat", "cat"]);
        cat.appendChild(textCat);
        left.appendChild(cat);
        const title = createElement(H2, ["slide-hero__title"]);
        title.appendChild(textTitle);
        left.appendChild(title);
        const subtitle = createElement(PARAGRAPH, ["slide-hero__subtitle"]);
        subtitle.appendChild(textSubtitle);
        left.appendChild(subtitle);
        const btn = createElement(LINK, ["slide-hero__btn", "btn", "btn_red"]);
        btn.textContent = textBtn;
        btn.setAttribute("href","#");
        left.appendChild(btn);
        slide.appendChild(left);

        const right = createElement(DIV, ["slide-hero__right"]);
        const img = createElement(IMG, ["slide-hero__img"]);
        img.setAttribute("src",slides[i].img);
        img.setAttribute("alt",slides[i].alt);
        right.appendChild(img);
        slide.appendChild(right);

        result.push(slide);
    }
    return result;
}

const slideAll = createSlides();
for(let i = 0; i < slideAll.length; i += 1) {
    slider.appendChild(slideAll[i]);
}


