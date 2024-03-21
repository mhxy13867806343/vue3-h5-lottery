<script setup>
import {ref} from '@vue/composition-api'
const a=ref(123);
onLoad(()=>{
	console.log('onLoad')
})
</script>
<template>
	<uv-cell-group title="静态功能">
		<uv-cell center title="发动态" isLink url="/pages/dynamic/dynamic"></uv-cell>
		<uv-cell center title="去签名" isLink url="/pages/signature/signature"></uv-cell>
	</uv-cell-group>
</template>



<style lang="scss">

</style>
