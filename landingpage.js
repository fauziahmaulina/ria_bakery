function toggleMenu(el) {
    const nav = document.getElementById('main-nav');
    const overlay = document.getElementById('overlay');
    nav.classList.toggle('active');
    overlay.classList.toggle('open');
    el.classList.toggle('toggle');
  
    if (nav.classList.contains('active')) {
      document.addEventListener('click', closeOutside);
    } else {
      document.removeEventListener('click', closeOutside);
    }
  }
  
  function closeMenu() {
    document.getElementById('main-nav').classList.remove('active');
    document.getElementById('overlay').classList.remove('open');
    document.querySelector('.burger').classList.remove('toggle');
    document.removeEventListener('click', closeOutside);
  }
  
  function closeOutside(e) {
    const nav = document.getElementById('main-nav');
    const burger = document.querySelector('.burger');
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  }

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  let pos = 0;
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-track .item');
  const itemWidth = items[0].offsetWidth
  
  function updateCarousel() {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${pos * itemWidth}px)`;
  }
  
  // Tombol
  document.getElementById("nextbutton").addEventListener("click", () => {
    if (pos < items.length - 1) pos++;
    else pos = 0;
    updateCarousel();
  });
  
  document.getElementById("prevbutton").addEventListener("click", () => {
    if (pos > 0) pos--;
    else pos = items.length - 1;
    updateCarousel();
  });

// Mendapatkan elemen container
var animationContainer = document.getElementById('lottie-animation');

// Memuat file JSON Lottie
var animation = lottie.loadAnimation({
  
  container: animationContainer, // Tempat untuk memuat animasi
  renderer: 'svg', // Gunakan SVG sebagai renderer
  loop: true, // Ulangi animasi
  autoplay: true, // Langsung mulai animasi
  path: 'img/contact.json' // Ganti dengan path ke file JSON animasi Lottie
});

console.log('Animation Loaded');



  