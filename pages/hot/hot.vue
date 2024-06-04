<script setup>
const active=ref(0)
const tabList=ref([
	{title:'百度热搜榜',list:[],type:'baiduhot'},
	{title:'抖音热搜榜',list:[],type:'douyinhot'},
	{title:'微博热搜榜',list:[],type:'weibohot'},
	{title:'知乎热搜榜',list:[],type:'zhihuhot'},
	{title:'哔哩哔哩热搜榜',list:[],type:'bilihot'},
	{title:'今日头条热搜榜',list:[],type:'toutiaohot'},
	{title:'今日头条热点新闻',list:[],type:'toutiaohotnew'},
])
import{getHotApiMore} from '@/api/outer'
import { formatNumber } from "@/common/tools";
onMounted(()=>{
	getHotApiMore1(tabList.value[active.value].type)
})
const getHotApiMore1=(type)=>{
	tabList.value[active.value].list=[]
	getHotApiMore(type).then(res=>{
		tabList.value[active.value].list=res.result||[]
	})
}
const onChangeTabs=index=>{
	active.value=index
	getHotApiMore1(tabList.value[active.value].type)
}
</script>
<template>
	<van-tabs sticky animated swipeable v-model="active"
	@change="onChangeTabs"
	>
		<van-tab  :title="item1.title"  v-for="(item1,index1) in tabList" :key="index1">
			<view v-for="(item,index) in item1.list" :key="index">
				<uni-section title="" >
					<uni-card is-shadow
					          :title="`${index+1}.${item.name}`"
					          extra="">
						<uv-link :href="item.url" :text="item.name" under-line></uv-link>
						<view class="flex-wrap search-uv-flex">
							<view class="count" >
								{{item.hot}}
							</view>
						</view>
					</uni-card>
				
				</uni-section>
			</view>
			<uv-empty v-if="!tabList[active].list" :text="`暂无${tabList[active].title}相关热点信息`"></uv-empty>
		
		</van-tab>
	</van-tabs>
</template>




<style scoped
       lang="scss">

</style>
