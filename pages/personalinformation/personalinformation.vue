<script setup>
import useInfo from "@/hooks/useInfo";
const {data} = useInfo();
</script>
<template>
	<view class="app-container">
		<uv-cell-group >
			<uv-cell title="当前用户昵称" center isLink url="/pages/userUpdate/userUpdate"
			value="去修改昵称"
			         :label="`昵称:${data.name}`"
			></uv-cell>
			<uv-cell title="修改密码" center isLink url="/pages/changePassword/changePassword"
			         value="修改密码"
			         label=""
			></uv-cell>
			<uv-cell title="绑定邮箱" center isLink :url="data.emailStatus===0?'/pages/bindEmail/bindEmail':''"
			         :value="data.emailStatus===0?'绑定邮箱':'已绑定邮箱'"
			         :label="data.emailStatus===1?data.email:'绑定邮箱'"
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
