<script setup>
import { formatDayjsTime  } from "@/common/tools";
import useListMore from "@/hooks/useListMore";
import {getIthomeMore} from '@/api/outer'
const  {isLenMore,list,offset,limit,getGithubSearchUrlMoreCbAjax,onListReset,onOffsetReset,onClickOffset : onClickOffset1,
	loading,
	finished,
	onSearchLoad,
	getListMore
}=useListMore()
onMounted(()=>{
	getListMore(getIthomeMore)
})
</script>
<template>
	<van-list
		v-model="loading"
		:finished="finished"
		:immediate-check="false"
		finished-text="没有更多了"
		@load="onSearchLoad(getIthomeMore)"
	>
		<uni-section title=""  v-for="(item,index) in list" :key="index">
			<uni-card is-shadow  :extra="formatDayjsTime(item&&item.date&&item.date.iso)">
				<text class="uni-body">
					{{ item.title}}
				</text>
				
			</uni-card>
		</uni-section>
	</van-list>
</template>



<style scoped
       lang="scss">

</style>
