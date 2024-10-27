<template>
  <div>
    <p ref="textElement" :class="{ collapsed: !expanded }">{{ text }}</p>
    <button v-if="isCollapsible" @click="toggle">{{ expanded ? showLessText : showMoreText }}</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';

interface Props {
  text: string;
  maxLines?: number;
  showMoreText?: string;
  showLessText?: string;
}

const props = defineProps<Props>();
const expanded = ref(false);
const isCollapsible = ref(false);
const textElement = ref<HTMLElement | null>(null);

const maxLines = props.maxLines ?? 4;
const showMoreText = props.showMoreText ?? 'Show More';
const showLessText = props.showLessText ?? 'Show Less';

const toggle = () => {
  expanded.value = !expanded.value;
};

const checkCollapsible = () => {
  if (textElement.value) {
    const lineHeight = parseFloat(getComputedStyle(textElement.value).lineHeight);
    const lines = textElement.value.scrollHeight / lineHeight;
    if (lines > maxLines) {
      isCollapsible.value = true;
    }
  }
};

onMounted(() => {
  checkCollapsible();
});
</script>

<style scoped>
.collapsed {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: pre-wrap;
  transition: max-height 0.3s ease;
}

button {
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  text-decoration: none;
}

button:hover {
  text-decoration: underline;
}
</style>
