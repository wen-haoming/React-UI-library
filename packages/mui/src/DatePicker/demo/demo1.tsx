import React, { useState } from 'react';
import { DatePicker } from '../index';
export default () => {
  const [state, setState] = useState('');

  return (
    <>
      <p>onChange回调变化 --- {state}</p>
      <DatePicker
        onChange={time => {
          setState(time);
        }}
      />
    </>
  );
};
