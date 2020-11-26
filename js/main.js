// Select element function:
const selectElement = function (element) {
	return document.querySelector(element);
}
// Processed when clicking the bars icon:
let menuToggle = selectElement('.menu-toggle');
let iconBars = selectElement('.menu-toggle .fa-bars');
let iconTimes = selectElement('.menu-toggle .fa-times');
let bgGray = selectElement('.bg-gray');
let nav = selectElement('.nav');
function show() {
	bgGray.classList.add('bg-gray-show');
	nav.classList.add('nav-list-show');
	iconBars.style.display = 'none';
	iconTimes.style.display = 'block';
}
function hidden() {
	bgGray.classList.remove('bg-gray-show');
	nav.classList.remove('nav-list-show');
	iconBars.style.display = 'block';
	iconTimes.style.display = 'none';
}
iconBars.onclick = show;
bgGray.onclick = hidden;
iconTimes.onclick = hidden;

// Slide:
const responsive = {
	0: {
		items: 1
	},
	414: {
		items: 1
	},
	768: {
		items: 2
	},
	960: {
		items: 3
	}
}
let owlCarousel = selectElement('.owl-carousel');
$('.owl-carousel').owlCarousel({
	loop: true,
	autoplay: false,
	autoplayTimeout: 3000,
	dots: false,
	nav: true,
	navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
	responsive: responsive
});

// ScrollReveal:
window.sr = ScrollReveal();
sr.reveal('.animate-left', {
	origin: 'left',
	duration: 1000,
	distance: '25rem',
	delay: 300
});

sr.reveal('.animate-right', {
	origin: 'right',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-top', {
	origin: 'top',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

sr.reveal('.animate-bottom', {
	origin: 'bottom',
	duration: 1000,
	distance: '25rem',
	delay: 600
});

/* Click to scroll top */
$('.back-to-top').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 2000);
});