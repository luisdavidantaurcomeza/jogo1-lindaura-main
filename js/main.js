
const blob = document.querySelector('.blob');
const pipe = document.querySelector('.pipe');


const jump = () => {
    blob.classList.add('jump');

    setTimeout(() => {
        blob.classList.remove('jump');

    }, 500 );

}
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const blobPosition = +window.getComputedStyle(blob).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition >0 && blobPosition<80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        blob.style.animation = 'none';
        blob.style.bottom = `${pipePosition}px`;

        blob.src = './img/game-over.png';
        blob.style.width = '500px';
        blob.style.marginLeft = '500px' ;

        clearInterval(loop);
    }

}, 10) 
document.addEventListener('keydown', jump);