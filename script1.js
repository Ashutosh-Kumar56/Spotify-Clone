var music = document.getElementById('music')
var progressed = document.getElementById('progressed')
var progressbar = document.getElementById('progressbar')
var playPauseBtn = document.getElementById('playPauseBtn')
var ct = document.getElementById('CurrentTime')
var isPlaying = false
music.ontimeupdate = () =>{
    progressed.style.width = Math.floor(music.currentTime*100/music.duration) + '%'
}
progressbar.onclick = (e) => {
    music.currentTime = ((e.offsetX/progressbar.offsetWidth) * music.duration)
}
function showDuration(){
    musicDur = music.duration
    const min = Math.floor(musicDur / 60)
    const sec = Math.floor(musicDur % 60)
    if(sec < 10){
        document.getElementById('musicTime').innerHTML = `${min}:0${sec}`

    }
    else
    {
        document.getElementById('musicTime').innerHTML = `${min}:${sec}`
    }
}

setInterval(showDuration, 500)
        
            
function updateTimer(){
    ctime = music.currentTime
    const minutes = Math.floor(ctime / 60);
    const seconds = Math.floor(ctime % 60);
    if(seconds < 10){
        document.getElementById('CurrentTime').innerHTML = `${minutes}:0${seconds}`
    }
    else
    {
        document.getElementById('CurrentTime').innerHTML = `${minutes}:${seconds}`
    }
}

setInterval(updateTimer, 1000)

playPauseBtn.addEventListener('click' , () => {
    if(isPlaying){
        isPlaying = false
        music.pause()
        playPauseBtn.innerText = '\u25BA'
    }
    else
    {
        isPlaying = true
        music.play()
        playPauseBtn.innerText = '||'
    }
})