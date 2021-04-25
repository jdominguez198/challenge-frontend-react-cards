import { useHistory } from 'react-router-dom';
import CardsList from '../../components/ui/CardsList/CardsList';
import Filter from '../../components/ui/Filter/Filter';
import CardModel from '../../models/CardModel';

import './Cards.scss';

function Cards() {
  const cards: CardModel[] = [
    {
      id: 1,
      name: 'Card 01',
      imgUrl: 'https://via.placeholder.com/600',
      userCount: 100
    },
    {
      id: 2,
      name: 'Card 02',
      imgUrl: 'https://via.placeholder.com/600',
      userCount: 95
    },
    {
      id: 3,
      name: 'Card 03',
      imgUrl: 'https://via.placeholder.com/600',
      userCount: 84
    },
    {
      id: 4,
      name: 'Card 04',
      imgUrl: 'https://via.placeholder.com/600',
      userCount: 79
    },
    {
      id: 5,
      name: 'Card 05',
      imgUrl: 'https://via.placeholder.com/600',
      userCount: 43
    }
  ];
  const history = useHistory();
  return (
    <div className="page-cards">
      <section className="page-cards-title">
        <h1>Your Cards</h1>
      </section>
      <section className="page-cards-filters">
        <Filter/>
      </section>
      <section className="page-cards-list">
        <CardsList
          cards={cards}
          editCardHandler={(cardId: string) => history.push(`/cards/${cardId}`)}
          deleteCardHandler={(cardId: string) => console.log('DELETE: ', cardId)}
        />
      </section>
    </div>
  );
}

export default Cards;
