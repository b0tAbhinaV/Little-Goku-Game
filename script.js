score = 0;
cross = true;

audio = new Audio('bgmusic.mp3');
audiogo = new Audio('go.wav');
setTimeout(() => {
    audio.play()
}, 800);
document.onkeydown = function(e){
    console.log("Key code is:", e.keyCode)
    if(e.keyCode == 38){
        goku = document.querySelector('.goku');
        goku.classList.add('animateGoku');
        setTimeout(() => {
            goku.classList.remove('animateGoku');
        }, 1500)
    }
    if(e.keyCode == 39){
        goku = document.querySelector('.goku');
        gokuX = parseInt(window.getComputedStyle(goku, null).getPropertyValue('left'));
        goku.style.left = gokuX + 95 + "px";

    }
    if(e.keyCode == 37){
        goku = document.querySelector('.goku');
        gokuX = parseInt(window.getComputedStyle(goku, null).getPropertyValue('left'));
        goku.style.left = (gokuX - 95) + "px";

    }
}
setInterval(() =>{
    goku = document.querySelector('.goku');
    gameOver = document.querySelector('.gameOver');
    kamehameha = document.querySelector('.kamehameha');

    dx = parseInt(window.getComputedStyle(goku, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(goku, null).getPropertyValue('top'));

    kx = parseInt(window.getComputedStyle(kamehameha, null).getPropertyValue('left'));
    ky = parseInt(window.getComputedStyle(kamehameha, null).getPropertyValue('left'));

    offsetX = Math.abs(dx-kx);
    offsetY = Math.abs(dy-ky);
    console.log(offsetX, offsetY)
    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        kamehameha.classList.remove('kamehamehaAni'); 
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 100 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(kamehameha, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            kamehameha.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }
},100)
function updateScore(score) {
    scoreContainer.innerHTML = "Your Score: " + score
}
