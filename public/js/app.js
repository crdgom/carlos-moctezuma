// navigation control

let section = document.querySelectorAll('section');
let link = document.querySelectorAll('.nav');
function activeLink(li) {
    link.forEach((item) => item.classList.remove('active'));
    li.classList.add('active');
}
link.forEach((item) =>
    item.addEventListener('click', function(){
        activeLink(this);
    }));

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            const target = document.querySelector(`[href='#${id}']`).parentElement;
            activeLink(target);
        }
    })
};


// card carrousel

const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
console.log(carouselWidth);
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='card']").length;

let offset = 0;
const maxX = -((cardCount / 5) * carouselWidth + 
               (cardMarginRight * (cardCount / 5)) - 
               carouselWidth - cardMarginRight);

console.log(maxX);
console.log(cardMarginRight)

leftButton.addEventListener("click", function() {
if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    console.log("click left");
    }
})

rightButton.addEventListener("click", function() {
if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
}
})