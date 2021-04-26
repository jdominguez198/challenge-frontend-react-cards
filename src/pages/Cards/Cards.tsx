import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCards } from '../../store/cards/actions';

import CardsList from '../../components/ui/CardsList/CardsList';
import Filter from '../../components/ui/Filter/Filter';
import CardModel from '../../models/CardModel';

import './Cards.scss';


function Cards() {
  const { items, loading, filter } = useSelector((state: any) => state.cardState);
  const [ cards, setCards ] = useState(items);
  const dispatch = useDispatch();
  const history = useHistory();

  const countCards = () => items.length === cards.length ? items.length : `${cards.length}/${items.length}`;
  const navigateToCard = (cardId: string) => history.push(`/cards/${cardId}`);
  const deleteCard = (cardId: string) => console.log('Action not implemented...', cardId);

  useEffect(() => {
    if (!items || !items.length || items.length === 0) {
      dispatch(fetchCards());
    }
  }, [dispatch, items]);

  useEffect(() => {
    if (items.length > 0) {
      setCards(
        (filter === '' && items) ||
        items.filter((card: CardModel) => card.name.toLowerCase().includes(filter.toLowerCase()))
      );
    }
  }, [items, setCards, filter]);

  if (loading) {
    return (
      <div className="page-cards__loading">
        <p>Loading cards...</p>
      </div>
    );
  }

  return (
    <div className="page-cards">
      <section className="page-cards-title">
        <h1>Your Cards ({countCards()})</h1>
      </section>
      <section className="page-cards-filters">
        <Filter />
      </section>
      <section className="page-cards-list">
        <CardsList
          cards={cards}
          editCardHandler={(cardId: string) => navigateToCard(cardId)}
          deleteCardHandler={(cardId: string) => deleteCard(cardId)}
        />
      </section>
    </div>
  );
}

export default Cards;
