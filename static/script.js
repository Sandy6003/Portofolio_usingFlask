document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');

            if (hamburger) {
                hamburger.addEventListener('click', function() {
                    this.classList.toggle('active');
                    navLinks.classList.toggle('active');
                });
            }

            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (hamburger.classList.contains('active')) {
                        hamburger.classList.remove('active');
                        navLinks.classList.remove('active');
                    }
                });
            });

            // Auto-hide flash messages
            const flashMessages = document.querySelectorAll('.flash');
            flashMessages.forEach(msg => {
                setTimeout(() => {
                    msg.style.animation = 'slideOut 0.5s forwards';
                    setTimeout(() => msg.remove(), 500);
                }, 5000);
            });
        });
    // Add animation for tech items
    const techItems = document.querySelectorAll('.tech-used span');
    techItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate-tech');
    });
    
    // Add animation for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate-project');
    });
});
