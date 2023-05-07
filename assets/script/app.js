'use strict';

console.info('%chttps://github.com/verein-fuer-elektro-akustik/velak.klingt.org', 'background:#000;color:#fff;padding:1rem;');

let theme;

function updateScrollTopButtom() {
    const btn = document.body.querySelector('i.ic-arrow_upward');
    if(btn) {
        btn.style.display = (document.body.scrollHeight > window.innerHeight) ? "block":"none";
    }
}
window.addEventListener("load", _ => {

    const style = window.getComputedStyle(document.querySelector(':root'));
    theme = {
        background: style.getPropertyValue("--background"),
        f_high: style.getPropertyValue("--f_high"),
        f_med: style.getPropertyValue("--f_med"),
        f_low: style.getPropertyValue("--f_low"),
        f_inv: style.getPropertyValue("--f_inv"),
        b_high: style.getPropertyValue("--b_high"),
        b_med: style.getPropertyValue("--b_med"),
        b_low: style.getPropertyValue("--b_low"),
        b_inv: style.getPropertyValue("--b_inv"),
    };

    updateScrollTopButtom();

    window.addEventListener("resize", _ => {
        updateScrollTopButtom();
    }, false);

}, false);
