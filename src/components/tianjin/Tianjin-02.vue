<template>
	<div class="tianjin-item tianjin-02">
		<div class="exh tianjin-02-container">
			<div class="check-all">
				<span class="btn btn-default" @click="checkedAll" :class="{active:checkAll}">全选</span>
			</div>
			<ul class="items">
				<li class="item clearfix" v-for="item in items">
					<div class="btn btn-default f_l" @click="check(item)" :class="{active:item.checked}">选择</div>
					<div class="item-info clearfix f_r">
						<span class="price">
							<input type="text" class="form-control" :placeholder="item.price" aria-describedby="sizing-addon3" v-model="item.price" @keyup="calculateTotal">&nbsp;元&nbsp;&nbsp;
						</span>
						<div class="count f_r">
							<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
							<input type="text" class="form-control number" :placeholder="item.number" aria-describedby="sizing-addon3" v-model="item.number">
							<span class="add btn btn-default btn-xs" v-on:click="add(item)">+</span>
						</div>
					</div>
				</li>
			</ul>
			<div class="total-price">
				总计 <span>{{totalPrice}}</span>元
			</div>
		</div>
		
		<div class="vs js">
			<pre><code>
checkedAll(){
  this.checkAll=!this.checkAll;
  if (this.checkAll) {
    var total=0;
    this.items.forEach(function (item) {
      item.checked=true;
      total+=item.price*item.number; 
    }) 
    this.totalPrice=total;     
  } else{
    this.items.forEach(function (item) {
      item.checked=false;
    }) 
    this.totalPrice=0;    
  }
}
</code></pre>
		</div>

		<div class="vs">
			<ul>
				<li>1.<code>calculateTotal</code>方法仍是计算商品总价格。多行情况下，使用<code>forEach</code>函数遍历<code>this.items</code>数据，只有单行在选中状态下才添加到总价格中。</li>
				<li>2.<code>check</code>方法控制单行选择与否。点击过程中计数判断商品每行都选中，如果是则全选按钮触发。</li>
				<li>3.全选按钮点击时触发<code>checkedAll</code>函数，计算全选和全不选时总价格。</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name: 'Tianjin02',
		data () {
			return {
				checkAll: false,
      			totalPrice: 0
      		}
		},
		props: ['items'],
		created (){
		    this.calculateTotal();
		},
		methods: {
			calculateTotal(){
				var total=0;
				this.items.forEach(function (item) {
					if (item.checked) {
						total+=item.price*item.number; 
					} 
				})  
				this.totalPrice=total;
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
				var this_=this;
				var num=0;
				item.checked=!item.checked;
				this.calculateTotal();
				this.items.forEach(function (item) {
					if (!item.checked) {
						this_.checkAll=false;  
						return;
					} else{
						num++;  
					}
				}) 
				if (num==this.items.length) {
					this.checkAll=true;     
				}
			},
			checkedAll(){
				this.checkAll=!this.checkAll;
				if (this.checkAll) {
					var total=0;
					this.items.forEach(function (item) {
						item.checked=true;
						total+=item.price*item.number; 
					}) 
					this.totalPrice=total;     
				} else{
					this.items.forEach(function (item) {
						item.checked=false;
					}) 
					this.totalPrice=0;    
				}
			}
		}
	}
	
</script>
<style lang='less'>
	// @import '../../assets/less/tianjin.less';
</style>