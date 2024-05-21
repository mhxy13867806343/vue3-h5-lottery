
<script setup>

import { getCity,getHotcity} from "@/api/outer";
import { cacheDataRef , setStorageSync,getStorageSync } from "@/common/tools";
onMounted(() => {
	if(!getStorageSync ( cacheDataRef.city ).length){
		getCity().then(res => {
			setStorageSync(cacheDataRef.city, res||[])
		}).catch(err => {
		})
	}
	if(!getStorageSync ( cacheDataRef.hotcity ).length){
		getHotcity().then(res => {
			setStorageSync(cacheDataRef.hotcity, res.topCityList ||[])
		}).catch(err => {
		})
	}
})
</script>
<template>
	<view>
		<van-cell-group inset title="功能列表">
<!--			<van-cell title="正在热门电影" value="正在热门电影"  is-link to="/pages/movieOnInfo/movieOnInfo" center/>-->
<!--			<van-cell title="视频搜索" value="视频搜索"  is-link to="/pages/mmvideo/mmvideo" center/>-->
			<van-cell title="未来十五日天气" value="未来十五日天气"  is-link to="/pages/weather15/weather15" center/>
<!--			<van-cell title="短剧搜索" value="短剧搜索"  is-link to="/pages/duanju/duanju" center/>-->
		</van-cell-group>
		<van-cell-group inset title="其他功能" v-if="0">
			<van-cell title="历史上的今天" value="历史上的今天"  is-link to="/pages/todayhistory/todayhistory" center/>
			<van-cell title="全国油价查询" value="全国油价查询"  is-link to="/pages/gasolinePriceQuery/gasolinePriceQuery" center/>
			<van-cell title="图片搜索" value="图片搜索"  is-link to="/pages/picture/picture" center/>
			<van-cell title="文本敏感词检测" value="文本敏感词检测"  is-link to="/pages/word/word" center/>
			<van-cell title="文本内容" value="文本内容"  is-link to="/pages/wordcloud/wordcloud" center/>
			<van-cell title="星期四和日历" value="星期四和日历"  is-link to="/pages/kfclunar/kfclunar" center/>
			<van-cell title="百科全书" value="百科全书"  is-link to="/pages/baike/baike" center/>
			<van-cell title="垃圾分类" value="垃圾分类"  is-link to="/pages/rubbish/rubbish" center/>
			<van-cell title="快递查询" value="快递查询"  is-link to="/pages/delivery/delivery" center/>
			<van-cell title="查询手机号归属地" value="查询手机号归属地"  is-link to="/pages/findMobile/findMobile" center/>
			<van-cell title="集合列表" value="集合列表"  is-link to="/pages/hotlistall/hotlistall" center/>
			<van-cell title="摸鱼" value="摸鱼"  is-link to="/pages/touchTheFish/touchTheFish" center/>
		</van-cell-group>
	</view>
</template>



<style scoped
       lang="scss">

</style>
