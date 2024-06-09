<script setup>
const tools=[
	{
		name:'python相关',
		list:[
			{
				name:'FastAPI 框架，高性能，易于学习，高效编码，生产可用',
				url:"https://fastapi.tiangolo.com/zh/"
			}
		]
	},
	{
		name:'rust相关',
		list:[
			{
				name:'Rust 语言术语中英文对照表',
				url:"https://rustwiki.org/wiki/translate/english-chinese-glossary-of-rust/"
			}
		]
	},
	{
		name:'正则相关',
		list:[
			{
				name:'正则相关',
				url:"https://any-rule.vercel.app/"
			},
			
		]
	},
	{
		name:'svg图标相关',
		list:[
			{
				name:"qingiconsvg图标",
				url:'https://qingicon.com/'
			},
			{
				name:"iconfont图标",
				url:'https://www.iconfont.cn/?spm=a313x.manage_type_myprojects.i3.d4d0a486a.584f3a81O0ncsX'
			}
		]
	}
]
</script>
<template>
	<uv-cell-group>
		<view class="app-container">
			<view v-for="(a,b) in tools" :key="b">
				<view>{{a.name}}</view>
				<view class="app-container" v-for="(c,d) in a.list" :key="d">
					<uv-text
						
						:text="c.name" isLink :href="c.url" center
						mode="link"
					
					></uv-text>
				</view>
				
			</view>
			<van-cell is-link center title="作者信息" to="/pages/author/author"></van-cell>
		</view>
		
	</uv-cell-group>
</template>




<style scoped
       lang="scss">

</style>
