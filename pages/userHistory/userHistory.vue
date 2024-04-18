<script setup>
const list=ref([
	{
		title:'首页',
		type:0,
		url:'/pages/home/home',
		icon:'',
		label:'switchTab'
	},{
		title:'我的个性签名',
		type:1,
		url:'/pages/signature/signature'
	}
])
const histComputed=computed(()=>{
	return list.value.map((item,index)=>{
		if(item.type===0){
			return {
				type:'页面'
			}
		}else{
			return {
				type:'功能'
			}
		}
	})
})
const navigateTo=(item)=>{
	if(item.type>0){
		uni.showToast({
			title: '功能暂未开放',
			icon: 'none'
		})
	}else if(item.type===0){
		uni[item.label]({
			url:item.url
		})
	}
}
</script>
<template>
	<van-cell-group inset>
		<van-cell
			@click="navigateTo(item)"
			v-for="(item, index) in list" :key="index" :is-link="item.type===0"
			:title="item.title" :value="histComputed[index].type" :label="`操作类型:${histComputed[index].type}`" />
	</van-cell-group>
</template>



<style lang="scss">

</style>
