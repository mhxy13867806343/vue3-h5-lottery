<script setup>
import useOuters from "@/hooks/useOuters";
const {   searchName,
	apiDataRef,
	systemInfo,
	isLoading,
	getToTchTheFish,onClickSearch}=useOuters();
onMounted(async () => {
	await getToTchTheFish();
})
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="searchName" label="摸鱼标题" placeholder="请输入摸鱼标题" clearable  >
				<template #button>
					<van-button  :type="!searchName.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             :disabled="!searchName.length"  hairline size="normal"
					             @click="onClickSearch(searchName)"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<image v-if="apiDataRef.url&&!isLoading"
			:style="{height:systemInfo.screenHeight+'px'}"
			:src="apiDataRef.url"></image>
		<uv-empty mode="data"
		          v-if="!apiDataRef.url&&isLoading"
		></uv-empty>
	
	</view>
</template>




<style scoped
       lang="scss">
uni-image{
	width: 100%;
}
</style>
