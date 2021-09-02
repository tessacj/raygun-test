<template>
  <div id="app">
  <h2>FEATURED TRENDING ENTERTAINMENT</h2>
  <div class="trending-contain">
    <div class="trendings" v-for="trendings in trendingChunks" :key="trendings">
      <div class="place" v-for="trending in trendings" :key="trending">
        <h2>{{ trending.original_title }}</h2>
        <img :src="'https://image.tmdb.org/t/p/w500'+trending.poster_path" width="235" height="300"/>
        <slot></slot>
        <p>{{ trending.overview }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import _ from 'lodash'
import { getPageData } from '../services/PageService'

export default {
  name: 'TrendingComponent',
  data () {
    return {
      data: "page1",
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
    trendingChunks(){
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

.trending-contain {
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
