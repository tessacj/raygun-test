<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TrendingComponent/>
  </div>
</template>

<script type="text/javascript">
    !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
    (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
    f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
    h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
    e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");
</script>
<script type="text/javascript">
    rg4js('apiKey', 'BJmDCHGMJrQ9L7oTOhX9xg');
    rg4js('enableCrashReporting', true);
    rg4js('logContentsOfXhrCalls', true);
</script>

<script>
// @ is an alias to /src
import TrendingComponent from '@/components/TrendingComponent.vue'

export default {
  name: 'Home',
  components: {
    TrendingComponent
  },
  data() {
    return {
    }
  },
  mounted () {
    
  },
}
</script>
