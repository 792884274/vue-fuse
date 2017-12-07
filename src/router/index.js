import Vue from 'vue'
import Router from 'vue-router'
import Beijing from '@/components/Beijing'
import Chongqing01Detail from '@/components/chongqing/Chongqing-01-detail'
import Tianjin from '@/components/Tianjin'
import Shanghai from '@/components/Shanghai'
import Chongqing from '@/components/Chongqing'
import Hebei from '@/components/Hebei'
import Shanxi from '@/components/Shanxi'
import Aomen from '@/components/Aomen'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	    {
	      	path: '/',
	      	name: 'Beijing',
	      	component: Beijing
	    },
	    {
	      	path: '/tianjin',
	      	name: 'Tianjin',
	      	component: Tianjin
	    },
	    {
	      	path: '/shanghai',
	      	name: 'Shanghai',
	      	component: Shanghai
	    },
	    {
	        path: '/chongqing',
	        name: 'Chongqing',
	        component: Chongqing
	    },
	    {
	        path: '/hebei',
	        name: 'Hebei',
	        component: Hebei
	    },
	    {
	        path: '/aomen/:id',
	        name: 'Aomen',
	        component: Aomen
	    },
	    {
	        path: '/shanxi',
	        name: 'Shanxi',
	        component: Shanxi
	    },
	    {
	    	path: '/chongqing/:id',
	    	name: 'Chongqing01Detail',
	    	component: Chongqing01Detail
	    },
	]
})
