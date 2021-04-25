import { Reducer } from 'redux';
import { CardActions } from '../actions';
import { ADD_CARDS_STARTED, ADD_CARDS_SUCCESS, ADD_CARDS_FAILURE } from '../actions/types';

export interface ICardState {
  items: any;
  loading: boolean;
  error: any;
}

const initialCardState: ICardState = {
  items: [],
  loading: true,
  error: null
};

export const CardState: Reducer<ICardState, CardActions> = (
  state = initialCardState,
  action
) => {
  switch (action.type) {
    case ADD_CARDS_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ADD_CARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: [
          ...state.items,
          ...action.payload
        ]
      };
    case ADD_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
