const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    sections.forEach((section, idx) => {
        if (window.scrollY >= section.offsetTop - 10 && window.scrollY < section.offsetTop + section.offsetHeight - 10) {
            navLinks[idx].classList.add('active');
        } else {
            navLinks[idx].classList.remove('active');
        }
    });
});
