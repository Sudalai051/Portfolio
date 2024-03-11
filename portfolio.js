//toggle icon navbar

// SCROLL SECTIONS
let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >=  offset && top < offset + height) {
            //Active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });
    //Sticky Header
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}

// =================================ScrollReveal======================================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.edu-box, .skills-box, .contact_container', { origin:'bottom'});
ScrollReveal().reveal('.about-img, .title', { origin:'left'});
ScrollReveal().reveal('.about-content, .contact_btn_box', { origin:'right'});
ScrollReveal().reveal('.home-sci', { interval: 16});
// ===============================TypedJS==========================================
const typed = new Typed ('.multiple-text',{
    strings:['Biomedical Engineer', 'Front-End Devoleper'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

// =============================== EMAIL JS ====================================

const contactform=document.getElementById('contact'),
        contactMessage = document.getElementById('contact-msg')
const sendEmail = (e) =>{
    e.preventDefault();
    // ServiceID - TemplateID - # Form - PublicKey
    emailjs.sendForm('service_orwxzkd','template_mk8mtti','#contact_form','HStpI8IvsegxlQ7HB')
    .then(() =>{
        // Show Sent Message
        contactMessage.textContent = "Message Sent Succesfully 😇"
    },()=>{
       // Show Error Message
       contactMessage.textContent = "Message Not Sent (Service Error) 😥" 
    })
}
contactform.addEventListener('submit',sendEmail );