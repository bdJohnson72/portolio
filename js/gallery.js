const images = Array.from(document.querySelectorAll('img'))
console.log(images);
const modal = document.querySelector('.modal');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let current;

function Gallery(gallery) {



}

function showImage(el) {
    console.log('click');
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

    //event listeners bound on open
    window.addEventListener('keyup', handleKeyUp);
    nextButton.addEventListener('click', showNextImage);
}

function closeModal(){
    modal.classList.remove('open');
    window.removeEventListener('keyup', handleKeyUp);
    nextButton.removeEventListener('click', showNextImage);
    //todo add event listenrs
}

function handleClickOutside(event){
    console.log('click');
    if (event.target === event.currentTarget){
        closeModal();
    }
}

function handleKeyUp(event){
    if (event.key === 'Escape'){
        closeModal();
    }
}

function showNextImage(){
    console.log(current.next)
}


images.forEach(image => image.addEventListener('click', event => showImage(event.currentTarget)));
const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery = document.querySelector('.gallery');


modal.addEventListener('click', handleClickOutside);
