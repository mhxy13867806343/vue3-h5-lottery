<script>
export default {
	name : "index",
	props:{
		current: {
			type: Number,
			default: 0
		},
		array:{
			type:Array,
			default:[]
		}
	},
	data(){
		return {
			active:this.current||0,
			menuList:[
				{
					text:'我的订单',
					icon:''
				},
				{
					text:'个人中心',
					icon:''
				}
			],
			customStyle:{}
		}
	},
	computed:{
		menuArray(){
			let list=[];
			if(this.list.length){
				list=this.list
			}else{
				list=this.menuList
			}
			return list
		}
	}
}
</script>

<template>
	<uv-tabbar :value="active" @change="index=>$emit('change', index)"
	           border
	           fixed placeholder
	           :zIndex="5"
	           activeColor=""
	           inactiveColor=""
	           iconSize=""
	           :customStyle="customStyle"
	>
		<uv-tabbar-item :text="item.text" :icon="item.icon"
		 
		 v-for="(item,index) in menuArray" :key="index"
		></uv-tabbar-item>
	</uv-tabbar>
</template>

<style scoped lang="scss">
.uv-tabbar-item__text{

}
</style>
