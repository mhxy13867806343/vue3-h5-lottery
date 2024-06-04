<script setup>
import useForm from "@/hooks/useForm";
const {    form,
	formRef,
	rules,
	onClickSubmit,
	onClickReset,
	startCountdown}= useForm({
	type: 'bind',
})
</script>
<template>
	<view class="app-container">
		<uv-form labelPosition="left" :model="form" :rules="rules" ref="formRef">
			<uv-form-item label="邮箱地址" prop="email" borderBottom
			              :labelWidth="70"
			>
				<uv-input v-model="form.email" border="none" clearable>
				</uv-input>
			</uv-form-item>
			<uv-form-item 	:labelWidth="70" label="验证码" prop="code" borderBottom>
				<uv-input v-model="form.code" border="none" clearable maxlength="20">
					<template #suffix>
						<view class="search-uv-flex">
							<uv-button type="primary"  size="mini"
							           :disabled="form.disabled"
							           @click="startCountdown('email')"
							           :customStyle="{
							 display: 'inline-block',
  width: '200rpx',
  height: '50rpx',
  lineHeight: '50rpx',
  fontSize: '24rpx',
  borderRadius: '10rpx',
  border: '.5px solid rgb(3 4 94 / 0%)',
  position: 'relative',
  overflow: 'hidden',
      backgroundColor: '#444141'
						}"
							>
								{{  form.text}}
							</uv-button>
						</view>
					</template>
				</uv-input>
			</uv-form-item>
			<uv-button type="primary" text="提交" customStyle="margin-top: 10px" @click="onClickSubmit"></uv-button>
			<uv-button type="error" text="重置" customStyle="margin-top: 10px" @click="onClickReset"></uv-button>
		</uv-form>
	</view>
</template>




<style scoped lang="scss">

</style>
