<template>
	<el-card shadow="hover">
	  <el-collapse v-model="activeNames">
		<el-collapse-item>
			<template #title>
          <div class="collapse-title">
            <el-icon :size="iconSize"><List /></el-icon>
            <span>Experiment Parameter</span>
          </div>
        </template>
		  <el-descriptions border :column="1">
			<el-descriptions-item label="Learning Rate">
			  {{ trainingpara?.learning_rate }}
			</el-descriptions-item>
			<el-descriptions-item label="Training Epoch">
			  {{ trainingpara?.training_epoch }}
			</el-descriptions-item>
			<el-descriptions-item v-if="trainingpara?.convergence_epoch" label="Convergence Epoch">
			  {{ trainingpara?.convergence_epoch }}
			</el-descriptions-item>
			<el-descriptions-item v-if="trainingpara?.other" label="Other Details">
			  {{ trainingpara?.other }}
			</el-descriptions-item>
		  </el-descriptions>
		</el-collapse-item>
	  </el-collapse>
	</el-card>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { ElCard, ElCollapse, ElCollapseItem, ElDescriptions, ElDescriptionsItem, ElIcon } from 'element-plus';
  import { TrainingPara, defaultTrainingPara } from '../types/trainingpara';
  
  const props = defineProps<{
	trainingpara?: TrainingPara,
  }>();
  
  const trainingpara = { ...defaultTrainingPara, ...props.trainingpara };
  const activeNames = ref(['1']);

  const iconSize = ref(20);
  </script>
  
  <style scoped>
  .collapse-title {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
  justify-content:flex-start; /* 水平居中对齐 */
  }

.collapse-title span {
  margin-left: 20px;
}

  </style>
  