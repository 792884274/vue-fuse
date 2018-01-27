import Vue from 'vue'
import Router from 'vue-router'
import Beijing from '@/components/Beijing'
import Chongqing01Detail from '@/components/chongqing/Chongqing-01-detail'
import Tianjin from '@/components/Tianjin'
import Shanghai from '@/components/Shanghai'
import Chongqing from '@/components/Chongqing'
import Hebei from '@/components/Hebei'
import Shanxi from '@/components/Shanxi'
import Liaoning from '@/components/Liaoning'
import Jilin from '@/components/Jilin'
import Jiangsu from '@/components/Jiangsu'
import Zhejiang from '@/components/Zhejiang'
import Heilongjiang from '@/components/Heilongjiang'
import Aomen from '@/components/Aomen'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: '/vue-fuse/',
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
	    	path: '/chongqing/:id',
	    	name: 'Chongqing01Detail',
	    	component: Chongqing01Detail
	    },
	    {
	        path: '/hebei',
	        name: 'Hebei',
	        component: Hebei
	    },
	    {
	        path: '/aomen',
	        name: 'Aomen',
	        component: Aomen,
	        children: [
	        	{
	        		path: '/aomen/:id',
	        		component: Aomen
	        	}
	        ]
	    },
	    {
	        path: '/shanxi',
	        name: 'Shanxi',
	        component: Shanxi
	    },
	    {
	        path: '/liaoning',
	        name: 'Liaoning',
	        component: Liaoning
	    },
	    {
	        path: '/jilin',
	        name: 'Jilin',
	        component: Jilin
	    },
	    {
	        path: '/jiangsu',
	        name: 'Jiangsu',
	        component: Jiangsu
	    },
	    {
	        path: '/zhejiang',
	        name: 'Zhejiang',
	        component: Zhejiang
	    },
	    {
	        path: '/heilongjiang',
	        name: 'Heilongjiang',
	        component: Heilongjiang
	    },
	]
})
