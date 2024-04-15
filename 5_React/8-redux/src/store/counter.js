import { createAction, handleActions } from "redux-actions";

// 액션(Action) : 프로젝트의 상태에 변화를 일으키는 것
const INCREASE = "counter/INCREASE"; // 액션 타입 정의 / counter에 있는 INCREASE라고 구분
const DECREASE = "counter/DECREASE";

// 액션 생성 함수(Action Creator) : 액션 객체를 만들어주는 함수
// export const increase = () => ({ type: INCREASE });
export const increase = createAction(INCREASE); // createAction 임포트
export const decrease = createAction(DECREASE);

// 리듀서(Reducer) : 변화를 일으키는 함수
const counter = handleActions(
  // handlerActions 임포트
  {
    [INCREASE]: (state, action) => state + 1,
    [DECREASE]: (state, action) => state - 1,
  },
  0
); // 0 : 초기 값 지정 / {} 내 action을 어떻게 다룰 건지

export default counter;
