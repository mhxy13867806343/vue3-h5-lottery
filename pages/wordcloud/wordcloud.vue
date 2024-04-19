<script setup>
const name=ref("")
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="name" label="文本内容" placeholder="请输入文本内容" clearable  >
				<template #button>
					<van-button  :type="!name.length?'default':'primary'"
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             :disabled="!name.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<view>
			<image src="https://api.pearktrue.cn/api/wordcloud/img/1250b6b1918782cf6be263eae2696bf3.jpg"></image>
		</view>
	</view>
</template>




<style scoped
       lang="scss">
uni-image{
	width: 100%;
	height: 400rpx;
}
</style>
