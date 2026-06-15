// ===========================
// DATA & CONSTANTS
// ===========================
const WHATSAPP_NUMBER = "5591992040482";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20acompanhamento%20para%20CNH.`;

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Eu tinha muito medo de dirigir, mas a paciência da Raissa foi fundamental. Hoje dirijo para o trabalho todos os dias!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "João Pedro",
    text: "Já tinha reprovado duas vezes antes de conhecer a instrutora. Com o método dela, passei de primeira na próxima tentativa.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ana Costa",
    text: "Aulas muito tranquilas, sem gritos e sem pressão. Recomendo para todos que têm ansiedade no trânsito.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
];

// ===========================
// HEADER — scroll + mobile menu
// ===========================
(function initHeader() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const toggleIconMenu = document.getElementById("icon-menu");
  const toggleIconX = document.getElementById("icon-x");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    toggleIconMenu.style.display = isOpen ? "none" : "block";
    toggleIconX.style.display = isOpen ? "block" : "none";
  });

  // Smooth scroll for all nav links (including mobile)
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      // Close mobile menu on click
      mobileNav.classList.remove("open");
      toggleIconMenu.style.display = "block";
      toggleIconX.style.display = "none";
    });
  });
})();

// ===========================
// TESTIMONIALS SLIDER
// ===========================
(function initSlider() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current].classList.add("active");
  }

  document.getElementById("btn-prev").addEventListener("click", () => goTo(current - 1));
  document.getElementById("btn-next").addEventListener("click", () => goTo(current + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => goTo(i));
  });

  // Auto-play
  setInterval(() => goTo(current + 1), 5000);
})();

// ===========================
// FAQ ACCORDION
// ===========================
(function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close all
      document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
      // Open clicked if it wasn't open
      if (!isOpen) item.classList.add("open");
    });
  });

  // Open first by default
  const first = document.querySelector(".faq-item");
  if (first) first.classList.add("open");
})();

// ===========================
// INTERSECTION OBSERVER (reveal animations)
// ===========================
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal, .reveal-right").forEach((el) => observer.observe(el));
})();

// ===========================
// SET CURRENT YEAR IN FOOTER
// ===========================
document.getElementById("current-year").textContent = new Date().getFullYear();

// ===========================
// SET ALL WHATSAPP LINKS
// ===========================
document.querySelectorAll("[data-wa-link]").forEach((el) => {
  el.setAttribute("href", WHATSAPP_LINK);
});
