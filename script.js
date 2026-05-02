
    /* ---- Navbar scroll effect ---- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    /* ---- Mobile menu ---- */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    /* Close mobile menu on link click */
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });

    /* ---- Pricing toggle ---- */
    const billingToggle = document.getElementById('billingToggle');
    const labelMonthly = document.getElementById('labelMonthly');
    const labelYearly = document.getElementById('labelYearly');

    const prices = {
      monthly: { starter: 29, pro: 79, enterprise: 199 },
      yearly:  { starter: 23, pro: 63, enterprise: 159 }
    };

    let isYearly = false;

    function updatePricing() {
      const plan = isYearly ? 'yearly' : 'monthly';
      document.getElementById('price-starter').textContent = prices[plan].starter;
      document.getElementById('price-pro').textContent     = prices[plan].pro;
      document.getElementById('price-enterprise').textContent = prices[plan].enterprise;

      const note = isYearly ? 'Billed annually' : 'Billed monthly';
      document.getElementById('note-starter').textContent   = isYearly ? `Billed annually ($${prices.yearly.starter * 12}/year)` : 'Billed monthly';
      document.getElementById('note-pro').textContent       = isYearly ? `Billed annually ($${prices.yearly.pro * 12}/year)` : 'Billed monthly';
      document.getElementById('note-enterprise').textContent= isYearly ? `Billed annually ($${prices.yearly.enterprise * 12}/year)` : 'Billed monthly';

      labelMonthly.classList.toggle('active', !isYearly);
      labelYearly.classList.toggle('active', isYearly);
      billingToggle.classList.toggle('yearly', isYearly);
    }

    billingToggle.addEventListener('click', () => {
      isYearly = !isYearly;
      updatePricing();
    });

    /* ---- Scroll animations ---- */
    const animateEls = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animateEls.forEach(el => observer.observe(el));