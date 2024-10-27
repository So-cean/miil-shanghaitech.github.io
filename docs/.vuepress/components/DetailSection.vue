<!-- .vuepress/components/DetailSection.vue -->
<template>
  <div class="detail">
    <div class="content-section">
      <ImageSection :image="image" />
      <div class="info-container">
        <h3 class="center-title">{{ title }}</h3>
        <InfoSection :datasetinfo="datasetinfo" :trainingpara="trainingpara" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ImageSection from './ImageSection.vue'
import InfoSection from './InfoSection.vue'
import { DatasetInfo, defaultDatasetInfo } from '../types/datasetinfo';
import { TrainingPara, defaultTrainingPara } from '../types/trainingpara';


const props = defineProps<{
  image?: string,
  title?: string,
  trainingpara?: TrainingPara,
  datasetinfo?: DatasetInfo
}>();

const datasetinfo = { ...defaultDatasetInfo, ...props.datasetinfo };
const trainingpara = { ...defaultTrainingPara, ...props.trainingpara };

</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中对齐 */
  padding: 10px;
  justify-content: center;
}
.content-section {
  display: flex;
  flex-direction: row; /* 横向排列 */
  align-items: flex-start; /* 垂直顶部对齐 */
  justify-content: center; /* 水平居中对齐 */
  width: 100%;
  height: auto;
  overflow: hidden; /* 隐藏溢出部分 */
}
.center-title {
  text-align: center; /* 标题居中 */
  margin-bottom: 8px; /* 标题与内容之间的间距 */
  margin: 5px 0;
  position: relative;
  z-index: 1;
}
.info-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中对齐 */
  justify-content: center; /* 垂直居中对齐 */
  max-width: 500px;
  margin-left: 20px;
  margin-right: 20px;
}

@media (max-height: 600px) {
  .info-container {
    display: none;
  }
  .image-section {
    justify-content: center;
    align-items: center;
  }
}
</style>
