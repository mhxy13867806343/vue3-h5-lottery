<script setup>
const data=ref({})
onLoad((options)=>{
	if(options.type=='history'){
		const getTime=new Date().getTime()
		data.value.history=`https://baike.baidu.com/item/${options.title}?timestamp=${getTime}&fromModule=search_history`
	}if(options.type=='duanju'){
		data.value.history=`${options.link}#/list/share`
	}if(options.type==='star'){
		data.value.history=`https://search.douban.com/movie/subject_search?search_text=${options.star}`
	}if(options.type==='movie'){
		data.value.history=`https://m.maoyan.com/asgard/movie/${options.moveId}`
	
	}
})
</script>
<template>
	<web-view :src="data.history" :style="{height: '100vh'}"></web-view>
</template>




<style scoped
       lang="scss">

</style>
