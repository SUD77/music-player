const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "jacinto-1",
    displayName: "Electro Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-2",
    displayName: "Seven Nation Army(Remix)",
    artist: "Jacinto Design",
  },
  {
    name: "jacinto-3",
    displayName: "GoodNight, Disco Queen",
    artist: "Jacinto Design",
  },
  {
    name: "metric-1",
    displayName: "Metric-Day (Remix)",
    artist: "Jacinto Design",
  },
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

// Prev song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

//On load - Select First Song
loadSong(songs[songIndex]);

//Update Progress Bar and time
function updateProgressBar(e){
  if(isPlaying){
    const {duration,currentTime} = e.srcElement;
    console.log(duration,currentTime);

    //Update the progress bar width
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width=`${progressPercent}%`;
  }
}


//Event Listener
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

music.addEventListener('timeupdate',updateProgressBar);
