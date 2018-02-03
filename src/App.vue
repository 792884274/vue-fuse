<template>
	<div id="app">
		<Nav :amount="amount"></Nav>
		
			<transition	:name="transitionName">
				<!-- <Scroll ref="scroll"> -->
				<router-view class="child-view" :amount="amount" :itemsNumber="itemsNumber" @deassign="numberChange"></router-view>
				<!-- </Scroll> -->
			</transition>
		
	</div>
</template>
<script>
	import Scroll from './base/scroll/scroll'
	export default{
		name: 'app',
		data () {
			return {
				transitionName: 'slide-right',
				amount: 0,
				itemsNumber:[]
			}
		},
		methods:{
			numberChange(number,items){
				this.amount=number;
				this.itemsNumber=items;
			},
			scrollRefresh(){
				console.log(1111);
				this.$refs.scroll.refresh();
			}
		},
		mounted () {
			/*var _this=this;
			setTimeout(function () {
				_this.$refs.scroll.refresh();
			},20)*/
		},
		components: {
			Scroll
		},
	}
	
</script>
<style>
	#app{
	    width: 100%;
	    height: 100%;
	    overflow: hidden;
	}
	.child-view{
	    position: absolute;
	    left: 0;
	    top: 0;
	    height: 100%;
	    width: 100%;
	    transition: all .5s cubic-bezier(.55,0,.1,1);
	    overflow: auto;
	    -webkit-overflow-scrolling: touch;
	}
	.slide-left-enter,.slide-right-leave-active{
	    opacity: 0;
	    /* -webkit-transform: translate(200px,0);
	    transform: translate(200px,0); */
	    transition-delay: .5s;
	    -webkit-transition: .5s;
	}
	.slide-left-leave-active,.slide-right-enter{
	    opacity: 0;
	    /* -webkit-transform: translate(200px,0);
	    transform: translate(200px,0); */
	    transition-delay: .5s;
	    -webkit-transition: .5s;
	}
	.slide-enter-active{
	    -webkit-transition: all .3s ease;
	    transition: all .3s ease;
	}
	.slide-leave-active{
	    -webkit-transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
	    transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
	}
</style>