(() => {
	const turb = document.getElementById("turbulence");
	if (!turb) return;

	// Check for reduced motion preference
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (prefersReducedMotion) {
		turb.setAttribute("baseFrequency", "0.02 0.005");
		return;
	}

	let phaseX = Math.random() * Math.PI * 2;
	let phaseY = Math.random() * Math.PI * 2;
	let targetPhaseX = phaseX;
	let targetPhaseY = phaseY;

	function onFrame(timestamp) {
		if (document.hidden) {
			window.requestAnimationFrame(onFrame);
			return;
		}

		// Smoothly ease phase shifts if randomized by interaction
		phaseX += (targetPhaseX - phaseX) * 0.05;
		phaseY += (targetPhaseY - phaseY) * 0.05;

		const t = timestamp * 0.00035;

		// Harmonic wave superposition for smooth, endless, non-repeating acoustic ripples
		const freqX = 0.02 + 0.006 * Math.sin(t * 0.7 + phaseX) + 0.002 * Math.cos(t * 1.3);
		const freqY = 0.0045 + 0.0025 * Math.sin(t * 1.1 + phaseY) + 0.001 * Math.cos(t * 0.5);

		turb.setAttribute("baseFrequency", `${freqX.toFixed(6)} ${freqY.toFixed(6)}`);

		window.requestAnimationFrame(onFrame);
	}

	const svg = turb.ownerSVGElement || document.querySelector("svg[name='fq']");
	if (svg) {
		svg.style.cursor = "pointer";
		svg.addEventListener("click", () => {
			targetPhaseX += (Math.random() - 0.5) * Math.PI * 2;
			targetPhaseY += (Math.random() - 0.5) * Math.PI * 2;
		});
	}

	window.requestAnimationFrame(onFrame);
})();
