import React, {
  useEffect,
  useRef,
  useMemo,
  createContext,
  useCallback,
} from 'react';
import classNames from 'classnames';
import { useReactive } from 'proxy-hooks';
import { useDelay } from '../hooks';
import GeneratePicker from './generatePicker';
import { Moment } from 'moment';
import moment from 'moment';
import './index.less';

type PickerType = 'year' | 'date' | 'month';

interface Props {
  onChange?: (date: string) => void;
  picker?: '';
  format?: string;
  value?: string;
  allowClear?: boolean;
  disabledDate?: (currentDate: Moment) => boolean;
}

export const prefix_cls = 'date-picker';

export const Context = createContext(null);

export type ContextType = {
  pickerType: PickerType;
  picker: PickerType;
  changePicker: (type: PickerType) => void;
  year: number;
  month: number;
  date: number;
  addYear: () => void;
  subYear: () => void;
  addMonth: () => void;
  subMonth: () => void;
  format: string;
  changeDate: (
    year: number | boolean,
    month: number | boolean,
    date: number | boolean,
    isChangeInput?: boolean,
  ) => void;
  inputVal: string;
  closePanel: () => void;
  disabledDate?: (currentDate: Moment) => boolean;
};

let date = new Date();

export const DatePicker: React.FC<Props> = props => {
  const {
    picker = 'date',
    onChange = (date: string) => {},
    format = 'YYYY-MM-DD',
    value = '',
    allowClear = false,
    disabledDate = () => false,
  } = props;

  let initialVal = useMemo(
    () => ({
      panelShow: false,
      panelTransition: false,
      picker,
      year: +moment(value ? value : date).format('YYYY'),
      month: +moment(value ? value : date).format('MM'),
      date: +moment(value ? value : date).format('DD'),
      inputVal: value,
      showAllowClear: allowClear,
    }),
    [allowClear, picker, value],
  );

  const [state] = useReactive(initialVal);

  const inputRef = useRef<HTMLInputElement>(null);
  const penelRef = useRef<HTMLInputElement>(null);
  const inputWrap = useRef<HTMLDivElement>(null);

  const [timeout, closePanel] = useDelay(
    () => {
      state.panelTransition = true;
    },
    () => {
      state.panelTransition = false;
      state.panelShow = false;
    },
    200,
  );

  useEffect(() => {
    const hoverEvent = e => {
      e.stopPropagation();
      if (!state.inputVal) return;
      state.showAllowClear = true;
    };
    const blurEvent = e => {
      e.stopPropagation();
      state.showAllowClear = false;
    };
    const inputClickEvent = e => {
      e.stopPropagation();
      state.panelShow = true;
      state.panelTransition = false;
    };
    const documentClickEvent = (e: any) => {
      e.stopPropagation();
      if (
        e.target === inputRef.current ||
        penelRef.current.contains(e.target as any) ||
        e.target.className === `${prefix_cls}-cell-inner`
      )
        return;
      if (!timeout && state.panelShow) {
        closePanel(true);
      }
    };
    inputWrap.current.addEventListener('mouseenter', hoverEvent);
    inputWrap.current.addEventListener('mouseleave', blurEvent);
    inputRef.current.addEventListener('click', inputClickEvent);
    document.addEventListener('click', documentClickEvent);
    return () => {
      inputRef.current.removeEventListener('hover', hoverEvent);
      inputRef.current.removeEventListener('blur', blurEvent);
      inputRef.current.removeEventListener('click', inputClickEvent);
      document.removeEventListener('click', documentClickEvent);
      inputRef.current = null;
    };
    // eslint-disable-next-line
  }, []);

  let contextValue = useMemo(() => {
    return {
      pickerType: state.picker, // 组件内部的picker状态
      picker, // 用户的picker 不能修改
      changePicker: (type: PickerType) => {
        state.picker = type;
      },
      year: state.year,
      month: state.month,
      date: state.date,
      closePanel: () => {
        closePanel(true);
      },
      changeDate: (
        year: number | boolean,
        month: number | boolean,
        date: number | boolean,
        isChangeInput: boolean,
      ) => {
        state.year = (year ? year : state.year) as number;
        state.month = (month ? month : state.month) as number;
        state.date = (date ? date : state.date) as number;

        if (isChangeInput) {
          state.inputVal = moment(
            `${state.year}-${state.month}-${state.date}`,
          ).format(format);
          onChange(state.inputVal);
        }
      },
      format: format,
      inputVal: state.inputVal,
      disabledDate,
    };
  }, [
    state.picker,
    state.month,
    state.year,
    format,
    state.inputVal,
    closePanel,
    disabledDate,
    onChange,
    picker,
    state.date,
  ]);

  const inputChange = useCallback(
    e => {
      state.inputVal = e.target.value;
    },
    [state.inputVal],
  );

  return (
    <Context.Provider value={contextValue}>
      <div className={classNames(prefix_cls)}>
        {/* 输入框 */}
        <div
          ref={inputWrap}
          className={classNames(prefix_cls + '-input', {
            focused: state.panelShow,
          })}
        >
          <input
            onChange={inputChange}
            value={initialVal.inputVal}
            ref={inputRef}
            placeholder="请选择日期"
            type="text"
          />
          <span
            className={classNames(prefix_cls + '-dateIcon-box', 'iconfont')}
          >
            <span
              style={{ opacity: !state.showAllowClear ? 1 : 0 }}
              className={classNames(prefix_cls + '-dateIcon', 'iconfont')}
            >
              &#xe7d3;
            </span>
            <span
              onClick={() => {
                state.inputVal = '';
                state.showAllowClear = false;
                onChange('');
              }}
              style={{ display: state.showAllowClear ? 'block' : 'none' }}
              className={classNames(prefix_cls + '-closeIcon', 'iconfont')}
            >
              &#xe844;
            </span>
          </span>
        </div>
        {/* Date panel */}
        <div
          ref={penelRef}
          className={classNames(prefix_cls + '-panel', {
            panelShow: state.panelShow,
            panelTransition: state.panelTransition,
          })}
        >
          <GeneratePicker />
        </div>
      </div>
    </Context.Provider>
  );
};
