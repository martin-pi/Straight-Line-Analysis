import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue);

import { LMap, LTileLayer, LMarker, LPolyline } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-polyline', LPolyline);
Vue.component('l-marker', LMarker);

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
