<script setup>
import useListMore from "@/hooks/useListMore";
import store from "@/store";
import { getGithubSearchMore , getGithubSearchUrlMore } from "@/api/outer";
import { formatNumber } from "@/common/tools";

const categoryLable=ref("")//热门
const categoryValue=ref("")//热门
const periodLable=ref("")//今日
const periodValue=ref("")
const langLable=ref("")//语言
const langValue=ref("")

const categorySelector=ref([
	{
		label:'热门',
		category : "trending"
	},
	{
		label:'新生',
		category:'upcome',
	},
])//分类
const periodSelector=ref([
	{
		label:'今日',
		category:'day',
	},
	{
		label:'本周',
		category:'week',
	},
	{
		label:'本月',
		category:'month',
	},
])//时间
const categoryIndex=ref(-1)//分类
const periodIndex=ref(-1)//时间
const langIndex=ref(-1)//语言
const langSelector=ref([])//语言
const iscategory=ref(false)//是否显示分类
const isperiod=ref(false)//是否显示时间
const islang=ref(false)//是否显示语言
const search=ref("")//搜索
const  {isLenMore,list,offset,limit,getGithubSearchUrlMoreCbAjax,onListReset,onOffsetReset,onClickOffset : onClickOffset1}=useListMore()
onMounted(()=>{
	init()
	
})
const init=()=>{
	categoryIndex.value=0
	categoryLable.value=categorySelector.value[0].label
	categoryValue.value=categorySelector.value[0].category
	periodIndex.value=0
	periodLable.value=periodSelector.value[0].label
	periodValue.value=periodSelector.value[0].category
	getGithubSearchMoreQuqery("")
	getGithubSearchUrlMoreInit()
	
}
const getGithubSearchUrlMoreInit=()=>{
	onListReset()
	getGithubSearchUrlMoreAjax1()
}
const getGithubSearchUrlMoreAjax1=()=>{
	getGithubSearchUrlMoreAjax({
		period:periodValue.value,
		offset:offset.value,
		lang:langLable.value,
		category:categoryValue.value,
		limit:limit.value,
	})
}
const onClickOffset=()=>{
	onClickOffset1(getGithubSearchUrlMoreAjax1)
}
const getGithubSearchUrlMoreAjax=(data)=>{
	getGithubSearchUrlMoreCbAjax(getGithubSearchUrlMore,data)
}
const getGithubSearchMoreQuqery=(q="")=>{
	search.value=q
	langSelector.value=[]
	langIndex.value=-1
	getGithubSearchMore({
		q
	}).then(res=>{
		langSelector.value=res
	}).catch(e=>{
	
	})
}
// 分类
const onPeriodClick=(item,index)=>{
	periodLable.value=item.label
	periodValue.value=item.category
	periodIndex.value=index
	isperiod.value=false
	onOffsetReset()
	getGithubSearchUrlMoreInit()
}
// 时间
const onCategoryClick=(item,index)=>{
	categoryLable.value=item.label
	categoryIndex.value=index
	categoryValue.value=item.category
	iscategory.value=false
	onOffsetReset()
	getGithubSearchUrlMoreInit()
}
// 语言
const onLangClick=(item,index)=>{
	langLable.value=item.text
	langIndex.value=index
	langValue.value=item.id
	islang.value=false
	onOffsetReset()
	store.dispatch("setHistryList",item.text)
	getGithubSearchUrlMoreInit()
}
// 搜索
const searchStyleComputed=computed(()=>{
	const height=window.innerHeight
	const h=(height+100)<=500?(height+300)*2:(height+100)
	return {
		height:h+'rpx',
		overflowY:'scroll'
	}
})

</script>
<template>
	<view class="app-container">
		<van-sticky>
		<van-cell-group inset class="van-hairline--top-bottom1">
			<van-cell title="热度" center :label="categoryLable" @click="iscategory=true"/>
			<van-cell title="时间" center :label="periodLable" @click="isperiod=true"/>
			<van-cell title="语言" center :label="langLable"  @click="islang=true"/>
		</van-cell-group>
		</van-sticky>
		<scroll-view class="scroll-view_H " scroll-y>
			<view v-for="(item,index) in list" :key="`${index}-${item.description}`" class="scroll-view-item_H search-data">
				<view class="search-h1-40rpx" >{{ item.reponame}}
				<uv-image v-if="item&&item.owner&&item.owner.avatar" :src="item&&item.owner&&item.owner.avatar"
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
				<view class="search-uv-flex">
					<view class="search-h1-32">
						<text class="iconfont icon-fork"></text>
						{{ formatNumber(item.starCount)}}</view>
					<view class="search-h1-32"> <text class="iconfont icon-xingxing"></text>{{ formatNumber(item.forkCount)}}</view>
					<view class="search-h1-32"> <uv-link :href="item.url" :text="`打开${item.username}此仓库页面`"/></view>
				</view>
				<view class="search-uv-flex">
					<view class="search-h1-26" v-html="item.description">
					</view>
				</view>
			</view>
			<uv-empty v-if="!list.length" text="没有这个记录哦!!!"></uv-empty>
			<uv-button type="primary" :text="!isLenMore?'下一页':'没有更多了哦!'" @click="onClickOffset"
			           :disabled="isLenMore"
			v-if="list.length"
			></uv-button>
		</scroll-view>
		<van-action-sheet v-model="iscategory" title="按分类">
			<van-cell-group inset>
				<van-cell :title="a.label"
				          :title-class="categoryIndex==b?'title-period':''"
				v-for="(a,b) in categorySelector" :key="b"
				          @click="onCategoryClick(a,b)"
				/>
			</van-cell-group>
		</van-action-sheet>
		<van-action-sheet v-model="isperiod" title="按时间">
			<van-cell-group inset>
				<van-cell :title="a.label"
				          :title-class="periodIndex==b?'title-period':''"
				          @click="onPeriodClick(a,b)"
				          v-for="(a,b) in periodSelector" :key="b"
				/>
			</van-cell-group>
		</van-action-sheet>
		<van-action-sheet v-model="islang" title="按语言">
			<van-sticky>
			<van-search v-model="search" placeholder="请输入搜索语言关键词"  show-action
			@search="getGithubSearchMoreQuqery(search)"
			
			/>
				<Histry @click="item=>getGithubSearchMoreQuqery(item)"/>
			</van-sticky>
			<van-cell-group inset :style="searchStyleComputed">
				<van-cell :title="a.text"
				          @click="onLangClick(a,b)"
				          :title-class="langIndex==b?'title-period':''"
				          v-for="(a,b) in langSelector" :key="b"
				/>
			</van-cell-group>
		</van-action-sheet>
	</view>
</template>



<style lang="scss" scoped>
.van-hairline--top-bottom1{
	display: flex;
}
.title-period{
	color: #07c160;
}
.scroll-view-item_H{
	margin-bottom: 30rpx;
	.search-h1-40rpx,.search-h1-32{
		padding-bottom: 14rpx;
	}
	.search-h1-32{
		margin-right: 18rpx;
	}
	.iconfont{
		margin-right: 10rpx;
	}
	.search-h1-26{
		color: #888;
		padding-bottom: 30rpx;
	}
}

</style>
