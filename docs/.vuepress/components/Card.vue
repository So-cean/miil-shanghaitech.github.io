<template>
  <div class="card" @click="goToDetail">
    <img :src="image" alt="model image" class="card-image" @click.stop="goToDetail" />
    <a :href="downloadlink" download class="download-link">
      <i class="fa-solid fa-file-arrow-down"></i>
    </a>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p><b>Task:</b>{{ Task }}</p>
      <p><b>ViT:</b>{{ ViT }}</p>
      <p><b>Rank:</b>{{ Rank }}</p>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'vue-router';

export default {
  props: {
    image: String,
    title: String,
    Task: String,
    ViT: String,
    Rank: String,
    downloadlink: String,
    routePath: String // Add this prop to accept the route path
  },
  setup(props) {
    const router = useRouter();
    const goToDetail = () => {
      router.push(props.routePath); // Directly use the routePath prop here
    };
    return { goToDetail };
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 100%; /* Set to 100% to fit the container */
  max-width: 200px; /* Set a max-width for responsiveness */
  margin: 10px; /* Add some margin to space out the cards */
}
.card:hover {
  transform: scale(1.05);
}
.image-wrapper {
  position: relative; /* Relative positioning for the image wrapper */
}
.card-image {
  width: 100%;
  height: auto;
  cursor: pointer; /* Add cursor pointer to indicate it's clickable */
}
.card-content {
  padding: 16px;
}
.download-link {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: rgb(51, 160, 233);
  text-decoration: none;
  padding: 5px;
  border-radius: 50%; /* Optional: rounded background */
  display: flex; /* 使用 flexbox 来居中对齐图标 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  /* background-color: rgba(255, 255, 255, 0.8);  */
}
.download-link:hover {
  color: rgb(255, 255, 255);
}
</style>
