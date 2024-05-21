<script setup>
import { cacheDataRef , getStorageSync } from "@/common/tools";

const hotcity = ref([])
onLoad(() => {
	hotcity.value=getStorageSync(cacheDataRef.city)
})
const hotcityComputed=computed(()=>{
	const list=hotcity.value
	return list.map(item=>{
		return item.initial
	})
})
const onClick=(item)=>{
	uni.navigateTo({
		url:`/pages/weather15/weather15?name=${item.name}`
	})
}
</script>
<template>
	<view>
		<van-index-bar :index-list="hotcityComputed" >
			<view v-for="(item,index) in hotcity" :key="index">
				<van-index-anchor :index="item.initial" />
				<van-cell :title="childItem.name" v-for="(childItem,childIndex) in item.list"
				          :key="childIndex"
				@click="onClick(childItem)"
				
				/>
			</view>
		</van-index-bar>
	</view>
</template>



<style lang="scss">

</style>
