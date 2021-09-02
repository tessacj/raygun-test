<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">What's Trending?</router-link> |
      <router-link to="/shows">TV Shows</router-link> |
      <router-link to="/movies">Movies</router-link> |
      <li id="" @mouseover="listFour = true" @mouseleave="listFour = false">
        <a href="#" id="extra">Extras</a>
        <transition name="fade">
          <ul v-if="listFour" >
            <li><a href="#" @click="crashError()">Simulate Crash</a></li>
            <li><a href="#" @click="customTime()">Simulate Performance Issue</a></li>
            <li><a href="#" @click="pageNotExist()">Simulate Resource Not Found</a></li>
          </ul>
        </transition>
      </li>
    </div>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
    !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
    (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
    f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
    h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
    e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
<script>
import rg4js from 'raygun4js';
import { getPageData } from './services/PageService'

rg4js('enableCrashReporting', true);
rg4js('apiKey', 'BJmDCHGMJrQ9L7oTOhX9xg');
rg4js('options', {
  automaticPerformanceCustomTimings: true,
  clientIp: true,
  enablePulse: true
})
rg4js('withTags', ['vue', 'frontend','pages']);

export default {
  data() {
    return {
      data: "page4",
      listFour: false
    }
  },
  methods: {
    crashError: function() {
      try {
        console.log('Testing')
        throw new Error('Crash Error Simulation');
      }
      catch(e) {
        rg4js('send', e);
      }
    },

    pageNotExist: function() {
      try {
        getPageData(this.data).then(response => {
          console.log(response)
          // throw new Error("Resource Doesn't Exist Simulation");
        })
      }
      catch(e) {
        rg4js('send', e);
      }
    },

    customTime: function() {
      setTimeout(()=>{
          this.$router.push('Movies')
          rg4js('trackEvent', {
          type: 'customTiming',
          name: 'timeToInteractive',
          duration: 5000,
      });
      }, 5000);

      
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:ghostwhite;
  margin-top: 30px;
}

#nav {
  display: inline;
  padding: 30px;
  font-size: x-large;
}

#nav a {
  font-weight: bold;
  color: cadetblue;
}

#nav li {
  display: inline;
}

#nav ul {
  display: grid;
  list-style-type: none;
  /* padding-inline-start: 615px; */
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.menu {  
  font: 14px/1.5 'Open Sans', sans-serif;
  font-weight: 600;
  /* margin: 0;
  padding: 0; */
  list-style: none;
}

.menu a {
  display: block;
  /* padding: 20px; */
  color: #fff;
  text-decoration: none;
}

.menu li {
  display:block;
  /* float: left; */
  position: relative;
  background: #222;
  color: #fff;
  /* min-width: 180px; */
}

/* .menu li ul {
  position: absolute;
  left: 0;
  top: 61px;
  margin: 0;
  padding: 0;
} */

.menu li ul li {
  background: #333;
  transition: background .2s;
}

.menu li ul li:hover {
  background: #444;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
