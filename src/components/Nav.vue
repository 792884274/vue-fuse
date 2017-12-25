<template>
	<div id="" class="nav-container">
		<div class="wrapper" id="wrapper" ref="wrapper">
			<ul class="index-nav scroll content" id="scroller" ref="content">
		      	<li v-for="(navItem,index) in indexNav" class="navItem" :class="{active:index==isActive}" @click="navMove(index,$event)" :title="navItem.to">
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
				],
				scroll: null
			}
		},
		props: ['amount'],
		/*在组件初始化时调用，可以简单理解为页面加载时*/
		created (){
			this.changeActive();	
		},
		mounted (){
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll=new BScroll(this.$refs.wrapper, {
						// pullup: true,
						// probeType: 3,
	                    deceleration: 0.001,
	                    bounce: true,
	                    swipeTime: 2000,
						scrollX: true,
						scrollY: false,
		                click: true,
		            });	
		            // console.log(this.scroll);		
				} else{
					this.scroll.refresh();
				}
				/*var wrapper=this.$refs.wrapper;
                this.scroll=new BScroll(wrapper, {
					// pullup: true,
					probeType: 3,
                    deceleration: 0.001,
                    bounce: false,
                    swipeTime: 2000,
					srcollX: true,
					scrollY: false,
	                click: true,
	            });*/
	            /*this.scroll.on('scrollStart', (pos) => {
				  	// console.log(pos.x + '~' + pos.y)
				  	console.log(11);
				})*/
            })
			
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
			actionStart(event){
				// this.$refs.content.style.marginLeft=`0px`;
			},
			navMove(index,event) {
				this.$router.push({path: event.currentTarget.title});
				this.isActive=index;







				
				// console.log(index,event.currentTarget,this.$refs.content);
				// this.$refs.content.scrollTo(0, 0);
				// transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1); 
				// transition-duration: 800ms; 
				// transform: translate(0px, -150px) translateZ(0px);
				// this.$refs.content.style.transform=`translate(0px, 0px) translateZ(0px)`;
				// this.$refs.content.style.transform=`translate(${100}px, 0px) translateZ(0px)`;
				// $('#scroller').scrollLeft(0);
				/*var wrapper = new BScroll('#wrapper', {
					srcollX: true,
					scrollY: false,
                    click: true,
                });*/
                // wrapper.scrollTo(100, 0, 400);
                console.log(this.isActive);
			},

			changePage(index) {
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
