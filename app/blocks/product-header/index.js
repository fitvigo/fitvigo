import $ from 'jquery';

class ProductHeader {
	constructor() {
		this.selectors = {
			headerWrapper: '.js-product-header',
			header: '.js-inline-header',
			tablet: '.only-tablet'
		};

		this.setHeaderSize();
		$(window).on('resize', this.setHeaderSize.bind(this));
	}

	setHeaderSize() {
		if (!$(this.selectors.tablet).is(':visible')) {
			return;
		}

		const wrapper = $(this.selectors.headerWrapper);
		const header = $(this.selectors.header);

		wrapper.css({ fontSize: '42px' });

		if (wrapper.width() < header.width()) {
			wrapper.removeAttr('style');
		}
	}
}

export default new ProductHeader();
