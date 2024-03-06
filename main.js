// menu icon
let menuicon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuicon.onclick = () => {
  menuicon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

};

// sticky navbar
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  let header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // remove menu icon bar
  menuicon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

//slides
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// dark light
let darkmodeicon = document.querySelector('#darkMode-icon');
darkmodeicon.onclick = () => {
  darkmodeicon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};

//text
let text = "Sarfaraz Sattar", i = 0, j = 0, speedd = 280;
let text2 = "Web Devloper";
function tp() {
  if (i < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(i)
    i++
    setTimeout(tp, speedd)
  }
  else if (i == text.length) {
    document.getElementById("demo").innerHTML = " ";
    tp2()
  }

}
tp();
function tp2() {
  if (j < text2.length) {
    document.getElementById("demo").innerHTML += text2.charAt(j)
    j++
    setTimeout(tp2, speedd)
  }
  else if (j == text2.length) {
    document.getElementById("demo").innerHTML = " ";
    i = 0
    j = 0
    tp()
  }
}

// scroll
ScrollReveal({
  // reset: true,
  distance:'80px',
  duration:2000,
  delay:150
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1,.about-img img', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

