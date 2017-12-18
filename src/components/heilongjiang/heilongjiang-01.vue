<template>
	<div class="heilongjiang-01">
		<div class="exh">
			<ul class="goods lc">
				<li class="goods-item lc-item" v-for="item in items">
					<img src="../../assets/images/logo.png" alt="" class="goods-img f_l lc-img">
					<div class="count f_r">
						<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
						<input type="text" class="form-control number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculate">
						<span class="add btn btn-default btn-xs" v-on:click="add(item)">+</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'heilongjiang-01',
		data () {
			return {
				
			}
		},
		mounted() {
			// console.log(this.$store);
		},
		computed: {
			items (){
				return this.$store.getters.getItems
			}
		},
		methods: {
			add(item) {
				item.number++;
				this.calculate();
			},
			reduce(item) {
				if (item.number==0) return;
				item.number--;
				this.calculate();
			},
			calculate(){
				var _this=this;
				var total=0;
				var obj={
					items: [],
					total: 0
				};
				obj.items=this.items;
				this.items.forEach(function (item) {
					obj.total+=Number(item.number);
				})
				this.$store.dispatch('calculateNumber',obj);
			}
		}
	}
</script>
<style lang='less'>
	
</style>

