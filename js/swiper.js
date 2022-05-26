'use strict';

const arrivalsSlider = document.querrySelector('.arrivals-slider__body');

if (arrivalsSlider) {
	const swiper = new Swiper('.arrivals-slider__body', {
		// Optional parameters
		loop: false,
		watchOverflow: true,
		observer: true,
		observeParents: true,
		autoHeight: true,
		speed: 800,

		zoom: {
			// Макимальное увеличение
			maxRatio: 1.5,
			// Минимальное увеличение
			minRatio: 1,
		},

		// Пагинация
		pagination: {
			el: '.arrivals-slider__progressbar',
			type: 'progressbar',
		},

		// Navigation arrows
		navigation: {
			prevEl: '.arrivals-slider__button_prev',
			nextEl: '.arrivals-slider__button_next',
		},

		// Брейкпоинты

		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 2.5,
				spaceBetween: 20,
			},
			1170: {
				slidesPerView: 3.2,
				spaceBetween: 30,
			},
			1440: {
				slidesPerView: 3.2,
				spaceBetween: 40,
			},
		},
	});
}
