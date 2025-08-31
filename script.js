// Enhanced Netflix Clone Functionality
document.addEventListener('DOMContentLoaded', function() {
  
  // FAQ Toggle Functionality with smooth animations
  const questions = document.querySelectorAll('.ques');
  
  questions.forEach((question, index) => {
    const questionHeader = question.querySelector('.question-header');
    const toggleIcon = question.querySelector('.toggle-icon');
    const answer = question.nextElementSibling;
    
    // Initially hide all answers
    if (answer && answer.classList.contains('answer')) {
      answer.style.display = 'none';
      answer.style.opacity = '0';
      answer.style.transform = 'translateY(-10px)';
    }
    
    questionHeader.addEventListener('click', function() {
      const isOpen = answer.style.display === 'block';
      
      // Close all other answers with smooth animation
      questions.forEach((q, qIndex) => {
        const otherAnswer = q.nextElementSibling;
        const otherIcon = q.querySelector('.toggle-icon');
        if (otherAnswer && otherAnswer.classList.contains('answer') && otherAnswer !== answer) {
          closeAnswer(otherAnswer, otherIcon, q);
        }
      });
      
      // Toggle current answer
      if (isOpen) {
        closeAnswer(answer, toggleIcon, question);
      } else {
        openAnswer(answer, toggleIcon, question);
      }
    });
  });
  
  // Smooth answer opening
  function openAnswer(answer, toggleIcon, question) {
    answer.style.display = 'block';
    answer.style.opacity = '0';
    answer.style.transform = 'translateY(-10px)';
    
    // Trigger reflow
    answer.offsetHeight;
    
    // Animate in
    answer.style.transition = 'all 0.3s ease';
    answer.style.opacity = '1';
    answer.style.transform = 'translateY(0)';
    
    toggleIcon.textContent = '×';
    question.classList.add('active');
  }
  
  // Smooth answer closing
  function closeAnswer(answer, toggleIcon, question) {
    answer.style.transition = 'all 0.3s ease';
    answer.style.opacity = '0';
    answer.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
      answer.style.display = 'none';
    }, 300);
    
    toggleIcon.textContent = '+';
    question.classList.remove('active');
  }
  
  // Smooth scrolling for navigation
  const signInBtn = document.querySelector('.sign-in-btn');
  const getStartedBtns = document.querySelectorAll('.get-started1, .get-started2');
  
  // Add smooth scroll to buttons
  [signInBtn, ...getStartedBtns].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add click animation
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
          btn.style.transform = 'scale(1)';
        }, 150);
        
        // Scroll to questions section smoothly
        const questionsSection = document.querySelector('.questions');
        if (questionsSection) {
          questionsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    }
  });
  
  // Enhanced card hover effects
  const cards = document.querySelectorAll('.cards');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) translateY(-5px)';
      this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.7)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
      this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.5)';
    });
  });
  
  // Smooth form interactions
  const emailInputs = document.querySelectorAll('.email-input1, .email-input2');
  emailInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'scale(1.02)';
      this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
    });
    
    input.addEventListener('blur', function() {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Add loading animation to page
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
  
  // Parallax effect for hero section
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
      heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
      heroSection.style.opacity = 1 - (scrolled * 0.001);
    }
  });
  
  // Enhanced arrow interaction
  const arrow = document.querySelector('.arrow');
  if (arrow) {
    arrow.addEventListener('click', function() {
      // Scroll to next section smoothly
      const nextSection = document.querySelector('.questions');
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      // Add click animation
      this.style.transform = 'scale(1.2) rotate(360deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1.1) rotate(0deg)';
      }, 300);
    });
  }
  
  // Add keyboard navigation for FAQ
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      const focusedElement = document.activeElement;
      if (focusedElement.classList.contains('question-header')) {
        e.preventDefault();
        focusedElement.click();
      }
    }
  });
  
  // Add intersection observer for smooth animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for smooth entrance
  const animateElements = document.querySelectorAll('.questions, .footer');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
  
});
