// TODO:
class Gallery {
    constructor() {
        //console.log('gallery');
    }
}
const gallery = new Gallery();
let container = document.body.querySelectorAll('main>article>.gallery>ul>li');
container.forEach(li =>{
    console.log(li);
    /*
    li.addEventListener('click', e =>{
       li.classList.toggle('selected'); 
    });
    */
});
