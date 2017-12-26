<template>
	<div class="vs">
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
		name: 'analysis-02'
	}		
</script>
<style>
	
</style>
