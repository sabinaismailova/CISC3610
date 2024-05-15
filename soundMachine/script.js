// const playButtons = document.querySelectorAll('.button');
// const audioPlayers = document.querySelectorAll('audio');
// var bubbles = document.getElementById("bubbles");
// console.log("bubbles audio: ",bubbles);

// function playAudio() {
//   bubbles.play();
// }

let gifID = "";
let audioID = "";

function playAudio(audioId, gifId) {
    const audio = document.getElementById(audioId);
    if(gifID!=""){
        document.getElementById(gifID).style.display = 'none';
        document.getElementById(audioID).pause();
    }

    audioID = audioId;
    // Play audio
    audio.play();
  
    // Show corresponding GIF
    const gif = document.getElementById(gifId);
    gifID = gifId;
    gif.style.display = 'block';
}

// Listen for 'ended' events on audio elements
console.log(document.querySelectorAll('audio'))
document.querySelectorAll('audio').forEach(audio => {
    audio.addEventListener('ended', () => {
        // Hide corresponding GIF when audio playback ends
        // const gifId = audio.getAttribute('id');
        const gif = document.getElementById(gifID);
        console.log("gif: ", gifID);
        gif.style.display = 'none';
    });
});

