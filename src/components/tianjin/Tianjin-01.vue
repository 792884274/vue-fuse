<template>
	<div class="tianjin-item tianjin-01">
		<div class="exh tianjin-01-container">
			<div class="items">
				<div class="item clearfix">
					<div class="btn btn-default f_l" @click="check(item)" :class="{active:item.checked}">选择</div>
					<div class="item-info clearfix f_r">
						<span class="price">
							<input type="text" class="form-control" :placeholder="item.price" aria-describedby="sizing-addon3" v-model="item.price" @keyup="calculateTotal">&nbsp;元&nbsp;&nbsp;
						</span>
						<div class="count f_r">
							<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
							<input type="text" class="form-control number" :placeholder="item.number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculateTotal">
							<span class="add btn btn-default btn-xs" v-on:click="add(item)">+</span>
						</div>
					</div>
				</div>
			</div>
			<div class="total-price">
				总计 <span>{{totalPrice}}</span>元
			</div>
		</div>
		<Analysis01></Analysis01>
	</div>
</template>
<script>
    import Analysis01 from './analysis-01'
	export default{
		name: 'Tianjin01',
		data () {
			return {
      			totalPrice: 0
      		}
		},
		props: ['item'],
		created (){
		    this.calculateTotal();
		},
		methods: {
			calculateTotal(){
				if (this.item.checked) {
					this.totalPrice=this.item.price*this.item.number; 
				} else{
					this.totalPrice=0; 
				}
			},
			reduce(item){
				if (item.number==0) return;
				item.number--;
				this.calculateTotal();
			},
			add(item){
				item.number++;
				this.calculateTotal();
			},
			check(item){
				item.checked=!item.checked;
				this.calculateTotal();
			}
		},
		components: {
			Analysis01
		}
	}
	
</script>
<style lang='less'>
	// @import '../../assets/less/tianjin.less';
</style>