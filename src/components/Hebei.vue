<template>
	<div class="hebei">
		<Gotop :className="className"></Gotop>
		<div class="exh">
			<ul class="goods">
				<li class="goods-item" v-for="item in items">
					<img src="../assets/images/logo.png" alt="" class="goods-img f_l">
					<div class="count f_r">
						<span class="reduce btn btn-default btn-xs" v-on:click="reduce(item)">-</span>
						<input type="text" class="form-control number" aria-describedby="sizing-addon3" v-model="item.number" @keyup="calculate">
						<span class="add btn btn-default btn-xs" v-on:click="add(item)">+</span>
					</div>
				</li>
			</ul>
		</div>
		
		<div class="vs header">
			<h5 id="-">子级组件</h5>
		</div>
		<div class="vs html">
			<pre><code>
&lt;ul class=&quot;goods&quot;&gt;
  &lt;li class=&quot;goods-item&quot; v-for=&quot;item in items&quot;&gt;
    &lt;img src=&quot;../assets/images/logo.png&quot; class=&quot;goods-img f_l&quot;&gt;
    &lt;div class=&quot;count f_r&quot;&gt;
      &lt;span class=&quot;reduce btn btn-default btn-xs&quot; 
      	v-on:click=&quot;reduce(item)&quot;&gt;
      	-
      &lt;/span&gt;
      &lt;input type=&quot;text&quot; class=&quot;form-control number&quot; 
      	aria-describedby=&quot;sizing-addon3&quot; 
      	v-model=&quot;item.number&quot; 
      	@keyup=&quot;calculate&quot;&gt;
      &lt;span class=&quot;add btn btn-default btn-xs&quot; 
      	v-on:click=&quot;add(item)&quot;&gt;
      	+
      &lt;/span&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</code></pre>
		</div>
		<div class="vs js">
			<pre><code>data () {
  return {
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
props: [&#39;amount&#39;,&#39;itemsNumber&#39;],
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
    if (this.totalNumber&lt;99) {
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
    this.$emit(&#39;deassign&#39;,this.totalNumber,this.items);
  }
}
</code></pre>
		</div>

		<div class="vs header header-padding">
			<h5 id="-">父级组件</h5>
		</div>
		<div class="vs html">
			<pre><code>&lt;div id=&quot;app&quot;&gt;
  &lt;Nav :amount=&quot;amount&quot;&gt;&lt;/Nav&gt;
  &lt;transition :name=&quot;transitionName&quot;&gt;
    &lt;router-view class=&quot;child-view&quot; 
      :amount=&quot;amount&quot; 
      :itemsNumber=&quot;itemsNumber&quot; 
      @deassign=&quot;numberChange&quot;&gt;&lt;/router-view&gt;
  &lt;/transition&gt;
&lt;/div&gt;
</code></pre>
		</div>
		<div class="vs js">
			<pre><code>data () {
  return {
    transitionName: &#39;slide-right&#39;,
    amount: 0,
    itemsNumber:[]
  }
},
methods:{
  numberChange(number,items){
    this.amount=number;
    this.itemsNumber=items;
  }
}
</code></pre>
		</div>

		<div class="vs">
			<ul>
				<li>1.父组件定义总数量<code>amount</code>和单行的数量 <code>itemsNumber</code>，通过属性传递给子组件。</li>
				<li>2.子组件的数据来源于父组件，在生命周期函数<router-link to="/aomen/lifecycle"><code>created</code></router-link>中获得。</li>
				<li>3.在子组件各行的数量增减函数<code>add</code>、 <code>reduce</code> 调用中，需要有条件判断，如单行数目最小为0、总数目小于99.</li>
				<li>4.输入框<code>keyup</code>事件直接调用<code>calculate</code>。</li>
				<li>5.增减函数和输入框操作中调用的<code>calculate</code>来计算总数量，同时使用<router-link to="/aomen/emit"><code>$emit</code></router-link>来遍历父组件的<code>deassign</code> 事件，并返回总数量<code>this.totalNumber</code>和单行数量<code>this.items</code>。父组件触发<code>deassign</code> 事件，调用<code>numberChange</code>事件，重新给总数量和单行数量赋值。这样再次调用子组件时，数值会重新获得。</li>
			</ul>
		</div>
	</div>
</template>
<script>
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
		}
	}
	
</script>
<style lang='less'>
	@import '../assets/less/hebei.less';
</style>