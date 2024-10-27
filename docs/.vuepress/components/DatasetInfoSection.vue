<template>
    <el-card class="info-box">
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
    </el-card>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { DatasetInfo, defaultDatasetInfo } from '../types/datasetinfo';
  
  const props = defineProps<{
    datasetinfo?: DatasetInfo,
  }>();
  
  const datasetinfo = { ...defaultDatasetInfo, ...props.datasetinfo };
  
  const descriptionText = computed(() => datasetinfo.description || '');
  
  const labelsText = computed(() => {
    return Object.entries(datasetinfo.label)
      .map(([key, label]) => `${key}: ${label}`)
      .join(', ');
  });
  </script>
  