import Vimeo from '@vimeo/player';





const player = new Vimeo('vimeo-player', {
  id: 236203659,
  width: 640,
  height: 360,
});

 player.on('play', function () {
   console.log('played the video!');
 });

 player.getVideoTitle().then(function (title) {
   console.log('title:', title);
 });

 