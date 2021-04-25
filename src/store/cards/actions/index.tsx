import {ActionCreator, Dispatch} from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { ICardState } from '../reducers';
import {
  ADD_CARDS_STARTED,
  ADD_CARDS_SUCCESS,
  ADD_CARDS_FAILURE
} from './types';
import CardModel from "../../../models/CardModel";

export interface ICardAction {
  type: string,
  payload: any
}

export type CardActions = ICardAction;

const fetchStarted = () => ({
  type: ADD_CARDS_STARTED
});

const addCards = (cards: CardModel[]) => ({
  type: ADD_CARDS_SUCCESS,
  payload: cards
});

const fetchError = (error: any) => ({
  type: ADD_CARDS_FAILURE,
  payload: {
    error
  }
});

export const fetchCards: ActionCreator<ThunkAction<Promise<any>, ICardState, null, ICardAction>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStarted());

    try {
      const response = await axios
        .get('http://localhost:8800/cards')
      ;

      if (!response.data || !response.data.length) {
        return dispatch(addCards([]));
      }

      const cards: CardModel[] = response.data.map((card: any) => ({
        id: card._id,
        name: card.name,
        imgUrl: card.imageUrl,
        userCount: card.count.total
      }))
      return dispatch(addCards(cards));
    } catch (error) {
      return dispatch(fetchError(error.message));
    }
  }
}
