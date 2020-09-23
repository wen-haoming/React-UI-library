import React, { useContext, memo } from 'react';
import { prefix_cls } from '../../DatePicker/index';
import classnames from 'classnames';
import { Context, ContextType } from '../index';
import moment from 'moment';
import { useRenderDate } from '../../hooks';

let weekArr = ['一', '二', '三', '四', '五', '六', '日'];

function DatePicker() {
  const { changeDate, inputVal, closePanel, disabledDate } = useContext<
    ContextType
  >(Context);

  // 渲染日历面板
  let renderDate = useRenderDate();

  return (
    <>
      <div className={classnames(`${prefix_cls}-body`)}>
        <table className={classnames(`${prefix_cls}-content`)}>
          <thead>
            <tr>
              {weekArr.map((item, idx) => {
                return <th key={idx}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {renderDate.map((trItem, trIdx) => {
              return (
                <tr key={'trItem' + trIdx}>
                  {trItem.map((tdItem, tdIdx) => {
                    const disable = disabledDate(
                      moment(`${tdItem.year}-${tdItem.month}-${tdItem.date}`),
                    );
                    return (
                      <td key={'tdItem' + tdIdx}>
                        <div
                          onClick={e => {
                            e.stopPropagation();
                            if (disable) return;
                            changeDate(
                              tdItem.year,
                              tdItem.month,
                              tdItem.date,
                              true,
                            );
                            closePanel();
                          }}
                          title={tdItem.title}
                          className={classnames(`${prefix_cls}-cell-inner`, {
                            view: tdItem.type === 'curDate',
                            nowDate: tdItem.isNowDate,
                            select: inputVal === tdItem.title,
                            disable,
                          })}
                        >
                          {tdItem.date}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default memo(DatePicker);
