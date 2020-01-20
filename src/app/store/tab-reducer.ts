import { Action } from '@ngrx/store';
import { MenuTab } from '../interface/menu';
import * as _ from 'lodash';
export interface IAction extends Action {
    payload?: any; // dispatch数据载体,可有可无,继承Action的type属性(可传递要保存或更新的值)
}

export const addTab = '[Add]-Tab';
export const removeTab = '[Remove]-Tab';

export interface State {
    tab: Array<MenuTab>;
}
export const initTabListState: State = {
    tab: [{
      url: '/home', 
      title: "Home", 
      isSelect: true
    }]
}

export function tabReducer(state: State = initTabListState, action: IAction) {
    const resouce = _.cloneDeep(state.tab);
    switch (action.type) {
        case addTab: 
            let flag = false; // 标识是否存在tab
            resouce.forEach(i => {
                if (action.payload.title === i.title) {
                    flag = true;
                    i.isSelect = true;
                } else {
                    i.isSelect = false;
                }
            });

            if (flag) {
                return {tab: [...resouce]}
            } else {
                const resouceData = _.pick(action.payload, ['url', 'title', 'isSelect']);
                return {tab: [...resouce, resouceData]}
            }
        case removeTab:
            if (!action.payload.isSelect) {
                const currentResouce = resouce.filter(i => action.payload.title !== i.title);
                return {tab: [...currentResouce]}
            } else {
            const ind = resouce.findIndex(v => action.payload.title === v.title);
            if (ind + 1 === resouce.length){ // 删除最后一个
                resouce.splice(ind, 1);
                resouce[resouce.length - 1].isSelect = true;
            } else {
                resouce.splice(ind, 1);
                resouce[ind].isSelect = true;
            }
            return {tab: [...resouce]};
            }
        default:
            return state;
    }
}
