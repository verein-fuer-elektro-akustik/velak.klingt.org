'use strict';

const SCROLL_DURATION_FACTOR = 200;
const SCROLL_PADDING = 10;
const MIN_SCROLL_DURATION = 3000;

const events = document.body.querySelectorAll('article > ol.events > li');

function update() {

    events.forEach(li => {

        //const li = events[1];
        const container = li.querySelector('div.artists');
        const ul = container.querySelector('ul');

        let containerRect = container.getBoundingClientRect();
        let ulRect = ul.getBoundingClientRect();
        let diff = containerRect.width - ulRect.width;
        //console.log("diff: "+diff);

        let anis = ul.getAnimations();
        anis.forEach(ani => {
            ani.cancel();
        });

        if (diff < 0) {
            diff = Math.abs(diff);
            let duration = diff * SCROLL_DURATION_FACTOR;
            if (duration < MIN_SCROLL_DURATION) duration = MIN_SCROLL_DURATION;
            //console.log('duration clampled: '+duration);
            ul.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX(-' + (diff) + 'px)' },
                    { transform: 'translateX(0)' },
                ],
                { 
                    duration: duration,
                    iterations: Infinity,
                    fill: "both",
                    //easing: 'ease-in-out'
                }
            );
        } else {
            let anis = ul.getAnimations();
            anis.forEach(ani => {
                ani.cancel();
            });
        }
    });
}

window.addEventListener('load', _ => {
    update();
    window.addEventListener('resize', _ => {
        update();
    }, false)
}, false);

