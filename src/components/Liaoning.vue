<template>
	<div class="liaoning">
		<Gotop :className="className"></Gotop>
		<Liaoning01></Liaoning01>
	</div>
</template>
<script>
	import Liaoning01 from './liaoning/Liaoning-01.vue'
	export default{
		name: 'Liaoning',
		data () {
			return {
				className: 'liaoning',
				id: 'example'
			}
		},
		components: {
			Liaoning01
		}
	}
	
</script>
<style lang='less'>
	@import '../assets/less/liaoning.less';
</style>