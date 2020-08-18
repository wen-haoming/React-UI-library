import React from 'react';
import '../../styles/index.less';
import { Button } from '../Button';
import '../../styles/index.less';
import './style.less';

const Demo = () => {
  return (
    <div>
      <div className="demo">
        <Button btnType="primary">Primary</Button>
        <Button btnType="primary" disabled>
          Primary(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button>Default</Button>
        <Button disabled>Default(disabled)</Button>
      </div>
      <div className="demo">
        <Button btnType="text">Text</Button>
        <Button btnType="text" disabled>
          Text(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button btnType="link">link</Button>
        <Button btnType="link" disabled>
          link(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button danger btnType="primary">
          danger
        </Button>
        <Button danger btnType="primary" disabled>
          danger(disabled)
        </Button>
      </div>
    </div>
  );
};

export default Demo;
