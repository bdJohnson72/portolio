
console.log('connected');
const subArray = Array.from(document.getElementsByClassName('sub-title'));

function* elementGenerator(){
    yield document.getElementById('sub1');
    yield document.getElementById('sub2');
}
function getSubheadings(){
    for (let i = 0; i < subArray.length; i++){
        setInterval(fadeText, 5000);
        i++;
    }
}

function fadeText(text){
    const gen = elementGenerator();
    const elem = gen.next();
    console.log(elem.classList);
    console.log(typeof elem)
    console.dir(elem``)
}

getSubheadings();