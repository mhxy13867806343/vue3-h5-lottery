<script setup>
const text=ref('此汽油柴油价格表单位：人民币(元)/升，备注：云南、陕西、四川、辽宁、新疆、青海、西藏，贵州、内蒙古、黑龙江油价没有实现统一价格价格仅供参考使用，今日油价数据来源于各地网友提供的中石油、中石化、壳牌加油站最新价格. 本站对使用该油价数据导致的结果概不承担任何责任。油价调整最新消息')
const list=ref([
	{
		Region: "安徽",
		Gasoline92: "8.20",
		Gasoline95: "8.77",
		Gasoline98: "9.65",
		Diesel0: "7.96",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "北京",
		Gasoline92: "8.25",
		Gasoline95: "8.78",
		Gasoline98: "9.79",
		Diesel0: "7.98",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "重庆",
		Gasoline92: "8.31",
		Gasoline95: "8.78",
		Gasoline98: "9.85",
		Diesel0: "8.00",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "福建",
		Gasoline92: "8.21",
		Gasoline95: "8.76",
		Gasoline98: "9.81",
		Diesel0: "7.92",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "甘肃",
		Gasoline92: "8.24",
		Gasoline95: "8.79",
		Gasoline98: "9.66",
		Diesel0: "7.82",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "广东",
		Gasoline92: "8.26",
		Gasoline95: "8.93",
		Gasoline98: "9.91",
		Diesel0: "7.94",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "广西",
		Gasoline92: "8.30",
		Gasoline95: "8.95",
		Gasoline98: "9.94",
		Diesel0: "7.99",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "贵州",
		Gasoline92: "8.37",
		Gasoline95: "8.85",
		Gasoline98: "9.80",
		Diesel0: "8.03",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "海南",
		Gasoline92: "9.36",
		Gasoline95: "9.93",
		Gasoline98: "11.20",
		Diesel0: "8.01",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "河北",
		Gasoline92: "8.24",
		Gasoline95: "8.70",
		Gasoline98: "9.57",
		Diesel0: "7.93",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "黑龙江",
		Gasoline92: "8.27",
		Gasoline95: "8.82",
		Gasoline98: "9.95",
		Diesel0: "7.78",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "河南",
		Gasoline92: "8.25",
		Gasoline95: "8.80",
		Gasoline98: "9.51",
		Diesel0: "7.91",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "湖北",
		Gasoline92: "8.25",
		Gasoline95: "8.83",
		Gasoline98: "9.70",
		Diesel0: "7.92",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "湖南",
		Gasoline92: "8.19",
		Gasoline95: "8.71",
		Gasoline98: "9.56",
		Diesel0: "7.99",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "江苏",
		Gasoline92: "8.21",
		Gasoline95: "8.73",
		Gasoline98: "9.98",
		Diesel0: "7.89",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "江西",
		Gasoline92: "8.20",
		Gasoline95: "8.80",
		Gasoline98: "10.02",
		Diesel0: "7.98",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "吉林",
		Gasoline92: "8.21",
		Gasoline95: "8.85",
		Gasoline98: "9.61",
		Diesel0: "7.85",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "辽宁",
		Gasoline92: "8.36",
		Gasoline95: "8.91",
		Gasoline98: "9.68",
		Diesel0: "7.83",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "内蒙古",
		Gasoline92: "8.18",
		Gasoline95: "8.72",
		Gasoline98: "9.55",
		Diesel0: "7.80",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "宁夏",
		Gasoline92: "8.15",
		Gasoline95: "8.61",
		Gasoline98: "9.77",
		Diesel0: "7.81",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "青海",
		Gasoline92: "8.20",
		Gasoline95: "8.78",
		Gasoline98: "9.55",
		Diesel0: "7.84",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "陕西",
		Gasoline92: "8.13",
		Gasoline95: "8.59",
		Gasoline98: "9.46",
		Diesel0: "7.82",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "上海",
		Gasoline92: "8.21",
		Gasoline95: "8.73",
		Gasoline98: "9.78",
		Diesel0: "7.91",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "山东",
		Gasoline92: "8.21",
		Gasoline95: "8.79",
		Gasoline98: "9.56",
		Diesel0: "7.84",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "山西",
		Gasoline92: "8.19",
		Gasoline95: "8.83",
		Gasoline98: "9.58",
		Diesel0: "7.99",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "四川",
		Gasoline92: "8.34",
		Gasoline95: "8.91",
		Gasoline98: "9.66",
		Diesel0: "7.98",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "天津",
		Gasoline92: "8.24",
		Gasoline95: "8.70",
		Gasoline98: "9.75",
		Diesel0: "7.93",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "西藏",
		Gasoline92: "9.12",
		Gasoline95: "9.71",
		Gasoline98: "10.72",
		Diesel0: "8.47",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "新疆",
		Gasoline92: "8.07",
		Gasoline95: "8.62",
		Gasoline98: "9.56",
		Diesel0: "7.75",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "云南",
		Gasoline92: "8.39",
		Gasoline95: "8.99",
		Gasoline98: "9.72",
		Diesel0: "8.00",
		UpdateTime: "2024-4-19 14:30:01"
	},
	{
		Region: "浙江",
		Gasoline92: "8.21",
		Gasoline95: "8.73",
		Gasoline98: "9.55",
		Diesel0: "7.91",
		UpdateTime: "2024-4-19 14:30:01"
	}
])
import useOuters from "@/hooks/useOuters"
const {getGasolinePriceQuery}=useOuters()
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
			<uni-td>{{ item.Region}}</uni-td>
			<uni-td>{{ item.Gasoline92}}</uni-td>
			<uni-td>{{ item.Gasoline95}}</uni-td>
			<uni-td>{{ item.Gasoline98}}</uni-td>
			<uni-td>{{ item.Diesel0}}</uni-td>
			<uni-td>{{ item.UpdateTime}}</uni-td>
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
