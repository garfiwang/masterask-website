/* ==========================================================================
   問大師家族辦公室 (Wendashi Family Office) 官方網站 v3.0 — 前端互動邏輯
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. 導覽列滾動陰影與樣式切換
  const navbar = document.getElementById('navbar');
  const floatingCta = document.getElementById('floatingCta');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 2. Scroll Reveal 捲動顯現動畫
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // 初始化執行一次

  // 3. FAQ 手風琴切換 (Accordion Toggle)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const header = item.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 關閉其他開啟的 FAQ 項目
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove('active');
      });

      // 若原先未開啟，則展開點擊項
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. 1對1 諮詢表單送出邏輯 (Form Submission & Modal)
  const consultationForm = document.getElementById('consultationForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;

      if (!name || !phone || !service) {
        alert('請填寫完整諮詢資訊，謝謝！');
        return;
      }

      // 顯示成功跳窗
      successModal.classList.add('active');

      // 清空表單
      consultationForm.reset();
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  // 點擊彈窗外部區域關閉
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }

  // 5. 行動端選單按鈕 (Mobile Menu Toggle)
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#FAF8F5';
        navLinks.style.padding = '1.5rem';
        navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }
    });
  }

  // 6. 平滑捲動至指定區塊 (Smooth Anchor Scroll)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        
        // 若行動選單為開啟狀態則關閉
        if (window.innerWidth <= 768 && navLinks) {
          navLinks.style.display = 'none';
        }

        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

});
