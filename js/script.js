console.log("Welcom to sj music");

//initialize the variables

let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
 let masterPlay = document.getElementById("masterPlay");
 let myProgressBar = document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let songItems = Array.from (document.getElementsByClassName('songItem'));


let songs =[
    {songName :"dil-janiye.. ", filepath: "songs/1.mp3" ,coverpath:"img/1.jpg" },

    {songName :"shikwa-nhi.. ", filepath: "songs/2.mp3" ,coverpath:"img/2.jpg" },

    {songName :"fir mohabat.. ", filepath: "songs/3.mp3" ,coverpath:"img/3.jpg" },

    {songName :"janmo janam.. ", filepath:"songs/4.mp3" ,coverpath:"img/4.jpg" },

 
    {songName :"mera pyar..", filepath:"songs/5.mp3" ,coverpath:"img/5.jpg" },

    {songName :"aaj-din-cha.. ", filepath:"songs/6.mp3" ,coverpath:"img/6.jpg" },

    {songName :"q-ki-etna..", filepath:"songs/7.mp3" ,coverpath:"img/7.jpg" },

    {songName :"buterfly.. ", filepath:"songs/8.mp3" ,coverpath:"img/8.jpg" },

    {songName :"rabba main.. ", filepath:"songs/9.mp3" ,coverpath:"img/9.jpg" },

    {songName :"khali salam.. ", filepath:"songs/10.mp3" ,coverpath:"img/10.jpg" },


]
songItems.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath;

    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})



//audioElement.play();

//handal play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }


})

//listen to events
audioElement.addEventListener('timeupdate' ,()=>{
    
    //update seekbar

    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;

})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{

        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}


 Array.from(document.getElementsByClassName('songItemplay')).forEach((Element)=>{
Element.addEventListener('click',(e)=>{

    makeAllplays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle')
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

})

document.getElementById('next').addEventListener('click',()=>{

    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})
document.getElementById('previous').addEventListener('click',()=>{

    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
