import React, { Children } from 'react';
import classnames from 'classnames';
import './icon.less';
import { useInsertStyles } from '../utils';

export interface IconProps {
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: any;
}

type Props = IconProps & {
  svgContent: string;
};

const IconBase: React.FC<Props> = props => {
  let { className, rotate, spin, svgContent, style = {} } = props;
  const classNames = classnames('micon', className, {});
  useInsertStyles();
  const svgClassNames = classnames('icon-svg', {
    'anticon-spin': spin,
  });
  return (
    <span className={classNames} style={{ ...style }}>
      <svg
        fill={style?.color}
        style={{ transform: rotate ? `rotate(${rotate}deg)` : 'none' }}
        className={svgClassNames}
        viewBox="64 64 896 896"
        width={style!.width ? style!.width : '1em'}
        height={style!.height ? style!.height : '1em'}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></svg>
    </span>
  );
};

export default IconBase;
