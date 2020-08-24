import React from 'react';
import { Refresh, Smile, TaskFilling, SelectBold } from 'mui2icons';

export default () => {
  return (
    <div style={{ fontSize: '30px', marginRight: '10px' }}>
      <Refresh spin style={{ color: '#1890ff', marginRight: '10px' }} />
      <Smile style={{ color: 'red', marginRight: '10px' }} />
      <TaskFilling style={{ color: '#f40', marginRight: '10px' }} />
      <SelectBold style={{ color: '#1890ff', marginRight: '10px' }} />
    </div>
  );
};
