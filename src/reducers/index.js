import{
  ADD_RECIPE,
  REMOVE_FROM_CALENDER
} from "../actions";

import { combineReducers } from 'redux' ;

function food (state = {}, action) {
  switch(action.type){
    case 'ADD_RECIPE' :
      const { recipe } = action

      return {
        ...state,
        [recipe.label] : recipe
      }
    default :
        return state
  }

}
const initialState={
  sunday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  monday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  thursday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  friday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
  saturday: {
    breakfast: null,
    lunch: null,
    dinner: null,
  },
}

// Reducer function

function calendar (state=initialState, action){
  const { day , recipe , meal }=action;

  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state, // state is first spread using spread operator
    // but we modify specific property value as required (as 'meal' here)
        [day] :  {
          ...state[day], // this says day remains same
          [meal] : recipe.label, // but meal changes as per user entry
        }
      };
    case REMOVE_FROM_CALENDER:
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal] : null,
        }
      };
    default:
      return state
  }
}
export default combineReducers({
  food,
  calendar,
});
