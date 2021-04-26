import { Reducer } from 'redux';
import { CardActions } from '../actions';
import {ADD_CARDS_STARTED, ADD_CARDS_SUCCESS, ADD_CARDS_FAILURE, SET_CARDS_FILTER} from '../actions/types';

export interface ICardState {
  items: any;
  loading: boolean;
  error: any;
  filter: string;
}

const initialCardState: ICardState = {
  items: [],
  loading: true,
  error: null,
  filter: ''
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
        items: action.payload
      };
    case ADD_CARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case SET_CARDS_FILTER:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
