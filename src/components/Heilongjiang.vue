<template>
	<div class="heilongjiang">
		<Gotop :className="className"></Gotop>
		<Heilongjiang01></Heilongjiang01>
	</div>
</template>
<script>
import Heilongjiang01 from './heilongjiang/heilongjiang-01.vue'
export default {
	name: 'heilongjiang',
	data () {
		return {
			className: 'heilongjiang',
		}
	},
	components: {
		Heilongjiang01
	}
}
	
</script>
<style lang='less'>
	@import '../assets/less/heilongjiang.less';
</style>