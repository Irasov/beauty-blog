const icon = document.querySelector(".header__icon");
const menu = document.querySelector(".menu");
if(icon) {
    icon.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        menu.classList.toggle('_active');
        icon.classList.toggle('_active');
    }); 
}
