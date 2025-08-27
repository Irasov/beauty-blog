const icon = document.querySelector(".header__icon");
const menu = document.querySelector(".menu");
const slider = document.querySelector(".hero__slider");
const countSlides = slides.length;
let currentSlide = 0;

if(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        icon.classList.toggle('_active');
    }); 
}

function createSlides() {
    let result = [];
    for(let i = 0; i < countSlides; i +=1) {
        const textCat = document.createTextNode(slides[i].cat);
        const textTitle = document.createTextNode(slides[i].title);
        const textSubtitle = document.createTextNode(slides[i].subtitle);
        const textBtn = "Read more";
        const slide = document.createElement("div");
        slide.classList.add("slider-hero__slide", "slide-hero");
        const left = document.createElement("div");
        left.classList.add("slide-hero__left");
        const cat = document.createElement("h3");
        cat.classList.add("slide-hero__cat", "cat");
        cat.appendChild(textCat);
        left.appendChild(cat);
        const title = document.createElement("h2");
        title.classList.add("slide-hero__title");
        title.appendChild(textTitle);
        left.appendChild(title);
        const subtitle = document.createElement("p");
        subtitle.classList.add("slide-hero__subtitle");
        subtitle.appendChild(textSubtitle);
        left.appendChild(subtitle);
        const btn = document.createElement("a");
        btn.classList.add("slide-hero__btn", "btn", "btn_red");
        btn.textContent = textBtn;
        btn.setAttribute("href","#");
        left.appendChild(btn);
        slide.appendChild(left);

        const right = document.createElement("div");
        right.classList.add("slide-hero__right");
        const img = document.createElement("img");
        img.classList.add("slide-hero__img");
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


