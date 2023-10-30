const playlist = ["music/track 1.mp3", "music/track 2.mp3", "music/track 3.mp3", "music/track 4.mp3", "music/track 5.mp3"];
// const player = document.querySelector(".player");
const currentSong = document.querySelector("#audio");
const buttons = document.querySelectorAll(".controls > button");
const source = document.querySelector("#audioSource");
let i = 0;

let audio = new Audio(playlist[i]);
console.log(audio);



const togglePlay = () => {     
    const toggle = audio.paused ? audio.play() : audio.pause();
    return toggle;
}

const next = () => {
    console.log('next called')   
    i++; 
    if (playlist.indexOf(i) < playlist.length - 1) {           
        source.src = playlist[i];
        console.log(source.src);
        audio.play();        
            
    } else { 
        source.src = playlist[0];
        console.log(source.src);
        audio.play()
          
    }       
    
}

const previous = () => {
    console.log("previous called")  
    i--;  
    if (playlist.indexOf(i) > 0) {
        source.src = playlist[i];  
        console.log(source.src);      
        audio.play()        
              
    } else {
        source.src = playlist[playlist.length - 1];
        console.log(source.src);
        audio.play()
        
    }       
}

const stop = () => {
    audio.pause();
    audio.currentTime = 0;
    
}

const keyCodes = (e) => {    
    console.log(e.code);
        if (e.code === 'Space' || e.target.dataset.key === 'play') {
            togglePlay()
        } else if (e.code == 'keyN' || e.target.dataset.key === 'next') {
            next()
        } else if (e.code == 'keyP' || e.target.dataset.key === "previous") {
            previous()
        } else if (e.code == 'keyS' || e.target.dataset.key === 'stop') {
            stop();
        }
    
}

Array.from(buttons).map(button=> button.addEventListener('click', keyCodes))
Array.from(buttons).map(button => button.addEventListener('keydown', keyCodes))



