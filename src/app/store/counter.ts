// 配置： counter.ts,一般需要将state,action,reducer进行文件拆分
import { Action } from '@ngrx/store';
export interface IAction extends Action {
    payload?: any; // dispatch数据载体,可有可无,继承Action的type属性
}

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

const initialState = 0;

export function counterReducer(state: number = initialState, action: IAction) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}
