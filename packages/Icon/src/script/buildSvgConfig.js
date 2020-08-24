const fs = require('fs');
const path = require('path');

const resolve = src => path.join(__dirname, src);

// 读取文件夹下svg文件名
const getSvgName = fs.readdirSync(resolve('../svg'));

let typeStr = '';

if (getSvgName.length) {
  // 遍历所有svg图像
  getSvgName
    .map(fileName => {
      return {
        fileName: fileName.match(/(.*)\.svg/)[1],
        path: `${process.cwd()}/src/svg/${fileName}`,
      };
    })
    .forEach(({ path, fileName }, idx) => {
      // 写入svg配置文件
      const svgContent = fs.readFileSync(path, 'utf-8');

      const svgName =
        fileName
          .replace(/-(\w)/gi, ($, $1) => $1.toUpperCase())
          .replace(/^./, $ => $.toUpperCase()) + 'Svg';

      let str = `
export const ${svgName} = '${svgContent.match(/d="(.*?)"/)[1]}'
`;
      str = str.replace(/fill=".*?"/, `fill="inherit"`);

      fs.writeFileSync(`${process.cwd()}/src/Icons/${svgName}.ts`, str);
    });
}
