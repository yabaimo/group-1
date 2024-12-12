document.getElementById('loginBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('log-in');
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

function validateForm() {
  document.getElementById('usernameError').innerText = '';
  document.getElementById('passwordError').innerText = '';


  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var valid = true;

  if (username === '') {
      document.getElementById('usernameError').innerText = 'Username is required.';
      valid = false;
  }

  if (password === '') {
      document.getElementById('passwordError').innerText = 'Password is required.';
      valid = false;
  }

  if (valid) {
      document.getElementById('loginFormContainer').style.display = 'none';
  }

  return valid;
}
function validateRegistrationForm() {
  const email = document.getElementById("regEmail").value;
  const username = document.getElementById("regUsername").value;
  const bday = document.getElementById()
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  


  document.getElementById("emailError").innerText = "";
  document.getElementById("regUsernameError").innerText = "";
  document.getElementById("regPasswordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  let isValid = true;

  if (!email.includes("@")) {
      document.getElementById("emailError").innerText = "Please enter a valid email.";
      isValid = false;
  }


  if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
      isValid = false;
  }

  return isValid;
}
function showLoginForm() {
  document.getElementById("loginFormContainer").style.display = "block";
  document.getElementById("registrationFormContainer").style.display = "none";
}

function showRegistrationForm() {
  document.getElementById("loginFormContainer").style.display = "none";
  document.getElementById("registrationFormContainer").style.display = "block";
}




let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const texts = document.querySelectorAll('.carousel-text'); 

images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});
texts.forEach((text, index) => {
    text.style.display = index === 0 ? 'block' : 'none';
});

function changeImage(direction) {
    images[currentIndex].style.display = 'none';
    texts[currentIndex].style.display = 'none';
    
    currentIndex = (currentIndex + direction + images.length) % images.length;

    // Show the new image and its corresponding text
    images[currentIndex].style.display = 'block';
    texts[currentIndex].style.display = 'block';
}

const sections = document.querySelectorAll('section');


function showSection(sectionId) {
    sections.forEach((section) => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.querySelector('a[href="#home"]').addEventListener('click', () => showSection('home'));
document.querySelector('a[href="#about"]').addEventListener('click', () => showSection('about'));
document.querySelector('a[href="#menu"]').addEventListener('click', () => showSection('menu'));
document.querySelector('a[href="#pages"]').addEventListener('click', () => showSection('pages'));
document.querySelector('a[href="#contact"]').addEventListener('click', () => showSection('contact'));

//navigation background when active
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));

    link.classList.add('active');
  });
});

// hamburger menu
document.getElementById("hamburger-menu").addEventListener("click", function () {
  const navMenu = document.querySelector("nav ul");
  navMenu.classList.toggle("active");
});

// try
const navbar = document.querySelector('nav');

if (navbar){}
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled'); 
      } else {
          navbar.classList.remove('scrolled'); 
      }
  });







