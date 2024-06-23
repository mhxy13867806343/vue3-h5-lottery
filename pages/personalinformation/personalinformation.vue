<script setup>
import useInfo from "@/hooks/useInfo";
import dayjs from "dayjs";
const {data} = useInfo();
const birtehday=computed(()=>{
	
	const createTime = dayjs(data.value.createTime*1000);

// 获取当前时间
	const now = dayjs();

// 计算时间差
	const diffInDays = now.diff(createTime, 'day');
	const diffInMonths = now.diff(createTime, 'month');
	const diffInYears = now.diff(createTime, 'year');
	let binary='0天'
// 根据需求展示时间差
	if (diffInDays < 1) {
		binary='0天'
	} else if (diffInMonths < 1) {
		binary=`${diffInDays}天`
	} else if (diffInYears < 1) {
		binary=`${diffInMonths}月`
	} else {
		binary=`${diffInYears}年`
	}
	const nextAnniversary = createTime.add(diffInYears + 1, 'year');
	const daysUntilNextAnniversary = nextAnniversary.diff(now, 'day');
	 return {
		 binary,
		 daysUntilNextAnniversary,
		 nextAnniversary
	 }
})
</script>
<template>
	<view class="app-container">
		<uv-cell-group >
			<uv-cell title="当前用户状态" center isLink
			         :value="+data.status===0?'正常':'禁用'"
			         url="/pages/userUpdate/userUpdate"
			         label="修改用户信息"
			        
			></uv-cell>
			<uv-cell title="当前用户昵称" center isLink
			         :url="+data.status===0?'/pages/userUpdate/userUpdate':''"
			value="去修改昵称"
			         :label="`昵称:${data.name}`"
			></uv-cell>
			<uv-cell title="修改密码" center isLink :url="+data.status===0?'/pages/changePassword/changePassword':''"
			         value="修改密码"
			         :label="+data.status===0?'允许修改密码':'不允许修改密码'"
			></uv-cell>
			<uv-cell title="绑定邮箱" center isLink :url="data.emailStatus===0?'/pages/bindEmail/bindEmail':''"
			         :value="data.emailStatus===0?'绑定邮箱':'已绑定邮箱'"
			         :label="data.emailStatus===1?data.email:'绑定邮箱'"
			></uv-cell>
			<uv-cell title="已更新时间" center
			         :label="`此用户已创建${birtehday&&birtehday.binary}`"
			         :value="`离下一次还有${birtehday&&birtehday.daysUntilNextAnniversary}天`"
			></uv-cell>
		</uv-cell-group>
	</view>
</template>



<style lang="scss" scoped>
:deep(.uv-tabs__wrapper__nav__item) {
	// 定义基本宽度变量
	--item-width-1: 100%;
	--item-width-2: 50%;
	--item-width-3: 33.33%;
	--item-width-4: 25%;
	--item-width-5: 20%;
	--item-width-auto: auto;
	
	// 通过mixin简化重复样式的生成
	@mixin set-width($number, $width) {
		&-numWidth#{$number} {
			width: $width;
		}
	}
	
	// 使用mixin生成样式
	@include set-width(1, var(--item-width-1));
	@include set-width(2, var(--item-width-2));
	@include set-width(3, var(--item-width-3));
	@include set-width(4, var(--item-width-4));
	@include set-width(5, var(--item-width-5));
	&-numWidth-auto {
		width: var(--item-width-auto);
	}
}

</style>
