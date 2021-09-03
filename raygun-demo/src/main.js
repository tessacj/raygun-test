import Vue from 'vue'
import App from './App.vue'
import router from './router'
import rg4js from 'raygun4js';

rg4js('enableCrashReporting', true);
rg4js('logContentsOfXhrCalls', true);
rg4js('apiKey', 'BJmDCHGMJrQ9L7oTOhX9xg');
rg4js('options', {
  automaticPerformanceCustomTimings: true,
  clientIp: true,
  disablePulse: false,
  pulseMaxVirtualPageDuration: 1000
})

Vue.config.productionTip = false

Vue.config.errorHandler = function(err, vm, info) {
  rg4js('send', {
    error: err,
    customData: [{ info: info }],
    tags: ['navigation','frontend', 'vue', 'pages']
  });
};

router.afterEach((to, from) => {
  rg4js('trackEvent', {
    type: 'pageView',
    path: to.path
  });
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
