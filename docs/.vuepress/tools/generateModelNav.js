const fs = require('fs');
const path = require('path');

const modelDir = path.join(__dirname, 'model');
const children = fs.readdirSync(modelDir).filter(file => fs.statSync(path.join(modelDir, file)).isDirectory()).map(dir => ({
  text: dir,
  link: `/model/${dir}/`
}));

const navConfig = [
  { text: 'Home', link: '/' },
  { text: 'Model', 
    link: '/model/',
    children: children
  },
  { text: 'About', link: '/about/' },
];

console.log(JSON.stringify(navConfig, null, 2));
