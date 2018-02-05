<template>
	<div id="" class="nav-container">
		<div class="wrapper" id="wrapper" ref="wrapper">
			<ul class="index-nav scroll content" id="scroller" ref="content">
		      	<li v-for="(navItem,index) in indexNav" class="navItem" :class="{active:navItem.active}" @click="navClick(index,$event)" :title="navItem.to">
		        	<!-- <router-link :to="navItem.to">{{navItem.text}}</router-link> -->
		        	<strong class="text">{{navItem.text}}</strong>
		        	<span class="amount" v-if="navItem.amount">{{amount}}</span>
		        	<span class="amount nav-total" v-if="navItem.vuex" :class="{active:into}">{{total}}</span>
		      	</li>
		    </ul> 
		</div>
	</div>
	
</template>
<script>
	import IScroll from 'iscroll/build/iscroll.js'
	import BScroll from 'better-scroll'
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
						to: '/chongqing',
						text: '重庆',
						active: false,
						amount: false,
						vuex: false
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
				],
				scroll: null,
				maxLeft: 0
			}
		},
		props: ['amount'],
		/*在组件初始化时调用，可以简单理解为页面加载时*/
		created (){
			// this.changeActive();	
		},
		mounted (){
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll=new BScroll(this.$refs.wrapper, {
						deceleration: 0.001,
	                    bounce: true,
	                    swipeTime: 2000,
						scrollX: true,
						scrollY: false,
		                click: true,
		            });	
		        } else{
					this.scroll.refresh();
				}
				this.changeActive();	
            })
			this.maxLeft=this.$refs.content.offsetWidth-this.$refs.wrapper.offsetWidth;
		},
		computed: {
			total (){
				return this.$store.getters.getTotal
			},
			into (){
				return this.$store.getters.getInto
			}
		},
		methods:{
			// 导航点击
			navClick(index,event) {
				this.$router.push({path: event.currentTarget.title,replace: true});
				this.changeActive();
				this.navMove(index);
			},
			// 点击导航后，导航根据点击位置进行移动
			navMove(index){
				var left=this.$refs.content.children[0].offsetWidth*index-this.$refs.wrapper.offsetWidth/2;
				if (left<=0) {
					left=0;	
				} else if(left>=this.maxLeft){
					left=this.maxLeft;
				} 
				this.scroll.scrollTo(-left, 0, 400);
			},
			// 初始化导航，默认都为非点击状态
			initNav(){
				this.indexNav.forEach(function (item) {
					item.active=false;
				})
			},
			changeActive(){
				var pathname=window.location.pathname;
				this.initNav();
		      	this.indexNav.forEach((item,index)=>{
		      		var router=item.to;
		      		if (pathname=='/') {
		      			this.indexNav[0].active=true;			
		      		} else if(index!=0&&pathname.indexOf(router)!=-1){
		      			this.indexNav[index].active=true;
		      		} else if(pathname.indexOf('aomen')!=-1){
		      			this.scroll.scrollTo(-this.maxLeft, 0, 400);
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
