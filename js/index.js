const topButton = document.getElementById('topBtn');

const scrollFunction = () => {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		topButton.style.visibility = 'visible';
		topButton.style.opacity = '1';
		topButton.style.transitionDelay = '0s';
	} else {
		topButton.style.visibility = 'hidden';
		topButton.style.opacity = '0';
		topButton.style.webkitTransition =
			'visibility 0s linear 0.5s, opacity 0.5s linear';
	}
};

const topFunction = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

window.onscroll = () => {
	scrollFunction();
};

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
	nav.classList.toggle('nav--visible');
});
