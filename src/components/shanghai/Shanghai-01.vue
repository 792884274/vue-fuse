<template>
	<div class="shanghai-01">
		<div class="exh tabs-container">
			<ul class="tabs-buttons">
				<li v-for="(buttonsItem,index) in tabs.buttons" @click="tabSwitch(index)" :class="{active:index==tabNum}">{{buttonsItem.text}}</li>
			</ul>
			<ul class="tabs-contents">
				<li v-for="(content,index) in tabs.contents" v-show="index==tabNum">{{content.text}}</li>
			</ul>
		</div>
		<Analysis></Analysis>
	</div>
</template>
<script>
	import Analysis from './analysis'
	export default{
		name: 'Shanghai01',
		data () {
			return {
				tabNum: 0
			}
		},
		props: ['tabs'],
		methods: {
			tabSwitch(index){
				this.tabNum=index;
			}
		},
		components: {
			Analysis
		}
	}
	
</script>
<style lang='less'>
	// @import '../../assets/less/shanghai.less';
</style>