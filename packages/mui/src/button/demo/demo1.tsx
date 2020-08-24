import React from 'react';
import '../../styles/index.less';
import { Button } from '../Button';
import '../../styles/index.less';
import './style.less';

const Demo = () => {
  return (
    <div className="demo">
      <Button btnType="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button btnType="dashed">Dashed Button</Button>
      <Button btnType="text">Text Button</Button>
      <Button btnType="link" href="#">
        Link Button
      </Button>
    </div>
  );
};

export default Demo;
