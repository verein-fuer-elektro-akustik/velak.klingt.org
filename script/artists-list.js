'use strict';

const SCROLL_DURATION_FACTOR = 200;
const SCROLL_PADDING = 10;
const MIN_SCROLL_DURATION = 3000;

let initialized = false;
let events;
let artistsLists;

function init() {
	initialized = false;
	artistsLists = [];
	events.forEach(li => {
		initArtistList(li);
	});
	initialized = true;
}

function initArtistList(li) {

	const container = li.querySelector('div.artists');
	const ul = container.querySelector('ul');
	artistsLists.push(ul);

	if (initialized) {
		console.log(container.children.length);
	}

	const containerRect = container.getBoundingClientRect();
	// if( containerRect.y > window.innerHeight )
	//     return;
	const ulRect = ul.getBoundingClientRect();
	if (containerRect.width == 0) {
		return 0;
	}
	if (ulRect.width == 0) {
		return;
	}
	// if(containerRect.top > window.innerHeight-200) {
	//     return;
	// }

	// let scrollOffset = Math.round((containerRect.width - ulRect.width)/100+ulRect.width);
	//let scrollOffset = 1000; Math.round((containerRect.width - ulRect.width)/100+ulRect.width);
	let scrollOffset = - ulRect.width;
	//TODO don't use container with, but maximal page width to ensure it's
	const diff = containerRect.width - ulRect.width;
	// let diff = 1280; //containerRect.width - ulRect.width;
	//console.log("container:"+containerRect.width, "ul:"+ulRect.width, "diff:"+diff );
	let n = 2;
	if (diff > 0) {
		n = Math.round(containerRect.width / ulRect.width) + 1;
	} else {
		// n = 2;
		n = 1;
	}
	// console.log(n);
	for (let i = 0; i < n; i++) {
		container.append(ul.cloneNode(true));
	}

	container.classList.add("scroll-animation");
	const duration = (1000 * ulRect.width / 10) * 2; //+ scrollOffset * 20;
	for (let i = 0; i < container.children.length; i++) {
		let c = container.children[i];
		c.style.animationDuration = duration;
	}
	// container.onmouseover = function(){
	//     for( let i = 0; i < container.children.length; i++ ) {
	//         let c = container.children[i];
	//         c.style.animationDuration = duration;
	//
	//     }
	// }

	//console.log('N:'+n);
	//console.log(scrollOffset);

	//var scrollOffset = container.getBoundingClientRect().width - ulRect.width;
	//var scrollOffset = - ulRect.width;
	//console.log(container.getBoundingClientRect().width, ulRect.width);
	/*
	let anis = ul.getAnimations();
	anis.forEach(ani => {
		ani.cancel();
	});

	var duration = 10000 + scrollOffset * 20;
	//container.animationName = "users_scroll";

	container.classList.add("scroll-animation");
	for( let i = 0; i < container.children.length; i++ ) {
		let c = container.children[i];
		// c.style.transformX = "translate(0)";
		//c.style.animationName = 'users_scroll';
		let ani = c.animate(
			[
				{ transform: 'translateX(0)' },
				{ transform: 'translateX(-'+scrollOffset+'px)' },
			],
			{
				duration: duration,
				iterations: Infinity,
				//fill: "both",
				//easing: 'ease-in-out'
			}
		);
		//ani.pause();
	}
	*/
}

window.addEventListener('load', _ => {

	//const container = document.body.querySelectorAll('.data-list');
	//container.style.display = "none";
	events = document.body.querySelectorAll('.data-list > li');

	console.time("artists-list");
	init();
	console.timeEnd("artists-list");
	//
	// setTimeout(function(){
	//     console.log("timeout",initialized);
	// }, 1500 );

	// document.body.addEventListener('mousemove', e => {
	//    //console.log(e);
	// }, false );
	/*
	let timeout;
	window.addEventListener('resize', _ => {
		/* artistsLists.forEach(ul =>{
			ul.getAnimations();

			anis.forEach(ani => {
				ani.pause();
			});
		}); * /
		/*
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		timeout = setTimeout(function() {
			console.log("timeout", initialized);
			timeout = null;
			//init();
			//artistsLists.forEach(ul =>{
		}, 1500);
		* /
		//console.log(initialized);
		//init();
	}, false);
	*/
}, false);

