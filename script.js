
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Working on scrolling
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
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Removing toggle icon and navbar from classList
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// Scroll reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-container', { origin: 'bottom' });


// Text typing
const typed = new Typed('.multiple-text', {
    strings: ['an IITG student', ' a Web Developer', 'a Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

const type = new Typed('.multi-text2', {
    strings: [ ' A Web Developer', 'A Programmer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});




const number= document.getElementById('number');
const email = document.getElementById('email-id');
const topic= document.getElementById('topic');
const msg= document.getElementById('msg');
const user= document.getElementById('name');

const contact = document.getElementById('contactform')

contact.addEventListener('submit',()=>{
  
    {number.value='',
    email.value='',
    topic.value='',
    msg.value='',
    user.value=''}

})



// Getting current date and time
function getCurrentDateTime() {
    let currentDate = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    return currentDate.toLocaleDateString("en-US", options);
}

// Updating the footer with current date and time
function updateSchedule() {
    let scheduleElement = document.getElementById('schedule');
    if (scheduleElement) {
        scheduleElement.textContent = getCurrentDateTime();
    }
}

// calling the function
setInterval(updateSchedule, 1000);

