const icon = document.querySelector('.header__icon');
const logo = document.querySelector('.menu__logo-adaptive');
const menu = document.querySelector('.menu');
const slider = document.querySelector('.hero__slider');
const left = document.querySelector('.arrow-left');
const right = document.querySelector('.arrow-right');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const countSlides = slides.length;
const videoList = document.querySelector('.video__list');
const videoItems = document.querySelector('.video__items');
const itemsVideo = document.querySelectorAll('.item-video');
const player = document.querySelector('.video__player');
player.setAttribute('src', videos[0]);
let slideMoveX = 0;
let listVideosMove = 0;
const moveVideo = 2;
let currentMoveVideo = 0;
const DIV = 'div';
const LINK = 'a';
const H3 = 'h3';
const H2 = 'h2';
const PARAGRAPH = 'p';
const IMG = 'img';
const rowGap = 16;
let currentSlide = 1;
videoList.style.maxHeight = `${sizeBlockVideo()}px`;
if (icon) {
  icon.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    menu.classList.toggle('_active');
    icon.classList.toggle('_active');
    logo.classList.toggle('_active');
  });
}

function createElement(tag, classes) {
  const element = document.createElement(tag);
  for (let i = 0; i < classes.length; i += 1) {
    element.classList.add(classes[i]);
  }
  return element;
}

function createSlides() {
  const bodySlider = createElement(DIV, ['slider-hero__body']);
  for (let i = 0; i < countSlides; i += 1) {
    const textCat = document.createTextNode(slides[i].cat);
    const textTitle = document.createTextNode(slides[i].title);
    const textSubtitle = document.createTextNode(slides[i].subtitle);
    const textBtn = 'Read more';

    const slide = createElement(DIV, ['slider-hero__slide', 'slide-hero']);
    slide.style.order = i + 1;
    const left = createElement(DIV, ['slide-hero__left']);
    const cat = createElement(H3, ['slide-hero__cat', 'cat']);
    cat.appendChild(textCat);
    left.appendChild(cat);
    const title = createElement(H2, ['slide-hero__title']);
    title.appendChild(textTitle);
    left.appendChild(title);
    const subtitle = createElement(PARAGRAPH, ['slide-hero__subtitle']);
    subtitle.appendChild(textSubtitle);
    left.appendChild(subtitle);
    const btn = createElement(LINK, ['slide-hero__btn', 'btn', 'btn_red']);
    btn.textContent = textBtn;
    btn.setAttribute('href', '#');
    left.appendChild(btn);
    slide.appendChild(left);

    const right = createElement(DIV, ['slide-hero__right']);
    const img = createElement(IMG, ['slide-hero__img']);
    img.setAttribute('src', slides[i].img);
    img.setAttribute('alt', slides[i].alt);
    right.appendChild(img);
    slide.appendChild(right);

    bodySlider.appendChild(slide);
  }
  return bodySlider;
}

const bodySlider = createSlides();
slider.appendChild(bodySlider);

document.addEventListener('click', (e) => {
  const targetElement = e.target;
  if (targetElement.closest('.control-slider__arrow-right')) {
    if (currentSlide < countSlides) {
      if (left.closest('._end')) {
        left.classList.toggle('_end');
      }
      slideMoveX -= bodySlider.clientWidth;
      currentSlide += 1;
      bodySlider.style.transform = `translateX(${slideMoveX}px)`;
    }
    if (currentSlide === countSlides) {
      if (!right.closest('._end')) {
        right.classList.toggle('_end');
      }
    }
  }
  if (targetElement.closest('.control-slider__arrow-left')) {
    if (currentSlide > 1) {
      if (right.closest('._end')) {
        right.classList.toggle('_end');
      }
      slideMoveX += bodySlider.clientWidth;
      currentSlide -= 1;
      bodySlider.style.transform = `translateX(${slideMoveX}px)`;
    }
    if (currentSlide === 1) {
      if (!left.closest('._end')) {
        left.classList.toggle('_end');
      }
    }
  }
  if (targetElement.closest('.video__up')) {
    if (currentMoveVideo < 2) {
      listVideosMove -= itemsVideo[1].offsetHeight + rowGap;
      videoItems.style.transform = `translateY(${listVideosMove}px)`;
      currentMoveVideo += 1;
      down.classList.remove('_dis');
    }
    if (currentMoveVideo === 2) {
      up.classList.add('_dis');
    }
  }
  if (targetElement.closest('.video__down')) {
    if (currentMoveVideo > 0) {
      listVideosMove += itemsVideo[1].offsetHeight + rowGap;
      videoItems.style.transform = `translateY(${listVideosMove}px)`;
      currentMoveVideo -= 1;
      up.classList.remove('_dis');
    }
    if (currentMoveVideo === 0) {
      down.classList.add('_dis');
    }
  }
  if (targetElement.closest('.p1')) {
    clearClass();
    toggleClass('.item-video_1');
    document.querySelector('.play__1').classList.add('play_act');
    clickPlayer(0);
  }
  if (targetElement.closest('.p2')) {
    clearClass();
    toggleClass('.item-video_2');
    document.querySelector('.play__2').classList.add('play_act');
    clickPlayer(1);
  }
  if (targetElement.closest('.p3')) {
    clearClass();
    toggleClass('.item-video_3');
    document.querySelector('.play__3').classList.add('play_act');
    clickPlayer(2);
  }
  if (targetElement.closest('.p4')) {
    clearClass();
    toggleClass('.item-video_4');
    document.querySelector('.play__4').classList.add('play_act');
    clickPlayer(3);
  }
  if (targetElement.closest('.p5')) {
    clearClass();
    toggleClass('.item-video_5');
    document.querySelector('.play__5').classList.add('play_act');
    clickPlayer(4);
  }
  if (targetElement.closest('.video__player')) {
    player.play();
  }
});

function clickPlayer(index) {
  player.setAttribute('src', videos[index]);
  player.setAttribute('controls', '');
  player.play();
}

function toggleClass(str) {
  let item = document.querySelector(str);
  if (!item.closest('.item-video_act')) {
    item.classList.add('item-video_act');
  }
}

function clearClass() {
  const items_block = document.querySelectorAll('.video__item');
  const items_play = document.querySelectorAll('.play');
  if (items_block) {
    for (let i = 0; i < items_block.length; i += 1) {
      items_block[i].classList.remove('item-video_act');
    }
  }
  if (items_play) {
    for (let i = 0; i < items_play.length; i += 1) {
      items_play[i].classList.remove('play_act');
    }
  }
}

window.addEventListener('resize', () => {
  bodySlider.style.transform = `translateX(0px)`;
  currentSlide = 1;
  slideMoveX = 0;
  if (right.closest('._end')) {
    right.classList.toggle('_end');
  }
  if (!left.closest('._end')) {
    left.classList.toggle('_end');
  }
  videoList.style.maxHeight = `${sizeBlockVideo()}px`;
  currentMoveVideo = 0;
  listVideosMove = 0;
  videoItems.style.transform = `translateY(0px)`;
  clearClass();
  const itemB = document.querySelector('.item-video_1');
  itemB.classList.add('item-video_act');
  const itemP = document.querySelector('.play__1');
  itemP.classList.add('play_act');
  player.setAttribute('src', videos[0]);
  player.pause();
  player.removeAttribute('controls');
});

function sizeBlockVideo() {
  let size = rowGap * 2;
  for (let i = 0; i < 3; i += 1) {
    size += itemsVideo[i].offsetHeight;
  }
  return size;
}
