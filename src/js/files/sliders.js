/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Thumbs } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.confidence__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.confidence__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/



			// Брейкпоінти
			breakpoints: {
				480: {
					slidesPerView: 2,
					autoHeight: true,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 5,
				},
				1335: {
					slidesPerView: 6,
					spaceBetween: 32,
					// Кнопки "вліво/вправо"
					navigation: {
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					},
				},
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.related__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.related__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			// Брейкпоінти
			breakpoints: {
				560: {
					slidesPerView: 2,
					autoHeight: true,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
				1335: {
					slidesPerView: 4,
					spaceBetween: 32,

				},
			},

			navigation: {
				prevEl: '.related__nav .prev',
				nextEl: '.related__nav .next',
			},

			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.featured-service__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const featuredThumbs = new Swiper('.featured-service__slider_thumbs', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 5,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			// Події
			on: {

			}
		});

		new Swiper('.featured-service__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			thumbs: {
				swiper: featuredThumbs
			},

			// Події
			on: {

			}
		});
	}
	const serviceItems = document.querySelectorAll('.item-service');
	if (serviceItems.length) { // Вказуємо склас потрібного слайдера
		serviceItems.forEach(service => {
			const serviceSlider = service.querySelector('.item-service__slider');
			const serviceSliderThumbs = service.querySelector('.item-service__slider_thumbs');
			if (serviceSlider && serviceSliderThumbs) {
				const serviceItemThumbs = new Swiper(serviceSliderThumbs, {
					modules: [Navigation],
					observer: true,
					observeParents: true,
					slidesPerView: 4,
					spaceBetween: 5,
					//autoHeight: true,
					speed: 800,

					//touchRatio: 0,
					//simulateTouch: false,
					loop: true,
					//preloadImages: false,
					lazy: true,
				});
				new Swiper(serviceSlider, { // Вказуємо склас потрібного слайдера
					// Підключаємо модулі слайдера
					// для конкретного випадку
					modules: [Navigation, Thumbs],
					observer: true,
					observeParents: true,
					slidesPerView: 1,
					spaceBetween: 20,
					//autoHeight: true,
					speed: 800,

					//touchRatio: 0,
					//simulateTouch: false,
					loop: true,
					//preloadImages: false,
					lazy: true,
					thumbs: {
						swiper: serviceItemThumbs
					},
				});
			}
		})
	}
	if (document.querySelector('.product__slider') && document.querySelector('.product__slider_thumbs')) {
		const productThumbs = new Swiper('.product__slider_thumbs', {
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 5,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
		});
		new Swiper('.product__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,
			thumbs: {
				swiper: productThumbs
			},
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});