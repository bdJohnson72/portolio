const images = Array.from(document.querySelectorAll('img'))
console.log(images);
const modal = document.querySelector('.modal');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let current;

function Gallery(gallery) {



}

function showImage(el) {
    if (!el) {
        console.info('No image to show');
        return;
    }

    //update the modal with this info
    modal.querySelector('img').src = el.src;
    console.log('click');
    modal.querySelector('h2').textContent = el.title;   
   getRandomText();
    current = el;
    openModal();
}

function getRandomText(){    
    const url = "https://baconipsum.com/api/?type=meat-and-filler"
    fetch(url)
    .then(response => response.json())
    .then(data => {
       
        let result = data[0];
        console.log(result);
        modal.querySelector('figure p').textContent = result;
        return result;
    })    
}

function openModal(){
    console.info('open modal');
    if (modal.matches('open')) {
        return;
    }
    modal.classList.add('open');
}

images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget)));
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery = Gallery(document.querySelector('gallery2'));
