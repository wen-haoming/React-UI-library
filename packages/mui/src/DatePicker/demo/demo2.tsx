import React, { useCallback } from 'react';
import { DatePicker } from '../index';
import moment from 'moment';

export default () => {
  const disabledDate = useCallback(current => {
    if (current < moment('2020-8-20') && current > moment('2020-8-5')) {
      return false;
    } else {
      return true;
    }
  }, []);

  return (
    <>
      <p>2020-8-5到2020-8-20可选</p>
      <DatePicker disabledDate={disabledDate} format={'YYYY-MM-DD'} />
    </>
  );
};
