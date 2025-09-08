// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Project click handler
function showProject(projectName) {
    if (projectName === 'Java Calculator') {
        alert(`${projectName}\n\nMy first programming project! A simple calculator built with Java that performs basic arithmetic operations. This project helped me understand:\n\n• Java syntax and structure\n• User input handling\n• Basic GUI development\n• Problem-solving with code\n\nIt may be simple, but it's the foundation of my programming journey!`);
    } else if (projectName === 'J art graphics Logo') {
        alert(`${projectName}\n\nPersonal branding project for my graphic design work!\n\nCreated using Adobe Illustrator, this logo represents my creative identity and design philosophy. It showcases:\n\n• Typography skills\n• Color theory application\n• Brand identity development\n• Creative problem solving\n\nThis logo is now part of all my design work under the J art graphics brand.`);
    } else {
        alert(`${projectName}\n\nExciting projects are in development! As I continue learning and growing as a Software Engineering student, I'll be adding more projects including:\n\n• Web applications\n• Mobile apps\n• Database projects\n• AI/ML experiments\n\nStay tuned for updates!`);
    }
}

//