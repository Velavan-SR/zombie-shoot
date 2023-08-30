let gunShot = new Audio('./assets/shotgun.wav');
let gameBody = document.getElementById('game-body')
let zombieID=0;
let lives = 3;
let zombie;

gameBody.addEventListener('click', () => {
    gunShot.currentTime = 0;
    gunShot.play();
})

// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

// Iteration 1.3: Add background sound

let backgroundMusic = new Audio('./assets/bgm.mp3');
backgroundMusic.play();
backgroundMusic.loop = true;

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie

function spawnZombies(){
    let l = randum(1,7)
    gameBody.innerHTML+= `<img class=zombie-image id=zombie${zombieID} src=./assets/zombie-${l}.png >`;
    zombie = document.getElementById(`zombie${zombieID}`);
    let zSpeed = randum(2,5)
    zombie.style.animationDuration = `${zSpeed}s`
    let viewWidth = randum(20,80)
    zombie.style.transform = `translateX(${viewWidth}vw)`
    zombieID++;
    zombie.addEventListener('click',() => {
        finishHim(zombie)
        zombieID++;
    })
}

spawnZombies();

function randum(max,min){
    return Math.floor(Math.random()*(max-min))+min;
}

// Iteration 3: Write a function to check if the player missed a zombie

function zombieEscape(zombie){
    if (zombie.getBoundingClientRect().top<0){
        lives--;
        if (lives==0){
            zombieID=0;
            window.location.href = 'game-over.html'
        }
        finishHim(zombie);
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function finishHim(ghost){
    ghost.style.display = 'none';
    spawnZombies();
}

// Iteration 5: Creating timer

let time=60;
setInterval(timer,1000);
setInterval(check,1);
function check(){
    zombieEscape(zombie);
}
function timer(){
    if (time==0){
        window.location.href = 'win.html'
    }
    else{
        time--;
        document.getElementById('timer').innerText=time;
        
    }
}

// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
