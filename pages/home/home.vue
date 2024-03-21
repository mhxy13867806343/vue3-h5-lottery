<script setup>
    import {
        ref
    } from '@vue/composition-api'
    const title = ref('Hello')
    onLoad(() => {
        console.log('onLoad')
    })
    onReady(() => {
        console.log('onReady')
    })
    defineExpose({
        // 注意要在 defineExpose 函数外定义
        title
    })
</script>
<template>
    <view>
        首页数据
    </view>
</template>
