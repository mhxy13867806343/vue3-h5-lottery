<script setup>
import useTabList from "@/hooks/useTabList";
const {current,
	search,
	tabList,
	handleTabChange,
	handleTransition,
	onSearch}=useTabList()
</script>
<template>
	<view class="app-container">
		<uv-sticky offset-top="0" customNavHeight="0">
			<van-search
				v-model="search"
				:show-action="search.length>0"
				placeholder="请输入搜索关键词"
				@search="onSearch(search)"
			>
				<template #action>
					<div @click="onSearch(search)">
						搜索
					</div>
				</template>
			</van-search>
			<uv-tabs
				:list="tabList"
				lineColor="#f56c6c"
				:activeStyle="{
			color: '#303133',
			fontWeight: 'bold',
			transform: 'scale(1.05)',
    	}"
				:current="current"
				@change="handleTabChange"
				:scrollable="tabList.length>7"
			></uv-tabs>
		</uv-sticky>
		
		<swiper class="swiper" circular  :autoplay="false" :interval="3000"
		        :current="current"
		        @change="handleTransition"
		        :duration="500">
		</swiper>
		<scroll-view   scroll-y="true" class="scroll-Y"  scroll-x="true">
			<view v-for="(item, index) in 300" :key="index">
				{{item}}
			</view>
		</scroll-view>
	</view>
</template>

<style lang="scss">

</style>
