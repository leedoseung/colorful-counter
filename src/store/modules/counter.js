import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const CHANGE_COLOR = 'counter/CHANGE_COLOR';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const changeColor = createAction(CHANGE_COLOR, color => color);



const initialState = {
    number : 0 ,
    color : "black"
};


export default handleActions({
    [CHANGE_COLOR] : (state, action) => 
        produce(state, draft => {
            draft.color = action.payload
        })
    ,
    [INCREMENT] : (state, action) => 
        produce(state, draft => {
            draft.number++;
        })
    ,
    [DECREMENT] : (state, action) => 
        produce(state, draft => {
            draft.number--;
        })
}, initialState);

