'use strict';

function updatescrolltopbuttom() {
    const btn = document.body.querySelector('i.ic-arrow_upward');
    if(btn) {
        btn.style.display = (document.body.scrollHeight > window.innerHeight) ? "block":"none";
    }
}
window.addEventListener("load", e => {
    console.info("%c⬤","color:#fff;background:#000;padding:3rem 3rem;font-size:32px;");
    //console.info('%cDEVELOPER: https://disktree.net', 'background:#000;color:#fff;padding:20px;');
    //console.info('%cSOURCE: https://github.com/verein-fuer-elektro-akustik/velak.klingt.org', 'background:#000;color:#fff;padding:1rem;');
    updatescrolltopbuttom();
    window.addEventListener("resize", e => {
        updatescrolltopbuttom();
    }, false);
}, false);
