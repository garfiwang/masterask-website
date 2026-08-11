/**
 * 問大師 (Ask Master) 官方網站 — 前端動態與互動邏輯
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navbar Scroll Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.style.display === 'flex';
      if (isExpanded) {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = '#FAF8F5';
        navLinks.style.padding = '1.5rem';
        navLinks.style.boxShadow = '0 10px 25px rgba(61, 43, 31, 0.1)';
        navLinks.style.borderBottom = '1px solid #EAE3D5';
      }
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navLinks.style.display = 'none';
        }
      });
    });
  }

  // 3. Scroll Reveal Animation (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other accordion items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. Form Submission & Modal Feedback
  const consultForm = document.getElementById('consult-form');
  const successModal = document.getElementById('success-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalMsg = document.getElementById('modal-msg');

  if (consultForm) {
    consultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const userName = document.getElementById('user-name').value.trim();
      const userTopic = document.getElementById('user-topic').value;
      const userPhone = document.getElementById('user-phone').value.trim();

      if (userName && userPhone) {
        modalMsg.innerHTML = `尊敬的 <strong>${userName}</strong> 您好：<br>我們已收到您關於「<strong>${userTopic}</strong>」的諮詢申請，顧問專員將於 24 小時內親自與您聯繫！`;
        
        successModal.classList.add('active');
        consultForm.reset();
      }
    });
  }

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }
});
