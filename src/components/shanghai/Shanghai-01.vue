<template>
	<div class="shanghai-01">
		<div class="exh tabs-container">
			<div id="" class="scroll-container">
				<ScrollX ref="scroll">
					<ul ref="content" class="content" id="scroller">
						<li v-for="(buttonsItem,index) in tabs.buttons" @click="tabSwitch(index)" :class="{active:index==tabNum}" style="min-width: 3.6em;">{{buttonsItem.text}}</li>
					</ul>
				</ScrollX>
			</div>
			<ul class="tabs-contents">
				<li v-for="(content,index) in tabs.contents" v-show="index==tabNum">{{content.text}}</li>
			</ul>
		</div>
		<Analysis></Analysis>
	</div>
</template>
<script>
	import ScrollX from 'base/scroll/scroll-x'
	import BScroll from 'better-scroll'
	import Analysis from './analysis'
	export default{
		name: 'Shanghai01',
		data () {
			return {
				tabNum: 0,
				scroll: null,
				amount: 0
			}
		},
		props: ['tabs'],
		methods: {
			tabSwitch(index){
				this.tabNum=index;
			}
		},
		mounted () {
			// console.log(this.$refs.scroll);
		},
		components: {
			ScrollX,
			Analysis
		}
	}
	
</script>
<style lang='less'>
	
	
</style>