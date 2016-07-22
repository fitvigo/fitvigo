import $ from 'jquery';

class Header {
	constructor() {
		this.selectors = {
			show: '.js-show-mobile-nav',
			hide: '.js-hide-mobile-nav',
			nav: '.js-nav'
		};

		this.classes = {
			iconHidden: 'header__mobile-nav_hidden',
			navVisible: 'header__nav_visible'
		};

		$(this.selectors.show).on('click', this.showMobileNav.bind(this));
		$(this.selectors.hide).on('click', this.hideMobileNav.bind(this));
	}

	showMobileNav() {
		console.log('test');
		$(this.selectors.nav).addClass(this.classes.navVisible);
		$(this.selectors.show).addClass(this.classes.iconHidden);
		$(this.selectors.hide).removeClass(this.classes.iconHidden);
	}

	hideMobileNav() {
		$(this.selectors.nav).removeClass(this.classes.navVisible);
		$(this.selectors.show).removeClass(this.classes.iconHidden);
		$(this.selectors.hide).addClass(this.classes.iconHidden);
	}
}

export default Header;
