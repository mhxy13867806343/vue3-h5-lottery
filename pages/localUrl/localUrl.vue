<script setup>
const data=ref({})
onLoad((options)=>{
	if(options.type=='history'){
		const getTime=new Date().getTime()
		data.value.history=`https://baike.baidu.com/item/${options.title}?timestamp=${getTime}&fromModule=search_history`
	}
})
</script>
<template>
	<view>
		<web-view :src="data.history" :style="{height: '100vh'}"></web-view>
	</view>
</template>




<style scoped
       lang="scss">

</style>
