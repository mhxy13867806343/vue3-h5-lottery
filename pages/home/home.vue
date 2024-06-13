<script setup>
import { getGithubSearch } from "@/api/outer";
import { cacheDataRef , getStorageSync , setClipboardData , setStorageSync } from "@/common/tools";
const search=ref('')
const currentPage=ref(0)
const dataList=ref( {})
const offset=ref(1)
onMounted(()=>{
	console.log(dataList.value,)
	// onClickSearch("python")
})
const cellRouterList=[
	{
		url:'/pages/githubSearchMore/githubSearchMore?k=1',
		value:'更多github资源'
	},
	{
		url:'/pages/v2ex/v2ex?k=2',
		value:'更多v2ex资源'
	},
	{
		url:'/pages/ithome/ithome',
		value:'更多it之家资源'
	},
	{
		url:'/pages/hot/hot'
		,value:'更多热点资源'
	}
]
const modalRef=ref(null)
const onClickSearch=(q)=>{
	dataList.value={}
	search.value=q
	currentPage.value=0
	offset.value=1
	getGithubSearch1()
}
const replaceUrl=text=>{
	const str=text.replace(/<[^>]+>/g, '')
	return `https://github.com/${str}`
}
const replaceEm=text=>{
	if (!text){
		uni.showToast({
			title: "链接不存在,无法跳转",
			icon: "none"
		})
		return ""
	}
	const str=replaceUrl(text)
	uni.navigateTo({
		url:`/pages/localUrl/localUrl?url=${str}&type=github`,
		success(res){
			uni.showToast({
				title: "跳转成功",
				icon: "success"
			})
		},
		fail(){
			uni.showToast({
				title: "跳转失败",
				icon: "none"
			})
		
		}
	})
}
const onClickGitMore=(url)=>{
	uni.navigateTo({
		url
	})
}
const onPageChange=(page)=>{
	offset.value=page
	getGithubSearch1()
}
const getGithubSearch1=()=>{
	getGithubSearch({
		q:search.value,
		type: "repositories",
		p:offset.value
	}).then(res=>{
		dataList.value=res.result ||{}
	})
}
const homemodel=cacheDataRef.homemodel
onMounted(()=>{
	const temp=getStorageSync(homemodel )
	if(!temp){
		if(modalRef.value){
			modalRef.value.open()
		}
	}
	
})
const onConfirm=()=>{
	modalRef.value.close()
	setStorageSync(homemodel,true)
}
</script>
<template>
	<view class="app-container">
		<van-sticky>
			<van-search placeholder="请输入想要搜索的关键字(限制20个字符)"
			            :show-action="!!search.length"
			            v-model="search" maxlength="20"
			>
				<template #action>
					<div @click="onClickSearch(search)">搜索</div>
				</template>
			</van-search>
			<histry @click="(item,index)=>onClickSearch(item)"/>
			<van-cell-group inset>
				<van-cell is-link center :value="item.value"
				          v-for="(item,index) in cellRouterList"  :key="index"
				          @click.stop="onClickGitMore(item.url)"></van-cell>
			</van-cell-group>
		</van-sticky>
		<view class="search-data app-container" v-if="dataList&&dataList.topics">
			<view class="search-topics">
			  <view class="linked_topic_name p-data">
				  <uv-image
					  observeLazyLoad
					  width="40"
					  height="40"
					  :src="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.logo_url">
					  <template v-slot:loading>
						  <uv-loading-icon color="red"></uv-loading-icon>
					  </template>
					  <template v-slot:error>
						  <view style="font-size: 34rpx;">加载失败</view>
					  </template>
				  </uv-image>
				  {{  dataList&&dataList.topics&&dataList.topics.linked_topic_name}}
			  </view>
			<view class="short_description p-data">
				{{  dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.short_description}}
			</view>
			<view class="href p-data">
			
				
				<view class="result_count">
					{{  dataList&&dataList.result_count}}
				</view>
		
				<view class="created_by">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.created_by}}
				</view>
				<view class="released">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.released}}
				</view>
				<view class="short_description">
					{{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.short_description}}
				</view>
				<view class="stargazer_count">
				 {{dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.stargazer_count||0}}个
				</view>
				<view class="wikipedia">
					<view class="alink">
						<text>github地址：			</text>
						<uv-link :href="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.github_url"
						         text="github地址" under-line />
					</view>
					<view class="alink">
						<text>wikipedia_url:</text>
						<uv-link :href="dataList&&dataList.topics&&dataList.topics.curated_topic&&dataList.topics.curated_topic.wikipedia_url"
						         text="wikipedia地址" under-line />
					</view>
				</view>
			</view>
			</view>
		</view>
		<view class="page-container" v-if="dataList&&dataList.results&&dataList.results.length">
			<view v-for="(repo, index) in dataList.results" :key="index" class="repository-item">
				<uv-image class="avatar"
				          observeLazyLoad
				          width="40"
				          height="40"
				          :src="`https://github.com/${repo&&repo.repo&&repo.repo.repository&&repo.repo.repository.owner_login}.png?size=40`">
					<template v-slot:loading>
						<uv-loading-icon color="red"></uv-loading-icon>
					</template>
					<template v-slot:error>
						<view style="font-size: 34rpx;">加载失败</view>
					</template>
				</uv-image>
				<view class="repo-content">
					<text class="repo-name" v-html="repo.hl_name"></text>
					<text class="repo-description" v-html=" repo.hl_trunc_description"></text>
					<view class="repo-details">
						<text class="stars">
							<text class="star-icon">★</text> {{ repo.stars }}
						</text>
						<text class="language">{{ repo.language }}</text>
						<view @click.stop="setClipboardData(replaceUrl(repo.hl_name))">
							<uv-icon size="30" name="order"
							
							></uv-icon>
						</view>
					</view>
				</view>
			</view>
		</view>
		<van-empty description="搜索一下吧" v-else></van-empty>
		<van-pagination
			@change="onPageChange"
			v-if="dataList&&dataList.page_count>0" v-model="currentPage" :total-items="dataList&&dataList.page_count" :show-page-size="5">
			<template #prev-text>
				<van-icon name="arrow-left" />
			</template>
			<template #next-text>
				<van-icon name="arrow" />
			</template>
			<template #page="{ text }">{{ text }}</template>
		</van-pagination>
		<uv-modal ref="modalRef" title="说明"  zoom @confirm="onConfirm">
			<view class="slot-content">
				<view class="slot-content-connitem">
					后端由python和fastapi实现相关的接口
				</view>
				<view class="slot-content-connitem">
					前端由vue/uniapp相关的组件实现界面的展示，交互和样式处理
				</view>
			</view>
		</uv-modal>
	</view>
</template>
<style scoped lang="scss">

.repository-item,.search-data{
	box-shadow: 0 0 12rpx 1px hsla(0, 0%, 64.7%, .2);
	margin-bottom: 20rpx;
	border-radius: 15rpx;
}
.linked_topic_name {
	font-size: 48rpx;
	font-weight: 500;
	text-align: right;
	color: #333;
	display: flex;
	justify-content: flex-end;
	padding: 20rpx; /* 保持内边距一致 */
}

.short_description {
	font-size: 30rpx;
	color: #666;
	padding: 20rpx; /* 统一应用到所有描述部分 */
}

.href {
	font-size: 28rpx;
	color: #666;
	padding: 20rpx 0; /* 调整链接部分的内边距 */
}

.wikipedia .alink {
	display: flex;
}

.page-container {
	padding: 30rpx;
}

.repository-item {
	display: flex;
	align-items: center;
	padding: 20rpx 0;

}

.avatar {
	width: 80rpx;
	height: 80rpx;
	border-radius: 40rpx;
	margin-right: 20rpx;
	margin-left: 20rpx;
}

.repo-content {
	flex-grow: 1;
}

.repo-name {
	font-size: 32rpx;
	font-weight: bold;
}

.repo-description {
	font-size: 28rpx;
	color: #666;
	width: 100%;
	display: inline-block;
}

.repo-details {
	display: flex;
	align-items: center;
	margin-top: 10rpx;
}

.stars {
	display: flex;
	align-items: center;
	margin-right: 20rpx;
}

.star-icon {
	color: #ffd700;
}

.language {
	font-size: 28rpx;
	color: #007aff;
}
::v-deep .van-sticky--fixed{
	background: #fff;
}
</style>
