import { createAction, handleActions } from 'redux-actions';

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
    [CHANGE_COLOR] : (state, action) => ({
        ...state ,
        color : action.payload
    }),
    [INCREMENT] : (state, action) => ({
        ...state,
        number : state.number + 1
    }),
    [DECREMENT] : (state, action) => ({
        ...state ,
        number : state.number - 1
    })
}, initialState);

