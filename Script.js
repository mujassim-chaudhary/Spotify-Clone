console.log('hello javascript');

// Initialization of variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


//song array
let songs = [
    {songName: "salam-e-Ishq",filePath: "songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName: "Hello brother from my deep heart",filePath: "songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName: "Differnet Heaven and EHIDE-my heart",filePath: "songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName: "chack de INDIA from all over world",filePath: "songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName: "Good news you are selected",filePath: "songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName: " Good Playlist song ",filePath: "songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName: "Different song from my playlist  ",filePath: "songs/7.mp3",coverPath: "covers/7.jpg"},
]

//iteration 
songItems.forEach((element,i)=>{
    console.log(element,i);
   // element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
}) 

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('bi-play-circle'); 
        masterPlay.classList.add('bi-pause-circle'); 
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('bi-pause-circle'); 
        masterPlay.classList.add('bi-play-circle'); 
        gif.style.opacity = 0;
    }
})

//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;

})

//update song value acc. to myprogressbar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

//for palying song
const makeALlPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('bi-pause-circle'); 
        element.classList.add('bi-play-circle'); 
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeALlPlays();
      
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('bi-play-circle'); 
        e.target.classList.add('bi-pause-circle'); 
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('bi-play-circle'); 
        masterPlay.classList.add('bi-pause-circle'); 

    })
})

//next icons work
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle'); 
    masterPlay.classList.add('bi-pause-circle'); 

})

//previous icons work
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('bi-play-circle'); 
    masterPlay.classList.add('bi-pause-circle'); 

})