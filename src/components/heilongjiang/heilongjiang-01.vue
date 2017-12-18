<template>
	<div class="heilongjiang-01">
		<div class="exh">
			<ul class="goods lc">
				<li class="goods-item lc-item" v-for="item in items">
					<img src="../../assets/images/logo.png" alt="" class="goods-img f_l lc-img">
					<div class="count f_r">
						<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item,1)">-</span>
						<input type="text" class="form-control number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculate">
						<span class="add btn btn-default btn-xs" v-on:click="add(item,1)">+</span>
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
				items: [
					{
						number: 0
					},
					{
						number: 0
					},
					{
						number: 0
					}
				],
				totalNumber: 0
			}
		},
		mounted() {
			console.log(this.$store);
		},
		methods: {
			add(item,number) {
				item.number+=parseInt(number);
				this.$store.dispatch('addNumber',parseInt(number));
			},
			reduce(item,number) {
				if (item.number==0) return;
				item.number-=parseInt(number);
				this.$store.dispatch('reduceNumber',parseInt(number));
			},
			calculate(){
				var _this=this;
				this.totalNumber=0;
				this.items.forEach(function (item) {
					_this.totalNumber+=Number(item.number);
				})
				this.$store.dispatch('calculateNumber',this.totalNumber);
			}
		}
	}
</script>
<style lang='less'>
	
</style>

