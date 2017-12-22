<template>
	<div id="" class="nav-container">
		<div class="scroll-container" id="wrapper" v-cloak>
			<!-- <ul class="index-nav scroll" id="scroller" :style="{width: scrollWidth+2+'px'}"> -->
			<ul class="index-nav scroll" id="scroller">
		      	<li v-for="navItem in indexNav" class="navItem" :class="{active:navItem.active}">
		        	<router-link :to="navItem.to">{{navItem.text}}</router-link>
		        	<span class="amount" v-if="navItem.amount">{{amount}}</span>
		        	<span class="amount nav-total" v-if="navItem.vuex">{{total}}</span>
		      	</li>
		    </ul> 
		</div>
	</div>
	
</template>
<script>
	import IScroll from 'iscroll/build/iscroll.js'
	export default{
		name:'Nav',
		data(){
			return {
				isActive:0,
				scrollWidth: 0,
				indexNav: [
					{
						to: '/',
						text: '北京',
						active: true,
						amount: false,
						vuex: false
					},
					{
						to: '/tianjin',
						text: '天津',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/shanghai',
						text: '上海',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/chongqing',
						text: '重庆',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/hebei',
						text: '河北',
						active: false,
						amount: true,
						vuex: false
					},
					{
						to: '/heilongjiang',
						text: '黑龙江',
						active: false,
						amount: false,
						vuex: true
					},
					{
						to: '/shanxi',
						text: '山西',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/liaoning',
						text: '辽宁',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/jilin',
						text: '吉林',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/jiangsu',
						text: '江苏',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/zhejiang',
						text: '浙江',
						active: false,
						amount: false,
						vuex: false
					},
					{
						to: '/aomen',
						text: '澳门',
						active: false,
						amount: false,
						vuex: false
					}
				]
			}
		},
		props: ['amount'],
		/*在组件初始化时调用，可以简单理解为页面加载时*/
		created (){
			this.changeActive();	
		},
		mounted (){
			/*this.scrollWidth=this.indexNav.length*$('.navItem').width();
			$('#scroller').css({
				width: this.scrollWidth+'px'
			})
			new IScroll('#wrapper', { 
				scrollX: true, 
				scrollY: false
			});*/
		},
		computed: {
			total (){
				return this.$store.getters.getTotal
			}
		},
		methods:{
			changePage:function (index) {
				this.isActive=index;
			},
			initNav(){
				this.indexNav.forEach(function (item) {
					item.active=false;
				})
			},
			changeActive(){
				var _this=this;
				var pathname=window.location.pathname;
				this.initNav();
		      	this.indexNav.forEach(function (item,index) {
		      		var router=item.to;
		      		if (pathname=='/') {
		      			_this.indexNav[0].active=true;			
		      		} else if(index!=0&&pathname.indexOf(router)!=-1){
		      			_this.indexNav[index].active=true;
		      		}
		      	})
  			},
  			getStyle(ele,attr){
				return parseFloat(ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr]);
			}
		},
		watch: {
		    // 如果路由有变化，会再次执行该方法
		    "$route": "changeActive"
		}
	}
</script>

<style lang='less'>
	@import '../assets/less/nav.less';
</style>
