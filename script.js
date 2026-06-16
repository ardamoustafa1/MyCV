// Mobile Navigation Toggle /* Mobil navigasyon menü açma/kapama */
const hamburger = document.querySelector('.hamburger'); /* Hamburger menü butonunu seçer */
const navMenu = document.querySelector('.nav-menu'); /* Navigasyon menüsünü seçer */

hamburger.addEventListener('click', () => { /* Hamburger butonuna tıklama olayı ekler */
    hamburger.classList.toggle('active'); /* Hamburger butonuna active sınıfını ekler/çıkarır */
    navMenu.classList.toggle('active'); /* Navigasyon menüsüne active sınıfını ekler/çıkarır */
});

// Close mobile menu when clicking on a link /* Menü linkine tıklandığında mobil menüyü kapat */
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => { /* Tüm navigasyon linklerini seçer ve her birine tıklama olayı ekler */
    hamburger.classList.remove('active'); /* Hamburger butonundan active sınıfını kaldırır */
    navMenu.classList.remove('active'); /* Navigasyon menüsünden active sınıfını kaldırır */
}));

// Language Selector /* Dil seçici */
const languageBtn = document.getElementById('languageBtn'); /* Dil butonunu seçer */
const languageDropdown = document.getElementById('languageDropdown'); /* Dil dropdown menüsünü seçer */
const currentLang = document.getElementById('currentLang'); /* Mevcut dil göstergesini seçer */
let currentLanguage = 'tr'; /* Mevcut dil değişkeni - varsayılan Türkçe */

// Toggle language dropdown /* Dil dropdown menüsünü aç/kapat */
languageBtn.addEventListener('click', (e) => { /* Dil butonuna tıklama olayı ekler */
    e.stopPropagation(); /* Event bubbling'i engeller */
    languageDropdown.classList.toggle('active'); /* Dropdown menüsüne active sınıfını ekler/çıkarır */
});

// Close dropdown when clicking outside /* Dışarı tıklandığında dropdown'ı kapat */
document.addEventListener('click', (e) => { /* Document'e tıklama olayı ekler */
    if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) { /* Eğer tıklanan element dil seçici değilse */
        languageDropdown.classList.remove('active'); /* Dropdown menüsünden active sınıfını kaldırır */
    }
});

// Language change functionality /* Dil değiştirme fonksiyonalitesi */
document.querySelectorAll('.language-option').forEach(option => { /* Tüm dil seçeneklerini seçer */
    option.addEventListener('click', (e) => { /* Her dil seçeneğine tıklama olayı ekler */
        e.preventDefault(); /* Varsayılan link davranışını engeller */
        const selectedLang = option.getAttribute('data-lang'); /* Seçilen dili alır */
        changeLanguage(selectedLang); /* Dili değiştirir */
        languageDropdown.classList.remove('active'); /* Dropdown menüsünü kapatır */
    });
});

// Change language function /* Dil değiştirme fonksiyonu */
function changeLanguage(lang) { /* Dil değiştirme fonksiyonu */
    currentLanguage = lang; /* Mevcut dili günceller */
    currentLang.textContent = lang.toUpperCase(); /* Mevcut dil göstergesini günceller */
    
    // Update all elements with data attributes /* Data attribute'ları olan tüm elementleri günceller */
    document.querySelectorAll('[data-tr]').forEach(element => { /* Tüm data-tr attribute'ı olan elementleri seçer */
        if (element.getAttribute(`data-${lang}`)) { /* Eğer element seçilen dil için data attribute'ı varsa */
            element.textContent = element.getAttribute(`data-${lang}`); /* Elementin metnini günceller */
        }
    });
    
    // Update placeholders /* Placeholder'ları günceller */
    document.querySelectorAll('input, textarea').forEach(input => { /* Tüm input ve textarea elementlerini seçer */
        const placeholderAttr = `data-${lang}-placeholder`; /* Placeholder attribute adını oluşturur */
        if (input.getAttribute(placeholderAttr)) { /* Eğer element seçilen dil için placeholder attribute'ı varsa */
            input.placeholder = input.getAttribute(placeholderAttr); /* Placeholder'ı günceller */
        }
    });
    
    // Save language preference /* Dil tercihini kaydet */
    localStorage.setItem('preferredLanguage', lang); /* Seçilen dili localStorage'a kaydeder */
}

// Load saved language preference /* Kaydedilmiş dil tercihini yükle */
const savedLanguage = localStorage.getItem('preferredLanguage'); /* Kaydedilmiş dili alır */
if (savedLanguage) { /* Eğer kaydedilmiş dil varsa */
    changeLanguage(savedLanguage); /* Dili değiştirir */
}

// Smooth scrolling for navigation links /* Navigasyon linkleri için yumuşak kaydırma */
document.querySelectorAll('a[href^="#"]').forEach(anchor => { /* # ile başlayan tüm linkleri seçer */
    anchor.addEventListener('click', function (e) { /* Her linke tıklama olayı ekler */
        e.preventDefault(); /* Varsayılan link davranışını engeller */
        const target = document.querySelector(this.getAttribute('href')); /* Hedef elementi seçer */
        if (target) { /* Eğer hedef element varsa */
            target.scrollIntoView({ /* Hedef elemente yumuşak kaydırma yapar */
                behavior: 'smooth', /* Yumuşak kaydırma */
                block: 'start' /* Elementin üst kısmını görünür yapar */
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-card, .skill-category, .timeline-item, .project-card, .contact-item');
    animateElements.forEach(el => observer.observe(el));
});

// Skill bars animation
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 200 + (index * 100)); // Her bar için farklı gecikme
    });
};

// Animate skill bars when skills section is visible
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                animateSkillBars();
            }, 500);
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Typing effect for hero title
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
};

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const titleName = document.querySelector('.title-name');
    if (titleName) {
        const originalText = titleName.textContent;
        typeWriter(titleName, originalText, 150);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + suffix;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + suffix;
            }
        }, 20);
    });
};

// Animate counters when about section is visible
const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

// Form submission handling with Formspree
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        // Get form data for validation
        const name = contactForm.querySelector('input[name="name"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const subject = contactForm.querySelector('input[name="subject"]').value.trim();
        const message = contactForm.querySelector('textarea[name="message"]').value.trim();
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            showNotification('Lütfen tüm alanları doldurun.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }
        
        if (!isValidEmail(email)) {
            e.preventDefault();
            showNotification('Geçerli bir e-posta adresi girin.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }
        
        // Let Formspree handle the submission
        // Show success message after a delay
        setTimeout(() => {
            showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Email validation
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Notification system
const showNotification = (message, type = 'info') => {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
};

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Project buttons functionality - Test
console.log('🚀 Project buttons are ready!');

// Test butonları
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.project-btn');
    console.log('Found buttons:', buttons.length);
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', index);
            e.preventDefault();
            e.stopPropagation();
        });
    });
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if any are added later)
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Add scroll progress indicator
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
};

// Initialize scroll progress
createScrollProgress();

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-header, .about-content, .skills-grid, .timeline, .projects-grid, .contact-content');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// Add floating animation to hero elements
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 2}s`;
});

// Add particle effect to hero section (optional enhancement)
const createParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
        `;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        hero.appendChild(particle);
    }
};

// Initialize particles
createParticles();

console.log('🚀 CV Website loaded successfully!');
