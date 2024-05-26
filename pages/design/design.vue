<script setup>
import {getDesign} from "@/api/outer";
import { formatDayjsTime , formatNumber } from "@/common/tools";
const designList=ref([
	{
		"title":'dribbble',
		"img":"/static/design/dribbble.svg",
	},
	{
		"title":'zcool',
		"img":"/static/design/zcool.png",
	},
	{
		"title":'behance',
		"img":"/static/design/behance.svg",
	},
	{
		"title":'ui',
		"img":"/static/design/ui.png",
	},
	{
		"title":'uisdc',
		"img":"/static/design/uisdc.png",
	},
	
])
const active=ref(0)
import useListMore from '@/hooks/useListMore'
const { offset,
	refDta,
	loading,
	isLen,
	limit,list,onListReset,getJoinOffsetNext,getListMore,offsetReset}=useListMore()
onMounted(()=>{
	isLen.value=false;
	getListMore(getDesign)
})
const onChangeTab=index=>{
	onListReset()
	offsetReset()
	getListMore(getDesign,{
		type:designList.value[index].title
	})
}
const imgComputed=(array=[])=>{
	if(array.length==1) {
		return '100%'
	}if(array.length==2) {
		return '50%'
	}if(array.length==3) {
		return '33.33%'
	}else{
		return '25%'
	}
}
</script>
<template>
	<view class="app-container">
		<van-tabs v-model="active" swipeable sticky animated @change="onChangeTab">
			<van-tab v-for="(item,index) in designList" :key="index"
			:swipe-threshold="3"
			>
				<template #title>
					<view class="">
						<uv-image width="40" height="40" :src="item.img"></uv-image>
					</view>
				</template>
				<view v-for="(item,index) in list" :key="`${item.id}-${index}`"
				ref="refDta"
				>
					<uni-section title="">
						<uni-card is-shadow
						          :title="item.title"
						          extra="">
							<uv-link :href="item.url" :text="item.title" under-line class="a-link"></uv-link>
							<view class="flex-wrap search-uv-flex" v-if="item.img.length">
								<uv-image v-for="(a,b) in item.img" :key="a"
								:src="a" observeLazyLoad
								          :width="imgComputed(item.img)"
								          height="200rpx"
								>
									<template v-slot:loading>
										<uv-loading-icon color="red"></uv-loading-icon>
									</template>
									<template v-slot:error>
										<view style="font-size: 24rpx;">加载失败</view>
									</template>
								</uv-image>
							</view>
							<view v-else-if="item.img&&item.img.url">
								<uv-image
									:src="item.img.url" observeLazyLoad
									:width="300"
									:height="200"
								>
									<template v-slot:loading>
										<uv-loading-icon color="red"></uv-loading-icon>
									</template>
									<template v-slot:error>
										<view style="font-size: 24rpx;">加载失败</view>
									</template>
								</uv-image>
							</view>
							<view v-else-if="item.img&&item.img.mini">
								<uv-image
								          :src="item.img.mini" observeLazyLoad
								          :width="(item.img&&item.img.width)*.7"
								          :height="item.img&&item.img.height"
								>
									<template v-slot:loading>
										<uv-loading-icon color="red"></uv-loading-icon>
									</template>
									<template v-slot:error>
										<view style="font-size: 24rpx;">加载失败</view>
									</template>
								</uv-image>
							</view>
							<view v-else>
								{{ item.url}}
							</view>
							<view class="flex-wrap search-uv-flex">
								<view class="count" >
									<text class="iconfont icon-liulanliang"></text>	{{formatNumber(item.view||item.views||item.viewCount||0)}}
								</view>
								<view class="count" >
									<text class="iconfont icon-xingxing"></text>	{{formatNumber(item.like||item.likes||item.likeCount||0)}}
								</view>
								<view class="count" >
									<text class="iconfont icon-icon"></text>	{{formatNumber(item.hot||0)}}
								</view>
								<view class="count" >
									<text class="iconfont icon-pinglun"></text>	{{formatNumber(item.comment||0)}}
								</view>
							</view>
							<view class="search-h1-32" v-if="item&&item.date&&item.date.iso">{{ formatDayjsTime(item&&item.date&&item.date.iso)}}
							</view>
						</uni-card>
					
					</uni-section>
				</view>
				<uv-empty v-if="!list.length" text="暂无相关资源"></uv-empty>
				
			</van-tab>
		</van-tabs>
		<view class="status-btn-fixed status-btn-width-09 status-btn-bottom">
			<van-button block
			            @click="getJoinOffsetNext(getDesign,{
		type:designList[active].title,
		offset:offset,
		limit:limit,
	})"
			            :loading="loading" type="info" :loading-text="loading?'加载中...':''"
			            v-if="list.length">获取下一页数据</van-button>
		</view>
	</view>
</template>


<style lang="scss">
.count{
	padding-right: 20rpx;
}
</style>
