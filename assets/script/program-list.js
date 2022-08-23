'use strict';

const SCROLL_DURATION_FACTOR = 200;
const SCROLL_PADDING = 10;
const MIN_SCROLL_DURATION = 3000;

let events;

function init() {

    events.forEach(li => {

        //console.log('---------');
        
        //const li = events[0];
        const container = li.querySelector('div.artists');
        const ul = container.querySelector('ul');

        const containerRect = container.getBoundingClientRect();
        if(containerRect.width == 0) {
            return 0;
        }
        const ulRect = ul.getBoundingClientRect();
        if(ulRect.width == 0) {
            return;
        }
        
        let scrollOffset = Math.round(ulRect.width);
        
        let diff = containerRect.width - ulRect.width;
        //console.log("container:"+containerRect.width, "ul:"+ulRect.width, "diff:"+diff );
        let n = 2;
        if(diff > 0) {
            n = Math.round(containerRect.width / ulRect.width) + 1;
        } else {
            //console.log('!!!!!! '+n);
            n = 2;
        }
        
        for (let i = 0; i < n; i++) {
            container.append(ul.cloneNode(true));
        }
        //console.log('N:'+n);
        //console.log(scrollOffset);

        //var scrollOffset = container.getBoundingClientRect().width - ulRect.width;
        //var scrollOffset = - ulRect.width;
        //console.log(container.getBoundingClientRect().width, ulRect.width);

        let anis = ul.getAnimations();
        anis.forEach(ani => {
            ani.cancel();
        });

        var duration = 10000 + scrollOffset * 20;
        //container.animationName = "users_scroll";
        
        for( let i = 0; i < container.children.length; i++ ) {
            let c = container.children[i];
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
        /*
        container.onmouseover = e => {
            console.log(e);
            for( let i = 0; i < container.children.length; i++ ) {
                let c = container.children[i];
                c.getAnimations()[0].play();
            }
        }
        container.onmouseout = e => {
            console.log(e);
            for( let i = 0; i < container.children.length; i++ ) {
                let c = container.children[i];
                //c.getAnimations()[0].finish();
            }
        }
        */
            
        /*
        if (diff < 0) {
            diff = Math.abs(diff);
            let duration = diff * SCROLL_DURATION_FACTOR;
            if (duration < MIN_SCROLL_DURATION) duration = MIN_SCROLL_DURATION;
            //console.log('duration clampled: '+duration);
            ul.animate(
                [
                    { transform: 'translateX(0)' },
                    { transform: 'translateX('+scrollOffset+'px)' },
                    //{ transform: 'translateX(-' + (diff) + 'px)' },
                    //{ transform: 'translateX(0)' },
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
        */
    });
}

window.addEventListener('load', _ => {
    events = document.body.querySelectorAll('article > ol.program > li');
    //init();
    init();
    document.body.addEventListener('mousemove', e => {
       //console.log(e); 
    }, false );
    window.addEventListener('resize', _ => {
        //update();
    }, false)
}, false);

