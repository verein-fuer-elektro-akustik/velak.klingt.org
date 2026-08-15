'use strict';

(() => {
	function initArtistList(li) {
		const container = li.querySelector('div.artists');
		if (!container) return;
		const ul = container.querySelector('ul');
		if (!ul) return;

		const containerRect = container.getBoundingClientRect();
		const ulRect = ul.getBoundingClientRect();
		if (containerRect.width === 0 || ulRect.width === 0) {
			return;
		}

		const diff = containerRect.width - ulRect.width;
		let n = 1;
		if (diff > 0) {
			n = Math.round(containerRect.width / ulRect.width) + 1;
		}
		for (let i = 0; i < n; i++) {
			container.appendChild(ul.cloneNode(true));
		}

		container.classList.add('scroll-animation');
	}

	function init() {
		const events = document.querySelectorAll('.data-list > li');
		events.forEach(li => {
			initArtistList(li);
		});
	}

	window.addEventListener('load', init, false);
})();
