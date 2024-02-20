<script>
export default {
	name : "index",
	props:{
		className:{
			type:String,
			default:"tip"
		},
		content:{
			type:String,
			default:"注意：送货时间和车牌号相同的运单，会一起进行线路规划"
		}
	},
	data(){
		return {

		}
	},
	computed:{
		isSlot(){
			return this.content.length>0
		}
	},
	methods:{

	},
	mounted(){

	},
	created(){
	}
}
</script>

<template>
<view :class="className">
	<text v-if="!isSlot">{{content}}</text>
	<slot v-else></slot>
</view>
</template>

<style scoped
       lang="scss">

</style>
