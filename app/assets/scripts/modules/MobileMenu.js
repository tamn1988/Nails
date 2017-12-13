class MobileMenu{
	constructor(){
		this.menuIcon = document.querySelector('.site-header__menu-icon');
		this.navBar = document.querySelector('.primary-nav');
		this.events();

	}
	events(){
		this.menuIcon.addEventListener('click', this.toggleMenu.bind(this));
	}
	toggleMenu(){
			this.navBar.classList.toggle('primary-nav--visible');
			this.menuIcon.classList.toggle('site-header__menu-icon--close-x')
	}
}

export default MobileMenu;