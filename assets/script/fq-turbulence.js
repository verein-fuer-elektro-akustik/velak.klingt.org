(() => {
	const turb = document.getElementById("turbulence");
	if (!turb) return;

	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (prefersReducedMotion) {
		turb.setAttribute("baseFrequency", "0.02 0.005");
		return;
	}

	const FREQ_MIN = 0.001;
	const FREQ_MAX = 0.008;
	const FREQ_RANGE = FREQ_MAX - FREQ_MIN;
	const SPEED = 0.000012; // constant per-frame increment, never changes

	let freqY = FREQ_MIN + Math.random() * FREQ_RANGE;

	function onFrame(timestamp) {
		if (document.hidden) {
			window.requestAnimationFrame(onFrame);
			return;
		}

		// Constant speed, single direction, wraps at the top back to the
		// bottom - endless with no direction or speed change.
		freqY += SPEED;
		if (freqY > FREQ_MAX) freqY -= FREQ_RANGE;

		turb.setAttribute("baseFrequency", `0.02 ${freqY.toFixed(6)}`);

		window.requestAnimationFrame(onFrame);
	}

	const svg = turb.ownerSVGElement || document.querySelector("svg[name='fq']");
	if (svg) {
		svg.addEventListener("click", () => {
			freqY = FREQ_MIN + (((freqY - FREQ_MIN) + Math.random() * FREQ_RANGE) % FREQ_RANGE);
		});
		// svg.addEventListener("mousemove", (e) => {
		// 	const rect = svg.getBoundingClientRect();
		// 	const nx = (e.clientX - rect.left) / rect.width;
		// 	freqY = FREQ_MIN + nx * FREQ_RANGE;
		// });
		// svg.addEventListener("wheel", (e) => {
		// 	freqY = FREQ_MIN + (((freqY - FREQ_MIN) + e.deltaY * 0.00002) % FREQ_RANGE + FREQ_RANGE) % FREQ_RANGE;
		// });
	}

	window.requestAnimationFrame(onFrame);
})();
