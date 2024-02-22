<script>
export default {
	name : "index",
	props:{
		current: {
			type: Number,
			default: 0
		},
		type:{
			type:Number,
			default:1
		},
		array:{
			type:Array,
			default(){
				return [
					{
						text:'首页',
						icon:'home'
					},
					{
						text:'个人中心',
						icon:'account'
					}
				]
			}
		}
	},
	data(){
		return {
			active:this.current||0,
			menuList:[
				{
					text:'首页',
					icon:'home'
				},
				{
					text:'个人中心',
					icon:'account'
				}
			],
			customStyle:{}
		}
	},
	computed:{
		menuArray(){
			let list=[];
			if(this.array.length){
				list=this.array
			}else{
				list=this.menuList
			}
			return list
		}
	},
	methods:{
		change(index){
			const router=[
				'/pages/home/home',
				'/pages/personalCenter/personalCenter'
			]
		
			if(this.type===1){
				uni.switchTab({
					url:router[index]
				})
				this.active=index
			}
			
			this.$emit('change',index)
		}
	}
}
</script>

<template>
	<uv-tabbar :value="active" @change="change"
	           border
	           fixed placeholder
	           :zIndex="5"
	           activeColor="#f56c6c"
	           inactiveColor=""
	           iconSize="30"
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
