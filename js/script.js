
    // Dark mode toggle with persistence
    function toggleDarkMode() {
      const body = document.body;
      const toggleIcon = document.querySelector('.toggle-icon');
      const toggleText = document.querySelector('.toggle-text');
      
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
        toggleIcon.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
      } else {
        toggleIcon.textContent = '🌙';
        toggleText.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
      }
    }

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.querySelector('.toggle-icon').textContent = '☀️';
      document.querySelector('.toggle-text').textContent = 'Light Mode';
    }

    // Click effect
    document.addEventListener('click', function(e) {
      const clickEffect = document.createElement('div');
      clickEffect.className = 'click-effect';
      clickEffect.style.left = (e.clientX - 50) + 'px';
      clickEffect.style.top = (e.clientY - 50) + 'px';
      document.body.appendChild(clickEffect);
      
      setTimeout(() => {
        clickEffect.remove();
      }, 600);
    });

    // Animated counter for stats
    function animateCounter(element, target, duration = 2000) {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        
        if (target >= 1000) {
          element.textContent = Math.floor(current / 1000) + 'k+';
        } else {
          element.textContent = Math.floor(current) + '+';
        }
      }, 16);
    }

    // Trigger counter animation when page loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        animateCounter(statNumbers[0], 500, 1500);
        animateCounter(statNumbers[1], 10000, 2000);
        animateCounter(statNumbers[2], 50, 1000);
      }, 1000);
    });

    // Smooth scroll and enhanced link interactions
    document.querySelectorAll('.link-btn').forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
      });
      
      link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'd' || e.key === 'D') {
        toggleDarkMode();
      }
    });