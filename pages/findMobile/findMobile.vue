<script setup>
const phone=ref("")
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field
				centerrequired v-model="phone" label="手机号码" placeholder="请输入手机号码" clearable
				maxlength="11"
				type="tel"
			>
				<template #button>
					<van-button  :type="!phone.length?'default':'primary'"
					             
					             :autoplay="2000"
					             :touchable="false"
					             :show-indicators="false" block
					             :disabled="!phone.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<van-cell-group inset>
			<van-cell title="地区" value="110" center/>
			<van-cell title="号码" value="110" center/>
			<van-cell title="名称" value="110" center/>
			<van-cell title="省份" value="110" center/>
			<van-cell title="级别" value="110" center/>
			<van-cell title="复制" value="" center/>
		</van-cell-group>
	</view>
</template>




<style scoped
       lang="scss">

</style>
