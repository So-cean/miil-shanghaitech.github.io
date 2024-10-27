<template>
    <div>
        <el-button type="primary" @click="follow">Follow</el-button>
        <el-button type="success" @click="like">Like</el-button>
        <el-button type="warning" @click="download">Download</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus'
function follow() {
    console.log('follow')
}
function like() {
    console.log('like')
}
function download() {
    console.log('download')
}



</script>

<style scoped>
/* 你可以在这里添加自定义样式 */
</style>