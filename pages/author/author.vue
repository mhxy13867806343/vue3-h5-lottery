<script setup>
import { getAuthorinfo } from "@/api/outer";
import { setClipboardData } from "@/common/tools";
const data=ref({})
const activeNames=ref("1")
onMounted(()=>{
	getAuthorinfo().then(res => {
		data.value = res;
	});
})

</script>
<template>
	<view class="">
		<van-cell-group inset>
			<uni-card title="作者介绍" extra="作者介绍">
				<van-cell center title="作者qq号" :value="data&&data.authorqq"
				@click="setClipboardData(data&&data.authorqq,'复制成功')"
				></van-cell>
				<van-cell center title="作者邮箱" :value="data&&data.authorEmail"
				          @click="setClipboardData(data&&data.authorEmail,'复制成功')"
				></van-cell>
				<van-cell center title="作者网名" :value="data&&data.authorName"
				
				></van-cell>
				
				<van-cell center title="作者github主页" :value="data&&data.githubHome"
				          @click="setClipboardData(data&&data.githubHome,'复制成功')"
				></van-cell>
				<van-cell center title="作者juejin主页" :value="data&&data.juejinHome"
				          @click="setClipboardData(data&&data.juejinHome,'复制成功')"
				></van-cell>
				<van-cell center title="作者微信"></van-cell>
				<view class="search-uv-flex justify-content-center">
					
					<uv-image :src="$processImg(data&&data.authorImg)"  :fade="true" duration="450"
					          width="150"
					          height="150" observeLazyLoad
					>
						<template v-slot:loading>
							<uv-loading-icon color="red"></uv-loading-icon>
						</template>
						<template v-slot:error>
							<view style="font-size: 24rpx;">加载失败</view>
						</template>
					</uv-image>
				</view>
			</uni-card>
		</van-cell-group>
		<van-collapse v-model="activeNames" accordion>
			<van-collapse-item  :title="data&&data.aiTool&&data.aiTool.chat&&data.aiTool.chat.content"
			>	<van-cell
				center
				v-for="(item,index) in data&&data.aiTool&&data.aiTool.chat&&data.aiTool.chat.list" :key="index"
			>
				<template v-slot:title>
					<uv-link :href="item.url" :text="item.content" :under-line="true"></uv-link>
				</template>
			</van-cell>
			</van-collapse-item>
			<van-collapse-item  :title="data&&data.aiTool&&data.aiTool.code&&data.aiTool.code.content"
			>	<van-cell
				center
				v-for="(item,index) in data&&data.aiTool&&data.aiTool.code&&data.aiTool.code.list" :key="index"
			>
				<template v-slot:title>
					<uv-link :href="item.url" :text="item.id+'-'+item.language+'-'+item.type" :under-line="true"></uv-link>
				</template>
			</van-cell>
			</van-collapse-item>
			<van-collapse-item  title="喜欢的语言"
			>	<van-cell
				center
				v-for="(item,index) in data&&data.loveLanguage" :key="index"
			>
				<template v-slot:title>
					<uv-link :href="item.url" :text="item.name" :under-line="true"></uv-link>
				</template>
			</van-cell>
			</van-collapse-item>
			<van-collapse-item  title="喜欢逛的站点"
			>	<van-cell
				center
				v-for="(item,index) in data&&data.site" :key="index"
			>
				<template v-slot:title>
					<uv-link :href="item.url" :text="item.name" :under-line="true"></uv-link>
				</template>
			</van-cell>
			</van-collapse-item>
		</van-collapse>
		<van-cell-group inset>
			<van-cell center title="作者语录" :value="data&&data.saying"></van-cell>
			<van-cell center title="作者主营" :value="data&&data.industry"></van-cell>
			<van-cell center title="版本号" :value="data&&data.version"></van-cell>
		</van-cell-group>
	</view>
</template>




<style scoped
       lang="scss">

</style>
