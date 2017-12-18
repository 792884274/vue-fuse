 import Vuex from 'vuex'
 import Vue from 'vue'
 import mount from './modules/mount'

 Vue.use(Vuex)

 export default new Vuex.Store({
 	modules: {
 		mount
 	}
 })