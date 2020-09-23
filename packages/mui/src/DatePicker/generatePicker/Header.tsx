import React, { useContext, memo, useCallback } from 'react';
import { prefix_cls } from '../../DatePicker/index';
import classnames from 'classnames';
import { Context, ContextType } from '../index';
import {
  ArrowRightBold,
  ArrowLeftBold,
  ArrowDoubleLeft,
  ArrowDoubleRight,
} from 'mui2icons';

interface Props {
  llBtn?: () => void;
  lBtn?: () => void;
  rBtn?: () => void;
  rrBtn?: () => void;
  yearBtn?: () => void;
  monthBtn?: () => void;
}

function Header(props: Props) {
  const {
    llBtn = () => {},
    lBtn = () => {},
    rBtn = () => {},
    rrBtn = () => {},
    yearBtn = () => {},
    monthBtn = () => {},
  } = props;

  let { pickerType, year, month, picker } = useContext<ContextType>(Context);

  const yearBtnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      yearBtn();
    },
    [yearBtn],
  );

  const monthBtnClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      monthBtn();
    },
    [monthBtn],
  );

  return (
    <div className={classnames(`${prefix_cls}-header`)}>
      <div className={classnames(`${prefix_cls}-header-left`)}>
        <button onClick={llBtn}>
          <ArrowDoubleLeft />
        </button>
        {pickerType === 'date' && (
          <button onClick={lBtn}>
            <ArrowLeftBold />
          </button>
        )}
      </div>
      <div className={classnames(`${prefix_cls}-header-mid`)}>
        <div
          onClick={yearBtnClick}
          className={classnames(`${prefix_cls}-header-midbtn`)}
        >
          {year}年
        </div>
        {picker !== 'year' && (
          <div
            onClick={monthBtnClick}
            className={classnames(`${prefix_cls}-header-midbtn`)}
          >
            {month}月
          </div>
        )}
      </div>
      <div className={classnames(`${prefix_cls}-header-right`)}>
        {pickerType === 'date' && (
          <button onClick={rBtn}>
            <ArrowRightBold />
          </button>
        )}
        <button onClick={rrBtn}>
          <ArrowDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default memo(Header);
