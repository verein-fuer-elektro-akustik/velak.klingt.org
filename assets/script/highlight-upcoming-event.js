window.addEventListener('load', _ => {
	const list = document.querySelector("ol.data-list.program");
	const now = new Date();
	let date, lastUpcomingIndex, i;
	now.setDate(now.getDate() - 1);
	for (i = 0; i < list.children.length; i++) {
		date = new Date(list.children[i].querySelector("time").attributes.datetime.value);
		if (date.getTime() <= now.getTime()) {
			lastUpcomingIndex = i;
			break;
		}
	}
	if (lastUpcomingIndex > 0) {
		for (i = 0; i < lastUpcomingIndex; i++) {
			let e = list.children[i];
			list.removeChild(e);
			list.prepend(e);
			e.classList.add('upcoming');
		}
	}
});
