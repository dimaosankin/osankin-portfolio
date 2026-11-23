'use strict';

// Тексти інтерфейсу для англійської та української мов
const translations = {
  en: {
    navAbout: 'About', navSkills: 'Skills', navWork: 'Work', navContact: 'Contact', letsTalk: "Let's talk",
    available: 'Available for remote opportunities & projects', intro: 'INTRODUCTION',
    heroLine1: 'Building digital', heroLine2: 'experiences.',
    heroDesc: "I'm Dmytro, a frontend developer focused on clean code, thoughtful interfaces and high-performing e-commerce experiences.",
    exploreWork: 'Explore my work', getInTouch: 'Get in touch', downloadCV: 'Download CV', scroll: 'SCROLL TO EXPLORE ↓',
    aboutLabel: 'ABOUT ME', aboutTitle: 'Thoughtful code.<br>Practical interfaces.',
    aboutP1: 'I build responsive, accessible and maintainable interfaces that feel great to use.',
    aboutP2: 'My background includes long-term work with Drupal-powered websites, e-commerce storefronts, interactive components and frontend performance optimization. I enjoy turning complex requirements into clear, reliable experiences.',
    years: 'years in frontend development', focus: 'development focus', remote: 'remote collaboration',
    skillsLabel: 'EXPERTISE', skillsTitle: 'Technologies I work with.', skillsDesc: 'A practical toolkit for building modern, dependable websites.',
    coreTitle: 'Core frontend', cmsTitle: 'CMS & e-commerce', toolsTitle: 'Workflow & libraries',
    workLabel: 'SELECTED WORK', workTitle: 'Selected projects.', workDesc: 'A selection of projects I worked on in e-commerce, insurance, luxury brands and hospitality.',
    project1: 'Frontend development for a Sylius e-commerce project.',
    project2: 'Frontend development for a Sylius storefront.',
    navExperience: 'Experience', experienceLabel: 'CAREER', experienceTitle: "Where I've worked.", experienceIntro: 'Frontend development across agencies, freelance projects and e-commerce teams since 2008.',
    dateStarlit: 'Sep 2025 — Present', dateFreelance: 'Jan — Sep 2025', dateAnyfor: 'Sep — Dec 2024', dateAdyax: 'Dec 2014 — Jun 2024', dateZfort: 'Aug 2012 — Dec 2014', dateRonis: 'Sep 2011 — Aug 2012', dateW3: 'Aug 2008 — Sep 2011',
    jobStarlit: 'Sylius frontend development, custom JavaScript, jQuery plugins, maintenance and refactoring.', jobFreelance: 'Drupal 11 theming, HTML/CSS/JS development, jQuery integrations and documentation.', jobAnyfor: 'Drupal 10 templates, interactive components, maintenance and technical documentation.', jobAdyax: 'Drupal 7/8/9 frontend development, template customization, custom JavaScript and refactoring.', jobZfort: 'Magento and WordPress templates, e-commerce development and code review.', jobRonis: 'E-commerce interfaces, HTML emails, Google Ads creatives and documentation.', jobW3: 'Websites, HTML/CSS templates, email templates and maintenance.',
    educationLabel: 'EDUCATION', educationTitle: 'Education.', education1Title: 'Kharkiv National University of Radioelectronics', education1Desc: 'Information Management Systems and Technologies', education2Title: 'Simon Kuznets Kharkiv National University of Economics', education2Desc: 'Management',
    project3: 'Drupal 10 frontend templates and interface maintenance.', project4: 'Frontend development for the Ruinart website during my time at Adyax / SMILE.', project5: 'Frontend development for the Ruinart website during my time at Adyax / SMILE.', project6: 'Frontend development and interface maintenance for the Adagio aparthotel network website at Adyax / SMILE.',
    contactLabel: "LET'S CONNECT", contactKicker: 'HAVE A PROJECT OR OPPORTUNITY?',
    contactTitle: "Let's build<br><span class=\"gradient-text\">something great.</span>",
    contactDesc: "I'm open to remote frontend roles and freelance collaborations. Reach out and let's discuss what you're building.",
    emailMe: 'Email me', backTop: 'BACK TO TOP ↑'
  },
  uk: {
    navAbout: 'Про мене', navSkills: 'Навички', navWork: 'Проєкти', navContact: 'Контакти', letsTalk: 'Зв’язатися',
    available: 'Відкритий до віддаленої роботи та проєктів', intro: 'ЗНАЙОМСТВО',
    heroLine1: 'Створюю цифрові', heroLine2: 'враження.',
    heroDesc: 'Я Дмитро, frontend-розробник. Створюю якісні інтерфейси, пишу зрозумілий код і працюю над швидкими e-commerce рішеннями.',
    exploreWork: 'Переглянути проєкти', getInTouch: 'Написати мені', downloadCV: 'Завантажити CV', scroll: 'ГОРТАЙТЕ ВНИЗ ↓',
    aboutLabel: 'ПРО МЕНЕ', aboutTitle: 'Продуманий код.<br>Зручні інтерфейси.',
    aboutP1: 'Розробляю адаптивні, доступні та зручні в підтримці інтерфейси.',
    aboutP2: 'Маю багаторічний досвід роботи із сайтами на Drupal, інтернет-магазинами, інтерактивними компонентами та оптимізацією швидкодії. Люблю перетворювати складні вимоги на прості й надійні рішення.',
    years: 'років у frontend-розробці', focus: 'основний напрям', remote: 'віддалена співпраця',
    skillsLabel: 'ЕКСПЕРТИЗА', skillsTitle: 'Технології, з якими працюю.', skillsDesc: 'Практичний набір технологій для сучасних і надійних сайтів.',
    coreTitle: 'Frontend-розробка', cmsTitle: 'CMS та e-commerce', toolsTitle: 'Інструменти та бібліотеки',
    workLabel: 'ОБРАНІ ПРОЄКТИ', workTitle: 'Проєкти, над якими я працював.', workDesc: 'Добірка проєктів, над якими я працював: інтернет-магазини, страхування, преміальні бренди та апарт-готелі.',
    project1: 'Розробка та підтримка інтерфейсів інтернет-магазину на Sylius.',
    project2: 'Розробка інтерфейсів інтернет-магазину на Sylius.',
    navExperience: 'Досвід', experienceLabel: 'КАР’ЄРА', experienceTitle: 'Де я працював.', experienceIntro: 'Frontend-розробка в агенціях, на фрилансі та в e-commerce командах із 2008 року.',
    dateStarlit: 'Вер 2025 — дотепер', dateFreelance: 'Січ — вер 2025', dateAnyfor: 'Вер — гру 2024', dateAdyax: 'Гру 2014 — чер 2024', dateZfort: 'Сер 2012 — гру 2014', dateRonis: 'Вер 2011 — сер 2012', dateW3: 'Сер 2008 — вер 2011',
    jobStarlit: 'Розробка інтерфейсів для проєктів на Sylius, JavaScript-функціональності, інтеграція jQuery-плагінів, підтримка та рефакторинг коду.', jobFreelance: 'Розробка та налаштування тем Drupal 11, HTML/CSS/JS-верстка, інтеграція jQuery-плагінів і технічна документація.', jobAnyfor: 'Розробка шаблонів для Drupal 10, інтерактивних компонентів, підтримка сайтів і технічна документація.', jobAdyax: 'Frontend-розробка для Drupal 7/8/9, налаштування шаблонів, розробка JavaScript-функціональності та рефакторинг коду.', jobZfort: 'Шаблони Magento та WordPress, e-commerce розробка й перевірка коду.', jobRonis: 'Інтерфейси інтернет-магазинів, HTML-листи, рекламні матеріали Google Ads і технічна документація.', jobW3: 'Розробка вебсайтів, HTML/CSS-шаблонів і шаблонів електронних листів, підтримка сайтів.',
    educationLabel: 'ОСВІТА', educationTitle: 'Освіта.', education1Title: 'Харківський національний університет радіоелектроніки', education1Desc: 'Інформаційні управляючі системи та технології', education2Title: 'Харківський національний економічний університет імені Семена Кузнеця', education2Desc: 'Менеджмент',
    project3: 'Розробка шаблонів Drupal 10 і підтримка інтерфейсів сайту.', project4: 'Frontend-розробка для сайту Ruinart під час роботи в Adyax / SMILE.', project5: 'Frontend-розробка для сайту Ruinart під час роботи в Adyax / SMILE.', project6: 'Розробка та підтримка інтерфейсу сайту мережі апарт-готелів Adagio під час роботи в Adyax / SMILE.',
    contactLabel: 'КОНТАКТИ', contactKicker: 'МАЄТЕ ПРОЄКТ АБО ПРОПОЗИЦІЮ?',
    contactTitle: 'Створімо разом<br><span class="gradient-text">щось особливе.</span>',
    contactDesc: 'Розглядаю віддалені вакансії та фриланс-проєкти. Напишіть мені — обговоримо вашу ідею.',
    emailMe: 'Написати листа', backTop: 'НАГОРУ ↑'
  }
};

// Безпечне зчитування збереженої мови
let currentLang = 'en';
try {
  currentLang = localStorage.getItem('portfolio-language') === 'uk' ? 'uk' : 'en';
} catch (error) {
  currentLang = 'en';
}

// Оновлення перекладів та активної кнопки мови
function setLanguage(lang) {
  currentLang = lang === 'uk' ? 'uk' : 'en';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(translations[currentLang], key)) {
      // HTML використовується лише для власних статичних рядків перекладу
      element.innerHTML = translations[currentLang][key];
    }
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === currentLang));
  });
  document.querySelector('.menu-toggle')?.setAttribute('aria-label', currentLang === 'uk' ? 'Відкрити меню' : 'Open menu');
  try { localStorage.setItem('portfolio-language', currentLang); } catch (error) { /* Сайт працює без сховища */ }
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
setLanguage(currentLang);

// Відкриття та закриття мобільного меню
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.nav');
function closeMenu() {
  siteNav.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', currentLang === 'uk' ? 'Відкрити меню' : 'Open menu');
}
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', currentLang === 'uk' ? (isOpen ? 'Закрити меню' : 'Відкрити меню') : (isOpen ? 'Close menu' : 'Open menu'));
});
siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', (event) => {
  if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

// Плавна поява блоків під час прокручування
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

// Автоматичне оновлення року у футері
document.getElementById('year').textContent = new Date().getFullYear();


// Змінюємо вигляд шапки після початку прокручування сторінки
const siteHeader = document.querySelector('.header');
function updateHeader() {
  siteHeader?.classList.toggle('is-scrolled', window.scrollY > 32);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();


// Точне прокручування до секцій без смужки попереднього блоку під sticky header.
// Висоту шапки визначаємо динамічно, щоб врахувати мобільну версію.
function scrollToSection(hash, behavior = 'smooth') {
  if (!hash || hash === '#') return;
  const id = decodeURIComponent(hash.slice(1));
  const target = document.getElementById(id);
  if (!target) return;

  const headerHeight = siteHeader?.getBoundingClientRect().height || 0;
  const top = id === 'top' ? 0 : Math.max(0, window.scrollY + target.getBoundingClientRect().top - headerHeight);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: reduceMotion ? 'instant' : behavior });
}

// Обробляємо внутрішні посилання, зокрема кнопку «Нагору» у футері.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#' || !document.getElementById(hash.slice(1))) return;
    event.preventDefault();
    closeMenu();
    if (window.location.hash !== hash) history.pushState(null, '', hash);
    scrollToSection(hash);
  });
});

// Повертаємо правильну позицію після навігації назад/вперед та прямого відкриття URL з #.
window.addEventListener('popstate', () => {
  if (window.location.hash) scrollToSection(window.location.hash, 'instant');
  else window.scrollTo({ top: 0, behavior: 'instant' });
});
window.addEventListener('load', () => {
  if (window.location.hash) scrollToSection(window.location.hash, 'instant');
});
