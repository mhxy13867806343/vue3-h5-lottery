<script setup>
import { formatDayjsTime  } from "@/common/tools";
import useListMore from "@/hooks/useListMore";
import {getIthomeMore} from '@/api/outer'
const  {list,
	loading,
	finished,
	onSearchLoad,
	getListMore,offset,limit
}=useListMore()
onMounted(()=>{
	getListMore(getIthomeMore)
})
</script>
<template>
	<van-list
		v-model="loading"
		:finished="finished"
		:immediate-check="false"
		finished-text="没有更多了"
		@load="onSearchLoad(getIthomeMore)"
	>
		<view  v-for="(item,index) in list" :key="index">
			<uni-section title="" >
				<uni-card is-shadow
				          :title="item.title"
				          :extra="formatDayjsTime(item&&item.date&&item.date.iso)">
					<uv-link :href="item.url" :text="item.title" under-line></uv-link>
					<view class="flex-wrap search-uv-flex">
						<view class="count">
							<text class="iconfont icon-liulan"></text>{{ item.view}}
						</view>
						<view  class="count">
							<text class="iconfont icon-pinglun"></text>{{ item.comment}}
						</view>
						<view  class="count">
							<text class="iconfont icon-icon"></text>{{ item.hot}}
						</view>
						<view  class="count">
							<text class="iconfont "
							      :class="[item.like>9?'icon-xihuan':'icon-xingxing']"
							></text>{{ item.like}}
						</view>
					</view>
				</uni-card>
			
			</uni-section>
		</view>
		
	</van-list>
</template>



<style scoped
       lang="scss">
.count{
	padding: 20rpx;
	.iconfont{
		margin-right: 10rpx;
	}
}
</style>
