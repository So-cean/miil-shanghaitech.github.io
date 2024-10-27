// ./vuepress/config/navbar.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelDir = path.join(__dirname, '../../model');

/**
 * 获取目录下的子目录，并生成侧边栏配置
 * @param {string} dir - 当前目录路径
 * @returns {Array} - 侧边栏配置数组
 */
function getChildren(dir) {
  const subDirs = fs.readdirSync(dir).filter(file => fs.statSync(path.join(dir, file)).isDirectory());
  return subDirs.map(subDir => {
    const subDirPath = path.join(dir, subDir);
    const children = getChildren(subDirPath);
    return {
      text: subDir,
      link: `/model/${path.relative(modelDir, subDirPath).replace(/\\/g, '/')}/`,
      children: children.length > 0 ? children : []
    };
  });
}

const children = getChildren(modelDir);
console.log(children);

export default [
  { text: 'Home', link: '/' },
  {
    text: 'Model',
    link: '/model/',
    children:  children
  },
  { text: 'About', link: '/about/' },
];
