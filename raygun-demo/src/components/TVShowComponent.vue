<template>
  <div id="app">
  <h2>POPULAR TV SHOWS</h2>
  <div class="tvshow-contain">
    <div class="tvshows" v-for="tvshows in tvshowChunks" :key="tvshows">
      <div class="place" v-for="tvshow in tvshows" :key="tvshow">
        <h2>{{ tvshow.original_title }}</h2>
        <img v-if="tvshow.poster_path" :src="'https://image.tmdb.org/t/p/w500'+tvshow.poster_path" width="235" height="300"/>
        <slot></slot>
        <p>{{ tvshow.overview }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import { getPageData } from '../services/PageService'

export default {
  name: 'TVShowComponent',
  data () {
    return {
      data: "page3",
      results: [],
      trending: []
    }
  },
  mounted() {
    getPageData(this.data).then(response => {
      this.trending = response.results
      console.log(this.trending)
    })

  },
  computed: {
    tvshowChunks(){
      return _.chunk(Object.values(this.trending), 5)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

h1 {
  text-align: center;
}

.tvshow-contain {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.place {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 600px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
}
.place h2 {
    margin: 0;
    text-align: center;
  }
.place img {
    margin: 10px;
    align-self: center;
  }
</style>
