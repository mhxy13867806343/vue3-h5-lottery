<script setup>
import { getMobile } from '@/api/outer'
const phone=ref("")
const dataPhone=ref({})
const onClickPhone=()=>{
	dataPhone.value=''
	getMobile(phone.value).then(res=>{
		const {code,msg,result}=res
		if(code!==200){
			uni.showToast({
				title:msg,
				icon:"none"
			})
			return
		}
		dataPhone.value=result
	}).catch(err=>{
		console.log(err)
	})
}
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
					             @click="onClickPhone"
					             :disabled="!phone.length"  hairline size="normal"
					>查询</van-button>
				</template>
			</van-field>
		</van-cell-group>
		<van-cell-group inset>
			<van-cell title="地区" :value="dataPhone.city" center/>
			<van-cell title="号码"  :value="dataPhone.num" center/>
			<van-cell title="名称"  :value="dataPhone.name" center/>
			<van-cell title="省份" :value="dataPhone.prov" center/>
			<van-cell title="级别"  :value="dataPhone.type" center/>
			<van-cell title="省code"  :value="dataPhone.postCode" center/>
			<van-cell title="市code"  :value="dataPhone.provCode" center/>
			<van-cell title="区code"  :value="dataPhone.cityCode" center/>
			<van-cell title="地址code"  :value="dataPhone.areaCode" center/>
		</van-cell-group>
	</view>
</template>




<style scoped
       lang="scss">

</style>
