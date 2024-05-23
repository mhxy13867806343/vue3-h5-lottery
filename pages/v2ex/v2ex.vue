<script setup>
import { formatDayjsTime , formatNumber } from "@/common/tools";
import useListMore from "@/hooks/useListMore";
const  {isLenMore,list,offset,limit,getGithubSearchUrlMoreCbAjax,onListReset,onOffsetReset,onClickOffset : onClickOffset1}=useListMore()
import {getV2exMore} from '@/api/outer'
onMounted(()=>{
	init()
})
const init=()=>{
	getV2exMore1({
		offset:offset.value,
		limit:limit.value,
	})
}
const getV2exMore1=(data)=>{
	getGithubSearchUrlMoreCbAjax(getV2exMore,data)
}
const onClickOffset=()=>{
	onClickOffset1(init)
}
</script>
<template>
	<scroll-view class="scroll-view_H " scroll-y>
		<view v-for="(item,index) in list" :key="`${item.id}`" class="scroll-view-item_H search-data">
			<view class="search-h1-40rpx" >{{ item.title}}
			</view>
			<view class="search-uv-flex">
				<view class="search-h1-32">{{ formatDayjsTime(item&&item.date&&item.date.iso)}}</view>
				<view class="search-h1-32"> <uv-link :href="item.url" text="打开此页面"/></view>
			</view>
			<view class="search-uv-flex" v-if="item.img.length">
				
				<uv-image
					v-for="(a,b) in item.img" :key="b"
					:src="a"
				          width="40" fade  duration="450" observeLazyLoad
				          height="40"
				>
					<template v-slot:loading>
						<uv-loading-icon color="red"></uv-loading-icon>
					</template> <template v-slot:error>
					<view style="font-size: 24rpx;">加载失败</view>
				</template>
				</uv-image>
			</view>
		</view>
		<uv-empty v-if="!list.length" text="没有这个记录哦!!!"></uv-empty>
		<uv-button type="primary" :text="!isLenMore?'下一页':'没有更多了哦!'" @click="onClickOffset"
		           :disabled="isLenMore"
		           v-if="list.length"
		></uv-button>
	</scroll-view>
</template>



<style lang="scss">

</style>
