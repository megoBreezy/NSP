//header-menu
const headerBtn = document.querySelector('.header__btn-menu');
const headerMenu = document.querySelector('.header__menu-mobile');
const closeMenu = document.querySelector('.menu-close');
const overlay = document.getElementById('overlay');

if (document.querySelectorAll(".header__btn-menu").length) {
    headerBtn.addEventListener('click', function(e){
        e.preventDefault();

        headerBtn.classList.add('is-active');
        headerMenu.classList.add('is-active');
        overlay.classList.add('is-active');
        document.body.classList.add('body-overflow');
    })

    closeMenu.addEventListener('click', function(e){
        e.preventDefault();

        headerBtn.classList.remove('is-active');
        headerMenu.classList.remove('is-active');
        overlay.classList.remove('is-active');
        document.body.classList.remove('body-overflow');
    })
}


//country select
const countryButtns = document.querySelectorAll('.country-select__btn');

if (document.querySelectorAll(".country-select__btn").length) {
    for (const countryBtn of countryButtns) {
        countryBtn.addEventListener('click', function(e){
            e.preventDefault();

            let countryContainer = this.closest('.country-select')
            let countryDropdown = countryContainer.querySelector('.country-select__dropdown')

            countryDropdown.classList.toggle('is-active');
            this.classList.toggle('is-active');
        })
    }
    
    window.onclick = function(event) {
        if (!event.target.matches('.country-select__btn')) {
            const countryButtns = document.querySelectorAll('.country-select__btn');
            const countryDropdowns = document.querySelectorAll('.country-select__dropdown');
            
            for (const countryBtn of countryButtns) {
                countryBtn.classList.remove('is-active');
            }
            for (const countryDropdown of countryDropdowns) {
                countryDropdown.classList.remove('is-active');
            }
        }
    }
}

//parallax
if(window.innerWidth > 1023){
    if(document.querySelectorAll(".scene").length) {
        
        var scenes = document.getElementsByClassName('scene');
    
        for (const scene of scenes) {
            let parallax = new Parallax(scene);
        }
        
    };
}

//about-dropdown
const dropdownBtn = document.querySelector('.about-dropdown__btn');

dropdownBtn.addEventListener('click', function(e){
    e.preventDefault();

    let dropdownCont = this.closest('.about');
    let dropdown = dropdownCont.querySelector('.about-dropdown');

    this.classList.toggle('is-active');
    if (dropdown.style.maxHeight){
        dropdown.style.maxHeight = null;
    } else {
        dropdown.style.maxHeight =  dropdown.scrollHeight + "px";
    } 
});


//modal
const modalBtnItems = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const modalsClose = document.querySelectorAll('.modal-close');

for (const modalBtn of modalBtnItems) {
    modalBtn.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('is-active');
            overlay.classList.remove('is-active');
            document.body.classList.remove('body-overflow');
        }

        const modalActive = document.getElementById(this.getAttribute('href')); 
        
        modalActive.classList.add('is-active');
        overlay.classList.add('is-active');
        document.body.classList.add('body-overflow');
    });
}

for (const modalClose of modalsClose) {
    modalClose.addEventListener('click', function(event) {
        event.preventDefault();

        for (const modal of modals) {
            modal.classList.remove('is-active');
            overlay.classList.remove('is-active');
            document.body.classList.remove('body-overflow');
        }
    });
}

overlay.addEventListener('click', function(){
    overlay.classList.remove('is-active');
        
    for (const modal of modals) {
        modal.classList.remove('is-active');
        document.body.classList.remove('body-overflow');
    }

    headerBtn.classList.remove('is-active');
    headerMenu.classList.remove('is-active');
});

// aos
AOS.init();

//
const anchors = document.querySelectorAll('.anchron')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
        })
    })
}

//
var mybutton = document.getElementById("scrollTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

var swiper = new Swiper(".sertificate-slider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

var swiper = new Swiper(".reviwe-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        568: {
            slidesPerView: "auto",
        }
    }
});

Fancybox.bind("[data-fancybox]", {});

