// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Form submission with EmailJS
const contactForm = document.querySelector('.contact-form');
const formMessage = document.getElementById('form-message');
const submitBtn = contactForm.querySelector('button[type="submit"]');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading message
        showMessage('Đang gửi tin nhắn...', 'loading');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đang gửi...';
        
        // Initialize EmailJS with your public key
        emailjs.init('JxxrPZgCDdeCxGPye'); // Replace with your EmailJS public key
        
        const formData = {
            from_name: contactForm.querySelector('input[type="text"]').value,
            from_email: contactForm.querySelector('input[type="email"]').value,
            message: contactForm.querySelector('textarea').value,
            
        };
        
        emailjs.send('service_lgabm89', 'template_ulmzgml', formData) // Replace with your service and template IDs
            .then(() => {
                showMessage('Cảm ơn bạn đã liên hệ! Tin nhắn đã được gửi thành công.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Gửi tin nhắn';
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                showMessage('Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.', 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Gửi tin nhắn';
            });
    });
}

function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Add show class for animation
    setTimeout(() => {
        formMessage.classList.add('show');
    }, 10);
    //hehe
    // Auto hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            hideMessage();
        }, 5000);
    }
}

function hideMessage() {
    formMessage.classList.remove('show');
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 300);
}

// Add fade-in animation on scroll
const fadeElements = document.querySelectorAll('.project-card, .stat-card, .skill-category');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

