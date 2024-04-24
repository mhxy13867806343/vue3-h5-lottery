<script setup>
const text=ref('此汽油柴油价格表单位：人民币(元)/升，备注：云南、陕西、四川、辽宁、新疆、青海、西藏，贵州、内蒙古、黑龙江油价没有实现统一价格价格仅供参考使用，今日油价数据来源于各地网友提供的中石油、中石化、壳牌加油站最新价格. 本站对使用该油价数据导致的结果概不承担任何责任。油价调整最新消息')
import useOuters from "@/hooks/useOuters"
const {getGasolinePriceQuery,list}=useOuters()
onMounted(async () => {
	await getGasolinePriceQuery()
})
</script>
<template>
	<view>
		<uv-notice-bar mode="closable" :text="text"></uv-notice-bar>
		<uni-table border stripe emptyText="暂无更多数据" >
		<!-- 表头行 -->
		<uni-tr>
			<uni-th  align="center">名称</uni-th>
			<uni-th   align="center">92#汽油</uni-th>
			<uni-th   align="center">95#汽油</uni-th>
			<uni-th   align="center">98#汽油</uni-th>
			<uni-th  align="center">0#柴油</uni-th>
			<uni-th  align="center">更新时间 </uni-th>
		</uni-tr>
		<!-- 表格数据行 -->
		<uni-tr v-for="(item,index) in list" :key="index">
			<uni-td>{{ item.province}}</uni-td>
			<uni-td>{{ item['92h']}}</uni-td>
			<uni-td>{{ item['95h']}}</uni-td>
			<uni-td>{{ item['98h']}}</uni-td>
			<uni-td>{{ item['0h']}}</uni-td>
			<uni-td>{{ item.date}}</uni-td>
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
