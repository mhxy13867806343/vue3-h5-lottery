<script setup>
const name=ref("")
const list=ref([
	{
		title: "英国古典经济学家李嘉图诞辰",
		lsdate: "1772-04-19"
	},
	{
		title: "美国独立战争第一枪",
		lsdate: "1775-04-19"
	},
	{
		title: "达尔文逝世",
		lsdate: "1882-04-19"
	},
	{
		title: "法国物理学家皮埃尔·居里因车祸身亡",
		lsdate: "1906-04-19"
	},
	{
		title: "罗斯福取消美元的金本位制",
		lsdate: "1933-04-19"
	},
	{
		title: "蒋介石当选“总统”",
		lsdate: "1948-04-19"
	},
	{
		title: "傅作义逝世",
		lsdate: "1974-04-19"
	},
	{
		title: "京剧表演艺术家尚小云逝世",
		lsdate: "1976-04-19"
	},
	{
		title: "贺子珍逝世",
		lsdate: "1984-04-19"
	},
	{
		title: "美国“大卫派”教徒集体自杀",
		lsdate: "1993-04-19"
	},
	{
		title: "“千岛湖”事件主要案犯被逮捕",
		lsdate: "1994-04-19"
	},
	{
		title: "俄克拉荷马爆炸案",
		lsdate: "1995-04-19"
	}
])
const onTitleClick=(title)=>{
	uni.navigateTo({
		url: `/pages/localUrl/localUrl?title=${title}&type=history`
	})
}
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field
				type="number"
				centerrequired v-model="name" label="内容" placeholder="请输入内容" clearable  >
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
		<uni-table border stripe emptyText="暂无更多数据" >
			<!-- 表头行 -->
			<uni-tr>
				<uni-th  align="center">标题</uni-th>
				<uni-th  align="center">时间</uni-th>
				<uni-th  align="center">浏览</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="(item,index) in list" :key="index">
				<uni-td>{{ item.title}}</uni-td>
				<uni-td>{{ item.lsdate}}</uni-td>
				<uni-td>
					<text  @click="onTitleClick(item.title)">去搜索</text>
					</uni-td>
			</uni-tr>
		
		
		</uni-table>
	</view>
</template>




<style scoped
       lang="scss">
::v-deep .uni-table{
	min-width: 100% !important;
}
td.uni-table-td.table--border {
	width: 20%;
	text-align: center !important;
}
</style>
