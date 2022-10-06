const topBtn = document.querySelector('.scroll-to-top');
const scrollBar = document.querySelector('.scroll-bar');
let root = document.documentElement;

const handleScrollBar = () => {
	const scroll = window.scrollY;
	const scrollLeft = document.body.scrollHeight - window.innerHeight;
	const newWidth = Math.floor((scroll / scrollLeft) * 100);
	root.style.setProperty('--scrol-width', `${newWidth}%`);
	if (newWidth > 30) {
		topBtn.classList.add('active');
	} else {
		topBtn.classList.remove('active');
	}
};
const backToTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth',
	});
};

window.addEventListener('scroll', handleScrollBar);
topBtn.addEventListener('click',backToTop);
