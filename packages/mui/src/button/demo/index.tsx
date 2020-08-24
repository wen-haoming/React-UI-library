import React from 'react';
import '../../styles/index.less';
import { Button } from '../Button';
import '../../styles/index.less';
import './style.less';
import { useMethods } from 'v-reactive-hooks';

interface SizeProps {
  size: 'large' | 'middle' | 'small';
}

const Demo = () => {
  const [state, methods] = useMethods({ size: 'middle' } as SizeProps, {
    large() {
      state.size = 'large';
    },
    middle() {
      state.size = 'middle';
    },
    small() {
      state.size = 'small';
    },
  });
  return (
    <div>
      <div className="demo">
        <Button onClick={methods.large} btnType="primary">
          Large
        </Button>
        <Button onClick={methods.middle} btnType="primary">
          middle
        </Button>
        <Button onClick={methods.small} btnType="primary">
          small
        </Button>
      </div>
      <div className="demo">
        <Button size={state.size} size={state.size} btnType="primary">
          Primary
        </Button>
        <Button size={state.size} btnType="primary" disabled>
          Primary(disabled)
        </Button>
        <Button>Default</Button>
        <Button size={state.size} disabled>
          Default(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button size={state.size} btnType="text">
          Text
        </Button>
        <Button size={state.size} btnType="text" disabled>
          Text(disabled)
        </Button>
        <Button size={state.size} btnType="link">
          link
        </Button>
        <Button size={state.size} btnType="link" disabled>
          link(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button size={state.size} danger btnType="primary">
          danger
        </Button>
        <Button size={state.size} danger btnType="primary" disabled>
          danger(disabled)
        </Button>
        <Button size={state.size} danger btnType="dashed">
          danger
        </Button>
        <Button size={state.size} danger btnType="dashed" disabled>
          danger(disabled)
        </Button>
      </div>
      <div className="demo">
        <Button size={state.size} danger btnType="text">
          danger
        </Button>
        <Button size={state.size} danger btnType="text" disabled>
          danger(disabled)
        </Button>
      </div>
    </div>
  );
};

export default Demo;
