<!-- .vuepress/components/InfoSection.vue -->
<template>
  <div class="info-section">
    <div class="info-box">
      <h4 class="info-title">Dataset Information</h4>
      <div class="info-card">
        <CollapsibleText :text="descriptionText" :maxLines="4" />
        <p><b>Task:</b> {{ datasetinfo?.task }}</p>
        <p><b>Labels:</b></p>
        <CollapsibleText :text="labelsText" :maxLines="4" />
        <p><b>Samples:</b></p>
        <ul>
          <li><b>Train:</b> {{ datasetinfo?.n_samples.train }}</li>
          <li><b>Validation:</b> {{ datasetinfo?.n_samples.validation }}</li>
          <li><b>Test:</b> {{ datasetinfo?.n_samples.test }}</li>
        </ul>
      </div>
    </div>
    <div class="info-box">
      <h4 class="info-title">Experiment Parameter</h4>
      <p v-if="trainingpara"><b>Learning Rate:</b> {{ trainingpara?.learning_rate }}</p>
      <p v-if="trainingpara"><b>Training Epoch:</b> {{ trainingpara?.training_epoch }}</p>
      <p v-if="trainingpara?.convergence_epoch"><b>Convergence Epoch:</b> {{ trainingpara?.convergence_epoch }}</p>
      <p v-if="trainingpara?.other"><b>Other Details:</b> {{ trainingpara?.other }}</p>
    </div>
    <CommentService class="comment-service"></CommentService>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { DatasetInfo, defaultDatasetInfo } from '../types/datasetinfo';
import { TrainingPara, defaultTrainingPara } from '../types/trainingpara';

const props = defineProps<{
  datasetinfo?: DatasetInfo,
  trainingpara?: TrainingPara,
}>();

const datasetinfo = { ...defaultDatasetInfo, ...props.datasetinfo };
const trainingpara = { ...defaultTrainingPara, ...props.trainingpara };

const descriptionText = computed(() => datasetinfo.description || '');

const labelsText = computed(() => {
  return Object.entries(datasetinfo.label)
    .map(([key, label]) => `${key}: ${label}`)
    .join(', ');
});
</script>


<style scoped>
.info-section {
  display: flex;
  flex-direction: column;
  /* 垂直排列 */
  justify-content: center;
  /* 垂直居中对齐 */
  max-width: 500px;
}

.info-box {
  background-color: #f9f9f9;
  /* 设置底色 */
  padding: 10px;
  margin-bottom: 10px;
  /* 设置底部间距 */
  border-radius: 8px;
  /* 设置倒角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* 设置阴影 */
  width: 100%;
  /* 使 info-box 占满可用宽度 */
}

.info-title {
  text-align: center;
  /* 标题居中 */
}

p {
  margin: 5px 0;
  /* 减少段落间距 */
}

.comment-service {
  width: calc(100% - 40px);
  /* 设置宽度，减去左右边距 */
  padding: 20px;
  margin: auto;
  display: flex;
  align-items: center;
  /* 垂直居中对齐 */
  justify-content: center;
  /* 水平居中对齐 */
}
</style>