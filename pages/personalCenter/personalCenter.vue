<script setup>
import {ref} from '@vue/composition-api'
const a=ref(123);
onLoad(()=>{
	console.log('onLoad')
})
</script>
<template>
	<view>
	test123
		<view>{{ a+1}}</view>
		<Mtabbar />
	</view>
</template>



<style lang="scss">

</style>
