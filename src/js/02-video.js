import Vimeo from '@vimeo/player';
import throttle  from 'lodash.throttle';
const iframe = document.querySelector("iframe");
const player = new Vimeo(iframe);
const savedTime = Number(localStorage.getItem('videoplayer-current-time'));

  player
    .setCurrentTime(savedTime);

 
 
player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
