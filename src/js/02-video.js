import Vimeo from '@vimeo/player';


const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) {
  console.log(3)
  player.setCurrentTime(savedTime);
}

 player.on('play', function () {
   console.log('played the video!');
 });


 player.getVideoTitle().then(function (title) {
   console.log('title:', title);
 });

 // nasłuchujemy wydarzenie
player.on('timeupdate', _.throttle((e) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}),10000);
