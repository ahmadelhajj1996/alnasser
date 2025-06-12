const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    attorneys: "Attorneys",
    testimonials: "Testimonials",
    contact: "Contact",

    heroTitle: "Al Nasser Legal ",
    heroSubtitle:
      "Providing exceptional legal services with integrity and dedication for over 20 years.",
    ctaButton: "Free Consultation",
    callButton: "Call Now",

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

    aboutTitle: "About Our Firm",
    aboutText1:
      "Founded in 2001, Justice Law Firm has been providing exceptional legal services to clients throughout the region. Our team of experienced attorneys is dedicated to achieving the best possible outcomes for our clients.",
    aboutText2:
      "We believe in a client-centered approach, ensuring that you receive personalized attention and clear communication throughout your case.",
    aboutListItem1: "20+ Years of Combined Experience",
    aboutListItem2: "500+ Cases Successfully Handled",
    aboutListItem3: "Personalized Legal Strategies",
    aboutListItem4: "Transparent Pricing",

    attorneysTitle: "Our Attorneys",
    attorneysSubtitle: "Meet our team of experienced legal professionals",

    testimonialsTitle: "Client Testimonials",
    testimonialsSubtitle: "What our clients say about our services",

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

    newsletterPlaceholder: "Your Email",
  },
  ar: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    attorneys: "المحامون",
    testimonials: "آراء العملاء",
    contact: "اتصل بنا",

    heroTitle: "مكتب الناصر للاستشارات القانونية  ",
    heroSubtitle:
      "نقدم خدمات قانونية استثنائية بنزاهة وتفانٍ لأكثر من 20 عامًا.",
    ctaButton: "استشارة مجانية",
    callButton: "اتصل الان",

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

    aboutTitle: "عن شركتنا",
    aboutText1:
      "تأسست شركة جستس للمحاماة عام 2001، وقد قدمت خدمات قانونية استثنائية للعملاء في جميع أنحاء المنطقة. فريقنا من المحامين ذوي الخبرة مكرس لتحقيق أفضل النتائج الممكنة لعملائنا.",
    aboutText2:
      "نؤمن بنهج يركز على العميل، مما يضمن حصولك على اهتمام شخصي وتواصل واضح طوال قضيتك.",
    aboutListItem1: "20+ سنة من الخبرة المشتركة",
    aboutListItem2: "500+ قضية تم التعامل معها بنجاح",
    aboutListItem3: "استراتيجيات قانونية شخصية",
    aboutListItem4: "تسعير شفاف",

    attorneysTitle: "محامونا",
    attorneysSubtitle: "تعرف على فريقنا من المحامين المحترفين ذوي الخبرة",

    testimonialsTitle: "آراء العملاء",
    testimonialsSubtitle: "ما يقوله عملاؤنا عن خدماتنا",

    contactTitle: "اتصل بنا",
    contactSubtitle: "حدد موعدًا لاستشارة مجانية مع أحد محامينا اليوم.",
    address: "123 شارع ليغال، جناح 500<br>نيويورك، نيويورك 10001",
    phone: "(212) 555-1234",
    email: "info@justicelaw.com",
    hours: "الإثنين - الجمعة: 9 صباحًا - 6 مساءً<br>السبت: حسب الموعد",

    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    phonePlaceholder: "هاتفك",
    servicePlaceholder: "اختر الخدمة",
    messagePlaceholder: "صف بإيجاز مشكلتك القانونية",
    submitButton: "طلب استشارة",

    newsletterPlaceholder: "بريدك الإلكتروني",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const langSwitcher = document.getElementById("langSwitcher");
  const htmlElement = document.documentElement;
  const langText = document.querySelector(".lang-text");

  const savedLang = localStorage.getItem("preferredLang");
  const browserLang = navigator.language || navigator.userLanguage;

  if (savedLang === "ar" || (!savedLang && browserLang.startsWith("ar"))) {
    setArabic();
  } else {
    setEnglish();
  }

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

    
    document.querySelectorAll(".navbar a")[0].textContent = langData.home;
    document.querySelectorAll(".navbar a")[1].textContent = langData.services;
    document.querySelectorAll(".navbar a")[2].textContent = langData.about;
    document.querySelectorAll(".navbar a")[3].textContent = langData.attorneys;
    document.querySelectorAll(".navbar a")[4].textContent =
      langData.testimonials;
    document.querySelectorAll(".navbar a")[5].textContent = langData.contact;

    document.querySelector(".home-content h1").textContent = langData.heroTitle;
    document.querySelector(".home-content p").textContent =
      langData.heroSubtitle;
      document.querySelector(".whatsapp-btn span").textContent =
        langData.ctaButton;
      document.querySelector(".call-btn span").textContent =
        langData.callButton;

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


    document.querySelector(".testimonials .section-title").textContent =
      langData.testimonialsTitle;
    document.querySelector(".testimonials .section-subtitle").textContent =
      langData.testimonialsSubtitle;



    document.querySelector(".newsletter-form input").placeholder =
      langData.newsletterPlaceholder;
  }

  const menuBtn = document.querySelector(".menu-btn");
  const navbar = document.querySelector(".navbar");

  menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuBtn.querySelector("i").classList.toggle("fa-times");
  });

  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuBtn.querySelector("i").classList.remove("fa-times");
    });
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

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

  let testimonialInterval = setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
  }, 5000);

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
