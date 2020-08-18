import { defineConfig } from 'dumi';

export default defineConfig({
  mode: 'site',
  title: 'React-UI-library',
  favicon: '/react/meitan.svg',
  logo: '/react/meitan.svg',
  outputPath: 'docs-dist',
  publicPath: '/react/',
  resolve: {
    includes: ['docs', 'packages/src'],
  },
  history: {
    type: 'hash',
  },
  theme: {
    '@c-primary': '#214c7e',
  },
  navs: [
    { title: '组件', path: '/comp' },
    { title: '色彩设计', path: '/color' },
    { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
    { title: '更新日志', path: 'https://github.com/alibaba/hooks/releases' },
  ],
  // more config: https://d.umijs.org/config
});
