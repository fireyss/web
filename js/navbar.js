const navbarHTML = `
        <div class="navbar">
            <div class="navcontainer">
                <div class="navbutton" data-page="me">ME</div>
                <div class="navbutton" data-page="blog">BLOG</div>
                <div class="navbutton" data-page="contact">CONTACT</div>
            </div>
        </div>
    `;
document.body.insertAdjacentHTML('afterbegin', navbarHTML);

const pathname = window.location.pathname.toLowerCase();
let activePage = 'me'; // default

if (pathname.includes('blog')) {
    activePage = 'blog';
} else if (pathname.includes('contact')) {
    activePage = 'contact';
}

const navButtons = document.querySelectorAll('.navbutton');
navButtons.forEach(button => {
    if (button.getAttribute('data-page') === activePage) {
        button.classList.add('active');
    }
});

const navbar = document.querySelector('.navbar');

function update() {
    if (window.scrollY > 50) {
        navbar.classList.add('minimized');
    } else {
        navbar.classList.remove('minimized');
    }
}
window.addEventListener('scroll', update);
update()