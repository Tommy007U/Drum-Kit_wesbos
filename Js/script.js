function playSound(e){

    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);// this code will select the sound allocateted to a specific data-key via the given number (`audio[data-key ="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if(!audio)return; // if no audio stop the function all running together
    audio.currentTime = 0; //rewind to the start

    audio.play()
    key.classList.add('playing'); // To understand the role of this new cladd .playin go on css and modify >playing modify transform.scale > on key modify transition all to view well

    //console.log(key); // on browser while the key is press down the consle will print the key element pressed
    //console.log(audio); // here we test the console on the browser to view the outcome accordig the specific allocation
 }


function removeTransition(e){
    if(e.propertyName !== 'transform') return; // skip if it's not a transform 
    this.classList.remove('.playing');

}

const keys = document.querySelectorAll('.key') // will select all the key class on the page
//console.log('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
