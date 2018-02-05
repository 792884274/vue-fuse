<template>
	<div class="shanghai">
		<Gotop :className="className"></Gotop>
		<Shanghai01 :tabs="tabs"></Shanghai01>
	</div>
</template>
<script>
	import Shanghai01 from './shanghai/Shanghai-01.vue'
	export default{
		name: 'Shanghai',
		data () {
			return {
				className: 'shanghai',
				tabs: {
					buttons: [
						{
							text: 'tab1'
						},
						{
							text: 'tab2'
						},
						{
							text: 'tab3'
						},
						{
							text: 'tab4'
						},
						{
							text: 'tab3'
						},
						{
							text: 'tab4'
						},
						{
							text: 'tab3'
						},
						{
							text: 'tab4'
						},
						{
							text: 'tab5'
						}
					],
					contents: [
						{
							text: '内容1'
						},
						{
							text: '内容2'
						},
						{
							text: '内容3'
						},
						{
							text: '内容4'
						},
						{
							text: '内容3'
						},
						{
							text: '内容4'
						},
						{
							text: '内容3'
						},
						{
							text: '内容4'
						},
						{
							text: '内容5'
						}
					]
				}
			}
		},
		components: {
			Shanghai01
		}
	}
	
</script>
<style lang='less'>
	@import '../assets/less/shanghai.less';
</style>