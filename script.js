// Add this at the top of your script.js
const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    about: "About",
    attorneys: "Attorneys",
    testimonials: "Testimonials",
    contact: "Contact",

    // Hero section
    heroTitle: "Al Nasser Legal ",
    heroSubtitle:
      "Providing exceptional legal services with integrity and dedication for over 20 years.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",

    // Services section
    servicesTitle: "Our Legal Services",
    servicesSubtitle:
      "We offer comprehensive legal solutions tailored to your needs",
    criminalLaw: "Criminal Law",
    criminalDesc:
      "Expert defense for all criminal charges from misdemeanors to felonies.",
    familyLaw: "Family Law",
    familyDesc:
      "Divorce, child custody, and other family-related legal matters.",
    businessLaw: "Business Law",
    businessDesc: "Contracts, incorporations, and business dispute resolution.",
    realEstateLaw: "Real Estate Law",
    realEstateDesc:
      "Property transactions, disputes, and landlord-tenant issues.",
    personalInjury: "Personal Injury",
    personalInjuryDesc: "Compensation claims for accidents and injuries.",
    estatePlanning: "Estate Planning",
    estateDesc: "Wills, trusts, and probate services to protect your legacy.",

    // About section
    aboutTitle: "About Our Firm",
    aboutText1:
      "Founded in 2001, Justice Law Firm has been providing exceptional legal services to clients throughout the region. Our team of experienced attorneys is dedicated to achieving the best possible outcomes for our clients.",
    aboutText2:
      "We believe in a client-centered approach, ensuring that you receive personalized attention and clear communication throughout your case.",
    aboutListItem1: "20+ Years of Combined Experience",
    aboutListItem2: "500+ Cases Successfully Handled",
    aboutListItem3: "Personalized Legal Strategies",
    aboutListItem4: "Transparent Pricing",

    // Attorneys section
    attorneysTitle: "Our Attorneys",
    attorneysSubtitle: "Meet our team of experienced legal professionals",

    // Testimonials section
    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "What our clients say about our services",

    // Contact section
    contactTitle: "Contact Us",
    contactSubtitle:
      "Schedule a free consultation with one of our attorneys today.",
    address: "123 Legal Avenue, Suite 500<br>New York, NY 10001",
    phone: "(212) 555-1234",
    email: "info@justicelaw.com",
    hours: "Monday - Friday: 9am - 6pm<br>Saturday: By appointment",

    // Form
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    phonePlaceholder: "Your Phone",
    servicePlaceholder: "Select Service",
    messagePlaceholder: "Briefly describe your legal issue",
    submitButton: "Request Consultation",

    // Footer
    newsletterPlaceholder: "Your Email",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    attorneys: "المحامون",
    testimonials: "آراء العملاء",
    contact: "اتصل بنا",

    // Hero section
    heroTitle: "مكتب الناصر للاستشارات القانونية  ",
    heroSubtitle:
      "نقدم خدمات قانونية استثنائية بنزاهة وتفانٍ لأكثر من 20 عامًا.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الان",

    // Services section
    servicesTitle: "خدماتنا القانونية",
    servicesSubtitle: "نقدم حلولاً قانونية شاملة مصممة خصيصًا لاحتياجاتك",
    criminalLaw: "القانون الجنائي",
    criminalDesc: "دفاع خبير لجميع التهم الجنائية من الجنح إلى الجنايات.",
    familyLaw: "قانون الأسرة",
    familyDesc:
      "قضايا الطلاق وحضانة الأطفال وغيرها من الأمور القانونية المتعلقة بالأسرة.",
    businessLaw: "قانون الأعمال",
    businessDesc: "العقود والتأسيسات وتسوية النزاعات التجارية.",
    realEstateLaw: "قانون العقارات",
    realEstateDesc: "معاملات الملكية والنزاعات وقضايا المالك والمستأجر.",
    personalInjury: "الإصابات الشخصية",
    personalInjuryDesc: "مطالبات التعويض عن الحوادث والإصابات.",
    estatePlanning: "التخطيط العقاري",
    estateDesc: "الوصايا والصناديق والخدمات القضائية لحماية إرثك.",

    // About section
    aboutTitle: "عن شركتنا",
    aboutText1:
      "تأسست شركة جستس للمحاماة عام 2001، وقد قدمت خدمات قانونية استثنائية للعملاء في جميع أنحاء المنطقة. فريقنا من المحامين ذوي الخبرة مكرس لتحقيق أفضل النتائج الممكنة لعملائنا.",
    aboutText2:
      "نؤمن بنهج يركز على العميل، مما يضمن حصولك على اهتمام شخصي وتواصل واضح طوال قضيتك.",
    aboutListItem1: "20+ سنة من الخبرة المشتركة",
    aboutListItem2: "500+ قضية تم التعامل معها بنجاح",
    aboutListItem3: "استراتيجيات قانونية شخصية",
    aboutListItem4: "تسعير شفاف",

    // Attorneys section
    attorneysTitle: "محامونا",
    attorneysSubtitle: "تعرف على فريقنا من المحامين المحترفين ذوي الخبرة",

    // Testimonials section
    testimonialsTitle: "آراء العملاء",
    testimonialsSubtitle: "ما يقوله عملاؤنا عن خدماتنا",

    // Contact section
    contactTitle: "اتصل بنا",
    contactSubtitle: "حدد موعدًا لاستشارة مجانية مع أحد محامينا اليوم.",
    address: "123 شارع ليغال، جناح 500<br>نيويورك، نيويورك 10001",
    phone: "(212) 555-1234",
    email: "info@justicelaw.com",
    hours: "الإثنين - الجمعة: 9 صباحًا - 6 مساءً<br>السبت: حسب الموعد",

    // Form
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    phonePlaceholder: "هاتفك",
    servicePlaceholder: "اختر الخدمة",
    messagePlaceholder: "صف بإيجاز مشكلتك القانونية",
    submitButton: "طلب استشارة",

    // Footer
    newsletterPlaceholder: "بريدك الإلكتروني",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Language Switching Logic
  const langSwitcher = document.getElementById("langSwitcher");
  const htmlElement = document.documentElement;
  const langText = document.querySelector(".lang-text");

  // Check for saved language preference or use browser language
  const savedLang = localStorage.getItem("preferredLang");
  const browserLang = navigator.language || navigator.userLanguage;

  // Set initial language
  if (savedLang === "ar" || (!savedLang && browserLang.startsWith("ar"))) {
    setArabic();
  } else {
    setEnglish();
  }

  // Language switcher click handler
  langSwitcher.addEventListener("click", function () {
    if (htmlElement.getAttribute("dir") === "rtl") {
      setEnglish();
    } else {
      setArabic();
    }
  });

  function setArabic() {
    htmlElement.setAttribute("dir", "rtl");
    htmlElement.setAttribute("lang", "ar");
    langText.textContent = "English";
    localStorage.setItem("preferredLang", "ar");
    updateTextContent("ar");
  }

  function setEnglish() {
    htmlElement.removeAttribute("dir");
    htmlElement.setAttribute("lang", "en");
    langText.textContent = "العربية";
    localStorage.setItem("preferredLang", "en");
    updateTextContent("en");
  }

  function updateTextContent(lang) {
    const langData = translations[lang];

    // Navigation
    
    document.querySelectorAll(".navbar a")[0].textContent = langData.home;
    document.querySelectorAll(".navbar a")[1].textContent = langData.services;
    document.querySelectorAll(".navbar a")[2].textContent = langData.about;
    document.querySelectorAll(".navbar a")[3].textContent = langData.attorneys;
    document.querySelectorAll(".navbar a")[4].textContent =
      langData.testimonials;
    document.querySelectorAll(".navbar a")[5].textContent = langData.contact;

    // Hero section
    document.querySelector(".home-content h1").textContent = langData.heroTitle;
    document.querySelector(".home-content p").textContent =
      langData.heroSubtitle;
      document.querySelector(".whatsapp-btn span").textContent =
        langData.ctaButton;
      document.querySelector(".call-btn span").textContent =
        langData.callButton;

    // Services section
    document.querySelector(".services .section-title").textContent =
      langData.servicesTitle;
    document.querySelector(".services .section-subtitle").textContent =
      langData.servicesSubtitle;

    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards[0].querySelector("h3").textContent = langData.criminalLaw;
    serviceCards[0].querySelector("p").textContent = langData.criminalDesc;
    serviceCards[1].querySelector("h3").textContent = langData.familyLaw;
    serviceCards[1].querySelector("p").textContent = langData.familyDesc;
    serviceCards[2].querySelector("h3").textContent = langData.businessLaw;
    serviceCards[2].querySelector("p").textContent = langData.businessDesc;
    serviceCards[3].querySelector("h3").textContent = langData.realEstateLaw;
    serviceCards[3].querySelector("p").textContent = langData.realEstateDesc;
    serviceCards[4].querySelector("h3").textContent = langData.personalInjury;
    serviceCards[4].querySelector("p").textContent =
      langData.personalInjuryDesc;
    serviceCards[5].querySelector("h3").textContent = langData.estatePlanning;
    serviceCards[5].querySelector("p").textContent = langData.estateDesc;

    // About section
    document.querySelector(".about .section-title").textContent =
      langData.aboutTitle;
    const aboutParagraphs = document.querySelectorAll(".about-text p");
    aboutParagraphs[0].textContent = langData.aboutText1;
    aboutParagraphs[1].textContent = langData.aboutText2;

    const aboutListItems = document.querySelectorAll(".about-list li");
    aboutListItems[0].textContent = langData.aboutListItem1;
    aboutListItems[1].textContent = langData.aboutListItem2;
    aboutListItems[2].textContent = langData.aboutListItem3;
    aboutListItems[3].textContent = langData.aboutListItem4;

    // Attorneys section
    document.querySelector(".attorneys .section-title").textContent =
      langData.attorneysTitle;
    document.querySelector(".attorneys .section-subtitle").textContent =
      langData.attorneysSubtitle;

    // Testimonials section
    document.querySelector(".testimonials .section-title").textContent =
      langData.testimonialsTitle;
    document.querySelector(".testimonials .section-subtitle").textContent =
      langData.testimonialsSubtitle;



    // Footer newsletter
    document.querySelector(".newsletter-form input").placeholder =
      langData.newsletterPlaceholder;
  }

  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuBtn.querySelector("i").classList.toggle("fa-times");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuBtn.querySelector("i").classList.remove("fa-times");
    });
  });

  // Sticky Header on Scroll
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
    });

    testimonials[index].classList.add("active");
  }

  prevBtn.addEventListener("click", function () {
    currentTestimonial--;
    if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1;
    }
    showTestimonial(currentTestimonial);
  });

  nextBtn.addEventListener("click", function () {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  });

  // Auto-rotate testimonials
  let testimonialInterval = setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  }, 5000);

  // Pause auto-rotation on hover
  const slider = document.querySelector(".testimonials-slider");
  slider.addEventListener("mouseenter", () => {
    clearInterval(testimonialInterval);
  });

  slider.addEventListener("mouseleave", () => {
    testimonialInterval = setInterval(() => {
      currentTestimonial++;
      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }
      showTestimonial(currentTestimonial);
    }, 5000);
  });

 
  // Animation on Scroll
  function animateOnScroll() {
    const elements = document.querySelectorAll(
      ".service-card, .attorney-card, .about-image, .contact-form"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Set initial state for animated elements
  document
    .querySelectorAll(
      ".service-card, .attorney-card, .about-image, .contact-form"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(30px)";
      element.style.transition = "all 0.5s ease";
    });

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);
});
