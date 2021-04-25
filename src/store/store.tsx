import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { ICardState, CardState } from './cards/reducers';

export interface IAppState {
  cardState: ICardState
}

const rootReducer = combineReducers<IAppState>({
  cardState: CardState
});

export default function configureStore(): Store<IAppState, any> {
  return createStore(rootReducer, undefined, applyMiddleware(thunk));
}
