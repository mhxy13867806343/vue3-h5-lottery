<script setup>
import { setClipboardData } from "@/common/tools";

const name=ref("")
const list=ref([
	{
		"name": "0049-我的极品总裁老婆（111集）",
		"viewlink": "https://pan.quark.cn/s/d7de389bb168",
		"addtime": "2024-01-18"
	},
	{
		"name": "0111-威震四海(72集)",
		"viewlink": "https://pan.quark.cn/s/37885be28034",
		"addtime": "2024-01-18"
	},
	{
		"name": "1110-重生后太子妃跑路了",
		"viewlink": "https://pan.quark.cn/s/0a7138916e68",
		"addtime": "2024-01-18"
	},
	{
		"name": "1111-重生王妃美又飒（92集）",
		"viewlink": "https://pan.quark.cn/s/121e10d0ccb2",
		"addtime": "2024-01-18"
	},
	{
		"name": "1112-重生王妃惹不起",
		"viewlink": "https://pan.quark.cn/s/6d456faec5e7",
		"addtime": "2024-01-18"
	},
	{
		"name": "1113-周少的替嫁小娇妻（97集）",
		"viewlink": "https://pan.quark.cn/s/c92c50aad439",
		"addtime": "2024-01-18"
	},
	{
		"name": "1114-最强保安（66集）",
		"viewlink": "https://pan.quark.cn/s/d02a8496a262",
		"addtime": "2024-01-18"
	},
	{
		"name": "1115-最强神瞳民工",
		"viewlink": "https://pan.quark.cn/s/a745f7586737",
		"addtime": "2024-01-18"
	},
	{
		"name": "1116-最强桃运小房东（97集）",
		"viewlink": "https://pan.quark.cn/s/157815219484",
		"addtime": "2024-01-18"
	},
	{
		"name": "1118-（逍遥都市）（逍遥圣手）（逍遥在人间）（100集）",
		"viewlink": "https://pan.quark.cn/s/cca746a687df",
		"addtime": "2024-01-18"
	},
	{
		"name": "1119-爱你在尘埃里（75集）",
		"viewlink": "https://pan.quark.cn/s/649822d733f1",
		"addtime": "2024-01-18"
	},
	{
		"name": "2101-千秋我为凰（111集）",
		"viewlink": "https://pan.quark.cn/s/b029902f8ae6",
		"addtime": "2024-01-18"
	},
	{
		"name": "2111-独尊",
		"viewlink": "https://pan.quark.cn/s/a0004ce1a318",
		"addtime": "2024-01-18"
	},
	{
		"name": "2813-AA美女总裁的战帝保镖（111集",
		"viewlink": "https://pan.quark.cn/s/fb122df41ac8",
		"addtime": "2024-01-18"
	},
	{
		"name": "3111-夺命豪宅顾总夫人她又死了（90集）",
		"viewlink": "https://pan.quark.cn/s/2bac0a1689df",
		"addtime": "2024-01-18"
	},
	{
		"name": "3505-美女总裁的战帝保镖（111集）",
		"viewlink": "https://pan.quark.cn/s/4fffb4aafb4c",
		"addtime": "2024-01-18"
	},
	{
		"name": "3638-富可帝国（111集）集数剧情好像有问题，能用就用，不能用就扔掉",
		"viewlink": "https://pan.quark.cn/s/383b9c19ccc5",
		"addtime": "2024-01-18"
	},
	{
		"name": "4111-总裁的绝色新娘 小合集",
		"viewlink": "https://pan.quark.cn/s/6c73b113cfe8",
		"addtime": "2024-01-18"
	},
	{
		"name": "5111-世界对我温柔以待（95集）",
		"viewlink": "https://pan.quark.cn/s/56bbd08e0581",
		"addtime": "2024-01-18"
	},
	{
		"name": "5744-宠妻上瘾：慕少又吃醋了（111集）",
		"viewlink": "https://pan.quark.cn/s/da857b6aede7",
		"addtime": "2024-01-18"
	},
	{
		"name": "6111-龙王出狱之明都风云录（80集）",
		"viewlink": "https://pan.quark.cn/s/cf509cd73dea",
		"addtime": "2024-01-18"
	},
	{
		"name": "09-新：昆仑战神（111集）",
		"viewlink": "https://pan.quark.cn/s/e397eb9de989",
		"addtime": "2024-03-14"
	},
	{
		"name": "19-我的美女总裁老婆 （111集）",
		"viewlink": "https://pan.quark.cn/s/d275fc7185dc",
		"addtime": "2024-03-17"
	},
	{
		"name": "19-我的美女总裁老婆 （111集）",
		"viewlink": "https://pan.quark.cn/s/d275fc7185dc",
		"addtime": "2024-03-17"
	},
	{
		"name": "7570-傲娇女总裁的医皇保镖（111集）",
		"viewlink": "https://pan.quark.cn/s/4198dd6e5c44",
		"addtime": "2024-04-05"
	},
	{
		"name": "7594-圣尊（111集）",
		"viewlink": "https://pan.quark.cn/s/da15d575910e",
		"addtime": "2024-04-05"
	},
	{
		"name": "6995-新：昆仑战神（111集）",
		"viewlink": "https://pan.quark.cn/s/9e17fde17221",
		"addtime": "2024-03-15"
	},
	{
		"name": "7021-我的美女总裁老婆 （111集）",
		"viewlink": "https://pan.quark.cn/s/0d53d4b19ca5",
		"addtime": "2024-03-15"
	},
	{
		"name": "7111-不漏声色的爱&老师不要跑（96集）擦边剧",
		"viewlink": "https://pan.quark.cn/s/cb1c7a67b256",
		"addtime": "2024-03-15"
	}
])
const onTitleClick=(link)=>{
	setClipboardData(link+'#/list/share')
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
				<uni-th  align="center">链接</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr v-for="(item,index) in list" :key="index">
				<uni-td>{{ item.name}}</uni-td>
				<uni-td>{{ item.addtime}}</uni-td>
				<uni-td>
					<text  @click="onTitleClick(item.viewlink)">复制链接</text>
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
