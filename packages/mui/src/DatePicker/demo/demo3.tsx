import React, { useState } from 'react';
import { DatePicker } from '../index';
export default () => {
  const [state, setState] = useState('');

  return (
    <>
      <h1>支持切换时间格式--- {state}</h1>
      <DatePicker
        format="YYYY/MM/DD"
        onChange={time => {
          setState(time);
        }}
      />
    </>
  );
};
