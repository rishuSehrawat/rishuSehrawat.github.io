const initialRainDrops = ['initial-big-drop', 'initial-medium-drop', 'initial-small-drop', 'initial-extra-small-drop'];
const rainDrops = ['big-drop', 'medium-drop', 'small-drop', 'extra-small-drop'];
const projectPages = {
	'p1': 'http://to-do-list-app-js.s3-website.ap-south-1.amazonaws.com',
	'p2': 'http://the-newsapp.s3-website.ap-south-1.amazonaws.com',
	'p3': 'http://blogs-rishabh.s3-website.ap-south-1.amazonaws.com',
	'p4': 'https://github.com/rishuSehrawat/Website-Template',
	'p5': 'https://github.com/rishuSehrawat/Pig-Game',
	'p6': 'http://rishusehrawat.github.io'
}
const wrapper = document.querySelector('.wrapper');
const circle = document.querySelector('.circle');

const diagonalWidth = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
wrapper.style.width = diagonalWidth + 'px';
wrapper.style.height = diagonalWidth + 'px';
const getRandom = (min, max) => {
	return Math.floor((Math.random() * (max - min)) + min);
};

const makeItRain = () => {
	wrapper.insertAdjacentHTML('beforeend', `<div class="${rainDrops[getRandom(0, rainDrops.length)]}" style="left:${getRandom(0, wrapper.offsetWidth)}px;"></div>`);
	setTimeout(makeItRain, 100);
}
const removeChilds = () => {
	wrapper.removeChild(wrapper.childNodes[0]);
	setTimeout(removeChilds, 100);
}
const renderInitialDrops = () => {
	let initialDrops = ``;
	for (let i = 0; i <= 100; i++) {
		initialDrops += `<div class="${initialRainDrops[getRandom(0, initialRainDrops.length)]}" style="left: ${getRandom(0, wrapper.offsetWidth)}px;top: ${getRandom(0, wrapper.offsetHeight)}px"></div>`
	}
	wrapper.innerHTML = initialDrops;
}
setTimeout(renderInitialDrops, 700);

circle.style.top = `${getRandom(0, 100)}%`;
circle.style.left = `${getRandom(0, 100)}%`;

const loadingBars = document.querySelectorAll('.inner-bar');
const loadingAnimClasses = ['one', 'two', 'three', 'four', 'five'];
window.onscroll = () => {
	let windowLocation = window.pageYOffset + window.innerHeight;
	if (windowLocation > document.querySelector('.skills-wrapper').offsetTop) {
		loadingBars.forEach((item, index) => {
			if (!item.classList.contains(loadingAnimClasses[index])) {
				item.classList.add(loadingAnimClasses[index]);
			}
		})
	}
}

makeItRain();
setTimeout(removeChilds, 25000);
