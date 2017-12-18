import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Nav from './components/Nav'
import Gotop from './components/common/Gotop'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min' 
import './assets/less/github.less'   
import 'font-awesome/css/font-awesome.css'  

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuex)

Vue.component('Gotop', Gotop);
Vue.component('Nav', Nav);

new Vue({
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})
