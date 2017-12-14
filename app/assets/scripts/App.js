import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.info-item'), '80%');
new RevealOnScroll(document.querySelectorAll('.gallery-item'), '80%');


