const navSlide = () => {
    const phone = document.querySelector('.phone-view');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')


    phone.addEventListener('click',() => {
    //Toggle Nav
        nav.classList.toggle('nav-active');

         //Animation Links
        navLinks.forEach((link, home) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${home / 7 + 0}s`;
        }
    }); 
    //phone animation
    phone.classList.toggle('toggle'); 
    });
}

navSlide()