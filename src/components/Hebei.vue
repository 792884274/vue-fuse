<template>
	<div class="hebei">
		<Gotop :className="className"></Gotop>
		<div class="exh">
			<ul class="goods lc">
				<li class="goods-item lc-item" v-for="item in items">
					<img src="../assets/images/logo.png" alt="" class="goods-img f_l lc-img">
					<div class="count f_r">
						<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
						<input type="text" class="form-control number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculate">
						<span class="add btn btn-default btn-xs" v-on:click="add(item)">+</span>
					</div>
				</li>
			</ul>
		</div>
		<Analysis></Analysis>
	</div>
</template>
<script>
	import Analysis from './hebei/analysis'
	export default {
		name: 'Hebei',
		data () {
			return {
				className: 'hebei',
				totalNumber: 0,
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
				]
			}
		},
		props: ['amount','itemsNumber'],
		created(){
			this.totalNumber=this.amount;
			if (this.itemsNumber.length!=0) {
				this.items=this.itemsNumber;		
			}
		},
		methods:{
			reduce(item){
				if (item.number==0) return;
				item.number--;
				this.calculate();			
			},
			add(item){
				if (this.totalNumber<99) {
					item.number++;
					this.calculate();			
				}
			},
			calculate(){
				var _this=this;
				this.totalNumber=0;
				this.items.forEach(function (item) {
					_this.totalNumber+=Number(item.number);
				})
				this.$emit('deassign',this.totalNumber,this.items);
			}
		},
		components: {
			Analysis
		}
	}
	
</script>
<style lang='less'>
	@import '../assets/less/hebei.less';
</style>