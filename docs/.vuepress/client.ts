// .vuepress/client.ts
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import './styles/index.css'
import './styles/index.styl'
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';


export default defineClientConfig({
  // 其他客户端配置
  enhance({ app, router, siteData }) {
    // 客户端增强逻辑
    app.use(ElementPlus)
    // 全局注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
  setup() {
    // 组件 setup 逻辑
  },
  
  rootComponents: [],
})
