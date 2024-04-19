<script setup>
const name=ref("")
const content = ref("")
const text="Python由荷兰国家数学与计算机科学研究中心的吉多·范罗苏姆于1990年代初设计，作为一门叫做ABC语言的替代品。Python提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言，随着版本的不断更新和语言新功能的添加，逐渐被用于独立的、大型项目的开发。Python在各个编程语言中比较适合新手学习，Python解释器易于扩展，可以使用C、C++或其他可以通过C调用的语言扩展新的功能和数据类型。Python也可用于可定制化软件中的扩展程序语言。Python丰富的标准库，提供了适用于各个主要系统平台的源码或机器码。"
const img="https://bkimg.cdn.bcebos.com/pic/b03533fa828ba61ea8d3c8f6227f800a304e241ff39d?x-bce-process=image/format,f_auto"
content.value = text + `<view><image src="${img}" mode="widthFix" style="width:100%"></image></view>`
</script>
<template>
	<view>
		<van-cell-group inset>
			<van-field  centerrequired v-model="name" label="百科全书" placeholder="请输入百科全书" clearable  >
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
		<uv-parse class="uv-content" :content="content" lazy-load	 scroll-table	 selectable use-anchor	></uv-parse>
	</view>
</template>




<style scoped
       lang="scss">
.uv-content {
	padding: 24rpx;
	font-size: 32rpx;
	color: $uv-content-color;
	line-height: 1.6;
}
</style>
