<template>
	<div class="tianjin">
		<Gotop :className="className"></Gotop>
		<!-- 第一个例子 -->
		<Tianjin01 :item="single"></Tianjin01>
		<!-- 第二个例子 -->
		<Tianjin02 :items="multiLine"></Tianjin02>
	</div>
</template>
<script>
	import Tianjin01 from './tianjin/tianjin-01.vue'
	import Tianjin02 from './tianjin/tianjin-02.vue'
	export default{
		name: 'Tianjin',
		data () {
			return {
				className: 'tianjin',
				single: {
					price: 4,
			        number: 5,
			        checked: false
				},
				multiLine:[
			        {
			          price: 4,
			          number: 5,
			          checked: false
			        },
			        {
			          price: 3,
			          number: 8,
			          checked: false
			        }
			    ]
			}
		},
		components: {
			Tianjin01,
			Tianjin02
		}
	}
	
</script>
<style lang='less'>
	@import '../assets/less/tianjin.less';
</style>