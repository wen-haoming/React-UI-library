import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'React-UI-library',
  favicon: '/react/meitan.svg',
  logo: '/react/meitan.svg',
  outputPath: 'docs-dist',
  publicPath: '/react/',
  resolve: {
    includes: ['docs', 'packages'],
  },
  history: {
    type: 'hash',
  },
  theme: {
    '@c-primary': '#1890ff',
  },
  navs: [
    { title: '组件', path: '/comp' },
    { title: '色彩设计', path: '/color' },
    {
      title: 'GitHub',
      path: 'https://github.com/wen-haoming/React-UI-library',
    },
    {
      title: '更新日志',
      path: 'https://github.com/wen-haoming/React-UI-library/commits/master',
    },
  ],

  // more config: https://d.umijs.org/config
});
