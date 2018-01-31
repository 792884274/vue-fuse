<template>
	<div class="shanxi">
		<Gotop :className="className"></Gotop>
		<Shanxi01></Shanxi01>
		<Shanxi02></Shanxi02>
	</div>
</template>
<script>
import Shanxi01 from './shanxi/Shanxi-01.vue'
import Shanxi02 from './shanxi/Shanxi-02.vue'
export default {
	name: 'Shanxi',
	data () {
		return {
			className: 'shanxi',
		}
	},
	components: {
		Shanxi01,
		Shanxi02
	}
}
	
</script>
<style lang='less'>
	@import '../assets/less/shanxi.less';
	.shanxi.child-view {
	    padding: 0 0 50px;
	}
</style>