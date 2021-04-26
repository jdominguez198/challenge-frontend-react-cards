import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../store/cards/actions';

import CardEditor from '../../components/ui/CardEditor/CardEditor';
import CardModel from '../../models/CardModel';
import Button from '../../components/ui/Button/Button';

import './Card.scss';

function Card() {
  const { id: requestedCardId } = useParams<{ id: string }>();
  const { items, loading, filter } = useSelector((state: any) => state.cardState);
  const [ card, setCard ] = useState(null);
  const [ cardTitle, setCardTitle ] = useState('Unknown Card');
  const dispatch = useDispatch();
  const history = useHistory();

  const cardModel = card as CardModel|null;

  useEffect(() => {
    if (!items || !items.length || items.length === 0) {
      dispatch(fetchCards());
    }
  }, [dispatch, items]);

  useEffect(() => {
    setCard(items.find((card: CardModel) => card.id === requestedCardId));
    cardModel && setCardTitle(`Card "${cardModel.name}"`);
  }, [items, setCard, cardModel, requestedCardId]);

  const navigateToCardsList = () => {
    history.push({
      pathname: '/cards',
      search: filter
    });
  }

  if (loading) {
    return (
      <div className="page-card__loading">
        <p>Loading card...</p>
      </div>
    );
  }

  return (
    <div className="page-card">
      <section className="page-card-action">
        <Button shape="squared" onClick={() => navigateToCardsList()} lefticon="caret_left">
          Back to Cards list
        </Button>
      </section>
      <section className="page-card-title">
        <h1>{cardTitle}</h1>
      </section>
      <section className="page-card-editor">
        {cardModel ? <CardEditor card={cardModel} /> : <p>Card not found</p>}
      </section>
    </div>
  );
}

export default Card;
