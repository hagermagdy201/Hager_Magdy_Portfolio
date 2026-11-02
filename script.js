var togglebtn = document.querySelector('.togglebtn');
var nav= document.querySelector('.navlinks');
var links = document.querySelectorAll('.navlinks li');

togglebtn.addEventListener('click', function(){
    this.classList.toggle('click');
    nav.classList.toggle('open');

    var icon = this.querySelector('i');
    if (this.classList.contains('click')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

const navLinks = document.querySelectorAll('nav .navlinks li a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('open');
        toggleBtn.classList.remove('click');
        
        var icon = toggleBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
});

var typed = new Typed('.input', {
    strings: ['Flutter Developer', 'UI/UX Designer', 'Coding & Robotics Instructor'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const cardsContainer = document.getElementById('cardsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

           
function getScrollAmount() {
    const card = cardsContainer.querySelector('.project-card');
    if (!card) return 380;
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth;
    const gap = parseInt(window.getComputedStyle(cardsContainer).gap) || 24;
    return cardWidth + gap;
}

nextBtn.addEventListener('click', () => {
const scrollAmount = getScrollAmount();
const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;

    if (cardsContainer.scrollLeft >= maxScrollLeft - 5) {
        cardsContainer.scrollTo({
        left: 0,
        behavior: 'smooth'
        });
    } else {
        cardsContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
        });
    }
});

prevBtn.addEventListener('click', () => {
const scrollAmount = getScrollAmount();
            
    if (cardsContainer.scrollLeft <= 5) {
        cardsContainer.scrollTo({
        left: cardsContainer.scrollWidth,
        behavior: 'smooth'
    });
    } else {
        cardsContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
    }
});