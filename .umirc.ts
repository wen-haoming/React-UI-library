import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'React-UI-library',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: '/meitan.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  resolve: {
    includes: ['docs', 'packages/src'],
  },
  navs: [
    { title: '色彩设计', path: 'http://hooks.umijs.org/' },
    { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
    { title: '更新日志', path: 'https://github.com/alibaba/hooks/releases' },
  ],
  // more config: https://d.umijs.org/config
});
