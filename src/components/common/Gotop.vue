<template>
	<div class="go-top-container">
		<div class="go-top" @click="goTop"></div>
	</div>
</template>
<script>
	export default{
		name: 'Gotop',
		data () {
			return {
				
			}
		},
		props: ['className'],
		methods: {
			goTop(){
				$('.'+this.className).animate({scrollTop:0},300);
			}
		}
	}
	
</script>
<style lang='less'>
	.go-top{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		height: 2em;
		width: 100%;
		background: transparent;
	}
</style>