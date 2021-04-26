import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { setFilter } from '../../../store/cards/actions';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import './Filter.scss';
import {useEffect, useState} from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function useQuerySearchTerm({ hasChanged, querySearchTerm, filter, dispatch}: any) {
  useEffect(() => {
    if (hasChanged) {
      return;
    }

    if (querySearchTerm && querySearchTerm !== filter) {
      dispatch(setFilter(querySearchTerm));
    }
  }, [dispatch, querySearchTerm, filter, hasChanged]);
}

function useQuerySearchHistory({ hasChanged, filter, history }: any) {
  useEffect(() => {
    if (!hasChanged) {
      return;
    }

    const params = new URLSearchParams();
    if (filter && filter !== '') {
      params.append('search', filter);
    } else {
      params.delete('search');
    }
    history.push({
      search: params.toString()
    });
  }, [filter, history, hasChanged])
}

function Filter() {
  const [ hasChanged, setHasChanged ] = useState(false);
  const { filter } = useSelector((state: any) => state.cardState);
  const dispatch = useDispatch();
  const history = useHistory();
  const querySearchTerm = useQuery().get('search');

  useQuerySearchTerm({
    hasChanged,
    querySearchTerm,
    filter,
    dispatch
  });

  useQuerySearchHistory({
    hasChanged,
    filter,
    history
  });

  const searchHandler = (event: any) => {
    setHasChanged(true);
    dispatch(setFilter(event.target.value));
  };

  const clearFilterHandler = (event: any) => {
    setHasChanged(true);
    dispatch(setFilter(''));
  }

  return (
    <div className="filter">
      <div className="filter-wrapper">
        <input
          className="filter-input"
          type="text"
          placeholder="Type a name to search..."
          value={filter}
          onChange={searchHandler}
        />
        {filter !== '' &&
          <Button onClick={clearFilterHandler} className="filter-button">
            <Icon className="filter-button-icon" icon="times"/>
          </Button>}
      </div>
    </div>
  );
}

export default Filter;
