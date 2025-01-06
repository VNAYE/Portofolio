document.getElementById('header').innerHTML = `
    <header class="header">
        <nav class="header-nav">
            <a href="index.html" class="brand-name">Vinay Pepakayala</a>
            <button class="nav-toggle" aria-label="toggle navigation">
                <span class="hamburger"></span>
            </button>
            <ol class="header-nav-list">
                <li class="header-nav-list-item-right"><a href="aboutme.html">About Me</a></li>
                <li class="header-nav-list-item-right"><a href="project.html">Projects</a></li>
                <li class="header-nav-list-item-right"><a href="https://github.com/VNAYE" target="_blank">GitHub</a></li>
                <li class="header-nav-list-item-right"><a href="contact.html">Contact</a></li>
            </ol>
        </nav>
    </header>
`;

document.getElementById('footer').innerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2024 Vinay Pepakayala. All rights reserved.</p>
            <ul class="footer-links">
                <li><a href="https://www.linkedin.com/in/vinaypepakayala/" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/vinay-852" target="_blank">GitHub</a></li>
                <li><a href="mailto:Vinaypepakayala01@gmail.com">Email Me</a></li>
            </ul>
        </div>
    </footer>
`;

// Add smooth scrolling for navigation links
document.querySelectorAll('.header-nav-list a, .footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle navigation for mobile
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.header-nav-list').classList.toggle('nav-open');
});

// Add interaction for brand name
document.querySelector('.brand-name').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    });
});
