<template>
	<div class="chongqing">
		<Gotop :className="className"></Gotop>
		<Chongqing01 :news="chongqing01"></Chongqing01>  
	</div>
</template>
<script>
	import Chongqing01 from './chongqing/Chongqing-01.vue'
	export default {
		name: 'Chongqing',
		data () {
			return {
				className: 'chongqing',
				chongqing01: [
					{
						id: '01',
						text: '重庆详细页面01' 
					},
					{
						id: '02',
						text: '重庆详细页面02'
					}
				]
			}
		},
		components: {
			Chongqing01
		}
	}
	
</script>
<style>
	@import '../assets/less/chongqing.less';
</style>