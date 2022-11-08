const subMenuLink = document.querySelector('.link-main');
const subMenuList = document.querySelector('.sub-menu__list');
const orderLink = document.querySelector('.delivery__link');
const popUp = document.querySelector('.popup');
const close = document.querySelector('.popup__close');
const closeArea = document.querySelector('.popup__close-area');
const offerLinks = document.querySelector('.offer__link-buttons');
const offerLink = document.querySelectorAll('.offer__link-button');
const cartButton = document.querySelector('.cart__link');
const cartPopup = document.querySelector('.cart__popup');


const offerArticle = document.querySelector('.offer__info');

const dots = document.querySelector('.slider__dots');

// Корзина товаров
cartButton.addEventListener('click', function(event){
    event.preventDefault()
    cartPopup.classList.toggle('active');    
})

//Дополнительное меню
subMenuLink.addEventListener('click', function(event){
    event.preventDefault()
    subMenuLink.classList.toggle('active')
    subMenuList.classList.toggle('active')
})

orderLink.addEventListener('click', function(event){
    event.preventDefault()
    popUp.classList.toggle('active');
})

close.addEventListener('click', function(event){
    popUp.classList.remove('active');
})

closeArea.addEventListener('click', function(event){
    event.preventDefault()
    popUp.classList.remove('active');
})




