<script setup>
const name=ref("")
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="name" label="文本敏感词检测" placeholder="请输入文本敏感词检测" clearable  >
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
