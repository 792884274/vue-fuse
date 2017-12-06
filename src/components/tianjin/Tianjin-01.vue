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
		<div class="vs html">
			<pre  class="pre">
				<code>
&lt;div class=&quot;item clearfix&quot;&gt;
  &lt;div class=&quot;btn btn-default f_l&quot; 
    @click=&quot;check(item)&quot; 
    :class=&quot;{active:item.checked}&quot;&gt;
    选择
  &lt;/div&gt;
  &lt;div class=&quot;item-info clearfix f_r&quot;&gt;
    &lt;span class=&quot;price&quot;&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control&quot; 
	  :placeholder=&quot;item.price&quot; aria-describedby=&quot;sizing-addon3&quot; 
	  v-model=&quot;item.price&quot; 
	  @keyup=&quot;calculateTotal&quot;&gt;
	  &amp;nbsp;元&amp;nbsp;&amp;nbsp;
    &lt;/span&gt;
    &lt;div class=&quot;count&quot;&gt;
      &lt;span class=&quot;reduce btn btn-default btn-xs&quot; 
        v-on:click=&quot;reduce(item)&quot;&gt;
      -
      &lt;/span&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control number&quot; 
        :placeholder=&quot;item.number&quot; aria-describedby=&quot;sizing-addon3&quot; 
        v-model=&quot;item.number&quot; @keyup=&quot;calculateTotal&quot;&gt;
      &lt;span class=&quot;add btn btn-default btn-xs&quot; 
        v-on:click=&quot;add(item)&quot;&gt;
      +
      &lt;/span&gt;
    &lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
			</code></pre>
		</div>

		<div class="vs js">
			<pre><code>
data () {
  return {
    totalPrice: 0
  }
},
props: [&#39;item&#39;],
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
}
</code></pre>
		</div>

		<div class="vs">
			<ul>
				<li>1.<code>this.item</code>为父组件通过属性<code>item</code>传过来的数据，使用方法和<code>data(){}</code>中数据一样。</li>
				<li>2.<code>calculateTotal</code>方法计算总价格。在单行选中的状态下，通过单价*数量计算总价格，未选中状态下总价格为0。</li>
				<li>3.<code>reduce</code>、<code>add</code>方法改变商品数量，再通过<code>calculateTotal</code>方法计算总价格。</li>
				<li>4.input通过<code>v-model</code>实现单价和数量的双向数据绑定。input触发，<code>keyup</code>事件时输入框<code>calculateTotal</code>方法计算总价格。</li>
			</ul>
		</div>
	</div>
</template>
<script>
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
		}
	}
	
</script>
<style lang='less'>
	// @import '../../assets/less/tianjin.less';
</style>