import Vimeo from '@vimeo/player';


const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);

 player.on('play', function () {
   console.log('played the video!');
 });


 player.getVideoTitle().then(function (title) {
   console.log('title:', title);
 });

 // nasłuchujemy wydarzenie
player.on('timeupdate', (e) => {
 
  console.log(e);
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e));
   // data is an object containing properties specific to that event
 });