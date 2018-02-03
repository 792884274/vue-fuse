<template>
	<div class="shanghai-01">
		<div class="exh tabs-container">
			<!-- <div style="height: auto;width: 100%;"> -->
				<div class="wrapper" id="wrapper" ref="wrappers">
				<!-- <Scroll ref="scroll" :data="tabs.buttons" :scrollX="true"> -->
					<ul class="tabs-buttons" ref="content">
						<li v-for="(buttonsItem,index) in tabs.buttons" @click="tabSwitch(index)" :class="{active:index==tabNum}">{{buttonsItem.text}}</li>
					</ul>
				<!-- </Scroll> -->
				</div>
			<!-- </div> -->
			
			<ul class="tabs-contents">
				<li v-for="(content,index) in tabs.contents" v-show="index==tabNum">{{content.text}}</li>
			</ul>
		</div>
		<Analysis></Analysis>
	</div>
</template>
<script>
	import Scroll from 'base/scroll/scroll'
	import BScroll from 'better-scroll'
	import Analysis from './analysis'
	export default{
		name: 'Shanghai01',
		data () {
			return {
				tabNum: 0,
				scroll: null
			}
		},
		props: ['tabs'],
		methods: {
			tabSwitch(index){
				this.tabNum=index;
			}
		},
		mounted () {
			console.log(this.tabs.buttons);
			this.$nextTick(() => {
				// this.$refs.scroll.refresh();
			})
			// this.$refs.scroll.refresh();
			this.$nextTick(() => {
				if (!this.scroll) {
					this.scroll=new BScroll(this.$refs.wrappers, {
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
            })
		},
		components: {
			Scroll,
			Analysis
		}
	}
	
</script>
<style lang='less'>
	#wrapper {
	    height: 100%;
	    width: 100%;
	    overflow-x: scroll;
	    // overflow-y: hidden;
	}
</style>