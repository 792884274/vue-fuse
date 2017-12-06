import Vue from 'vue'
import App from './App'
import router from './router'
import Nav from './components/Nav'
import $ from 'jquery'
import './assets/css/bootstrap.min.css'  
import './assets/js/bootstrap.min' 
import './assets/less/github.less'   
import 'font-awesome/css/font-awesome.css'   

Vue.config.productionTip = false
Vue.component('Nav', Nav);

new Vue({
  	el: '#app',
  	router,
  	template: '<App/>',
  	components: { App }
})
