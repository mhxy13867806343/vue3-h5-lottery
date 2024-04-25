<script setup>
import { setClipboardData } from "@/common/tools";
import useOuters from "@/hooks/useOuters";

const {getBaike,searchName,contentText ,stausData,inClickSearch,onClearSearch}=useOuters()
const onClickBaike=()=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?type=searchName&url=${stausData.value}`,
		success: res=>{
		}
	})
}
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="searchName" label="百科全书" placeholder="请输入百科全书" clearable
			@clear="onClearSearch"
			>
				<template #button>
					<van-button  :type="!searchName.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             @click="getBaike(searchName)"
					             :disabled="!searchName.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<uv-parse  class="uv-content" :content="contentText" lazy-load	 scroll-table	 selectable use-anchor	></uv-parse>
		<van-cell
			v-if="inClickSearch"
			:title="stausData" center is-link value="查看更多说明" @click="onClickBaike"></van-cell>
		<van-cell
			v-if="inClickSearch"
			title="复制内容" center is-link  @click="setClipboardData(contentText,'复制成功')"></van-cell>
	</view>
</template>




<style scoped
       lang="scss">
.uv-content {
	padding: 24rpx;
	font-size: 32rpx;
	color: $uv-content-color;
	line-height: 1.6;
}
</style>
