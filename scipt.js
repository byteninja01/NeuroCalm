// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll(".navbar nav ul li a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Adjust for the navbar height
            behavior: "smooth",
          });
        }
      });
    });
  
    // Sticky Navbar Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    // Responsive Navbar Toggle
    const toggleButton = document.createElement("div");
    toggleButton.classList.add("toggle-button");
    toggleButton.innerHTML = "☰";
    navbar.appendChild(toggleButton);
  
    toggleButton.addEventListener("click", () => {
      const navMenu = document.querySelector(".navbar nav ul");
      navMenu.classList.toggle("show");
    });
  
    // Feature Section Animation
    const featureCards = document.querySelectorAll(".feature-card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    featureCards.forEach(card => observer.observe(card));
  
    // Form Submission Alert (Temporary Example)
    const contactForm = document.querySelector(".contact form");
    if (contactForm) {
      contactForm.addEventListener("submit", e => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you shortly.");
        contactForm.reset();
      });
    }
  });
  

  // Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", function () {

    // Navbar Hover Effect
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = "#ff6f61";  // Hover effect color change
            link.style.transform = "scale(1.1)";  // Hover effect: scale up
        });
        link.addEventListener('mouseout', () => {
            link.style.color = "white";  // Revert color on mouse out
            link.style.transform = "scale(1)";  // Revert scale on mouse out
        });
    });

    // Scroll to Section Functionality
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = sections[index];
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset to account for fixed navbar
                behavior: 'smooth'
            });
        });
    });

    // Mood Tracker
    const moodInput = document.querySelector('#moodInput');
    const moodOutput = document.querySelector('#moodOutput');
    const moodSubmitButton = document.querySelector('#moodSubmit');
    const moodHistory = document.querySelector('#moodHistory');

    let moodData = JSON.parse(localStorage.getItem('moodData')) || [];

    // Display mood history
    function displayMoodHistory() {
        moodHistory.innerHTML = '';
        moodData.forEach((mood, index) => {
            const moodEntry = document.createElement('div');
            moodEntry.classList.add('mood-entry');
            moodEntry.innerHTML = `
                <p>Mood: ${mood.mood}</p>
                <p>Date: ${mood.date}</p>
            `;
            moodHistory.appendChild(moodEntry);
        });
    }

    // Handle mood submission
    moodSubmitButton.addEventListener('click', () => {
        const mood = moodInput.value.trim();
        if (mood) {
            const date = new Date().toLocaleString();
            const moodObj = { mood, date };
            moodData.push(moodObj);
            localStorage.setItem('moodData', JSON.stringify(moodData));
            displayMoodHistory();  // Update history
            moodInput.value = '';  // Clear input field
            moodOutput.textContent = `Your mood: ${mood}`;  // Show current mood
        } else {
            alert("Please enter your mood!");
        }
    });

    // Call function to display mood history on page load
    displayMoodHistory();

    // Change background color of navbar based on scroll position
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#333';  // Darken navbar on scroll
        } else {
            navbar.style.backgroundColor = 'transparent';  // Revert navbar color
        }
    });

    // Add smooth scroll to top button functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px';
    scrollToTopButton.style.backgroundColor = '#ff6f61';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';  // Hidden by default
    document.body.appendChild(scrollToTopButton);

    // Show or hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    // Scroll to top functionality when button is clicked
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Function to toggle menu on mobile devices (hamburger menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');
    
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');  // Toggle menu visibility on small screens
    });

    // Responsive Behavior for Navbar and Hero Section
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleMobileView() {
        if (mediaQuery.matches) {
            navbar.style.position = 'static';  // Navbar is not fixed on mobile
            navbar.style.backgroundColor = '#ff6f61';  // Set background color on mobile view
        } else {
            navbar.style.position = 'fixed';  // Keep navbar fixed on larger screens
            navbar.style.backgroundColor = 'transparent';  // Transparent background for desktop
        }
    }

    mediaQuery.addEventListener('change', handleMobileView);
    handleMobileView();

});

// Add additional dynamic behaviors or interactive elements as needed

var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var sliderValue = document.getElementById('range');

sliderValue.oninput = function() {
  var value = this.value;
  if (value <= 20) {
    emoji.innerHTML = '&#128543;'; 
    mood.innerHTML = 'Worried';
  } else if (value <= 40) {
    emoji.innerHTML = '&#128545;'; 
    mood.innerHTML = 'Sad';
  } else if (value <= 60) {
    emoji.innerHTML = '&#128532;'; 
    mood.innerHTML = 'Confused';
  } 
  else if (value <= 80) {
    emoji.innerHTML = '&#128522;'; 
    mood.innerHTML = 'Happy';
  } 
  else if (value <= 100) {
    emoji.innerHTML = '&#128514;'; 
    mood.innerHTML = 'Joyful';
  } 
}
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


// Notify Me Button Alert
document.querySelector(".download-btn").addEventListener("click", function () {
  alert("Thank you for your interest! We’ll notify you when the app launches.");
});


// FAQ Dropdown Functionality
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all open FAQ items
    document.querySelectorAll('.faq-item').forEach((item) => {
      item.classList.remove('active');
    });

    // Toggle current FAQ item
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});

// FAQ Dropdown Functionality
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        // Toggle the "show" class
        item.classList.toggle("show");

        // Close other open FAQs
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("show");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => {
          // Toggle the "show" class
          item.classList.toggle("show");

          // Close other open FAQs
          faqItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove("show");
              }
          });
      });
  });
});
