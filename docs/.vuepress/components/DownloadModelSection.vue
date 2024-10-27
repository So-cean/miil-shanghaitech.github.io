<template>
    <el-card shadow="hover">
      <template #header>
        <div class="card-header">
          <el-icon><Download /></el-icon>
          File
        </div>
      </template>
    </el-card>
  </template>
  
  <script lang="ts" setup>
  import { ElCard, ElDescriptions, ElDescriptionsItem, ElButton, ElIcon } from 'element-plus';
  import { Download } from '@element-plus/icons-vue';
  
  const props = defineProps<{
    hashes: string,
    fileSize: string,
    filename: string,
  }>();
  
  const downloadFile = () => {
    // 下载文件的逻辑
    console.log('Downloading file:', props.filename);
  };
  </script>
  
  <style scoped>
  .card-header {
    display: flex;
    align-items: center;
    justify-content: center; /* 水平居中对齐 */
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .card-header el-icon {
    margin-right: 8px;
    font-size: 18px; /* 确保图标大小与文字大小一致 */
  }
  
  .el-descriptions-item__label {
    font-weight: bold;
  }
  
  .el-button {
    margin-top: 10px;
  }
  </style>
  