const fs = require('fs');
const path = require('path');
const resolve = src => path.join(__dirname, src);

const getIconFileList = fs.readdirSync(`${process.cwd()}/src/Icons`);

let tpl = `
import React from 'react';
import IconBase,{IconProps} from '../IconBase';
import {{{fileName}}} from '../Icons/{{fileName}}'

export const {{exportName}}: React.FC<IconProps> = (props)=>{
  const {...resetProps} = props
  return <IconBase svgContent={{{fileName}}} {...resetProps} />
}
`;

let exportTpl = `
export  {{{exportName}}} from './{{exportFileName}}'`;

let str = '';
let tempStr = '';
let tempSpl = `
<li>
<{{name}}/>
<div className="title">{{name}}</div>
</li>
`;
let tempSplComp = '';

getIconFileList.forEach(fileName => {
  fileName = fileName.replace(/\..*/g, '');
  let tempTpl = tpl;
  let tempExportTpl = exportTpl;

  let outputName = fileName
    .replace(/^./, $ => $.toUpperCase())
    .replace(/(\w*?)Svg/, ($, $1) => $1);

  tempTpl = tpl.replace(/\{\{fileName\}\}/g, fileName);
  tempTpl = tempTpl.replace(/\{\{exportName\}\}/, outputName);

  tempExportTpl = tempExportTpl.replace(/\{\{exportName\}\}/, outputName);
  tempExportTpl = tempExportTpl.replace(/\{\{exportFileName\}\}/, outputName);

  fs.writeFileSync(`${process.cwd()}/src/reactIcon/${outputName}.tsx`, tempTpl);
  str += tempExportTpl;
  tempStr += outputName + ',';
  tempSplComp += tempSpl.replace(/\{\{name\}\}/g, outputName);
});
fs.writeFileSync(`${process.cwd()}/src/reactIcon/index.tsx`, str);

console.log(tempSplComp);
