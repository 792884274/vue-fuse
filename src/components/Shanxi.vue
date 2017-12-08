<template>
	<div class="shanxi">
		<Gotop :className="className"></Gotop>
		<Shanxi01></Shanxi01>
	</div>
</template>
<script>
import Shanxi01 from './shanxi/Shanxi-01.vue'
export default {
	name: 'Shanxi',
	data () {
		return {
			className: 'shanxi',
		}
	},
	methods: {
		
	},
	components: {
		Shanxi01
	}
}
	
</script>
<style lang='less'>
	@import '../assets/less/shanxi.less';
</style>