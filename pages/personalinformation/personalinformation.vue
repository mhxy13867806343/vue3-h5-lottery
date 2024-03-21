<script setup>
</script>
<template>
	<view class="app-container">
		<uv-cell-group >
			<uv-cell title="当前用户昵称" isLink url="/pages/userUpdate/userUpdate"
			value="去修改昵称"
			         label="123"
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
