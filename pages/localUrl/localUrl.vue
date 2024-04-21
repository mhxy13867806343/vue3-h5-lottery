<script setup>
import {getStorageSync,cacheDataRef} from '@/common/tools'

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
	
	}if(options.type==='hot'){
		data.value.history=getStorageSync(cacheDataRef.hot)
	
	}
})
</script>
<template>
	<view>
		<view v-if="data.history">
			<web-view :src="data.history" :style="{height: '100vh'}"></web-view>
		</view>
		<view>
			<uv-empty mode="data" />
		
		</view>
	</view>
	
</template>




<style scoped
       lang="scss">

</style>
