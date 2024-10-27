<!-- MyComponent.vue -->
<template>
  <div>
    <h2>这是一个自定义的 Vue 组件</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from MyComponent!',
    };
  },
};
</script>