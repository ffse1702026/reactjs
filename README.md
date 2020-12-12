# reactjs

{
  "name": "abbp",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "~0.20.0",
    "bootstrap": "^4.5.2",
    "history": "^5.0.0",
    "prop-types": "^15.7.2",
    "react": "~16.13.1",
    "react-dom": "~16.13.1",
    "react-hook-form": "^6.9.2",
    "react-redux": "^7.2.1",
    "react-router-dom": "^5.2.0",
    "react-scripts": "3.4.3",
    "react-toastify": "^6.0.9",
    "redux": "^4.0.5",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "~4.2.4",
    "@testing-library/react": "~9.3.2",
    "@testing-library/user-event": "~7.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}




<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <videojs width="400" controls>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</videojs> -->
  <!-- <video ref="Player"  id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="http://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
  </video> -->

   <!-- <VideoJS title="Video of Puppies"

             src="https://www.youtube.com/watch?v=N3ugtRtZE0s"

             type="video/youtube"/> -->


             <div class="video-inner-container">

      <video

        id="vid1"

        controls

        preload="auto" width="640" height="264"

        class="video-js vjs-fluid vjs-default-skin vjs-big-play-centered"

        data-setup='{}'

        >

           <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>

      </video>

    </div>
</div>
</template>

<script>
// import videojs from 'video.js'
// import {VideoJS} from './VideoJS'

 import 'video.js/dist/video-js.min.css';

  import 'video.js/dist/video.min.js';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
//     var player = videojs(this.$refs.Player, options, function onPlayerReady() {
//   videojs.log('Your player is ready!');
 
//   // In this context, `this` is the player that was created by Video.js.
//   this.play();
 
//   // How about an event listener?
//   this.on('ended', function() {
//     videojs.log('Awww...over so soon?!');
//   });
// });
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

