<!-- .vuepress/components/ImageSection.vue -->
<template>
  <div class="image-section">
    <el-image :src="image" alt="model image" class="detail-image" />
  </div>
</template>

<script lang="ts" setup>
import { ElImage } from 'element-plus';
const props = defineProps<{
  image?: string
}>();

</script>

<style scoped>
.image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  /* 最大化展示图片 */
  margin: 50px 0;
  /* 添加上下间距 */
}

.detail-image {
  max-width: auto;
  max-height: 100%;
  object-fit: contain;
  /*  cover:保持图片的宽高比，可能会裁剪图片 */
}
</style>
