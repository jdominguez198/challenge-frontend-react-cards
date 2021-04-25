import { useParams } from 'react-router-dom';

import CardEditor from '../../components/ui/CardEditor/CardEditor';
import CardModel from '../../models/CardModel';

import './Card.scss';

function Card() {
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
  const { id } = useParams<{ id: string }>();
  const card = cards.find((card: CardModel) => card.id === parseInt(id));

  return (
    <div className="page-card">
      <section className="page-card-title">
        <h1>{card ? `Card ${card.name}` : 'Unknown Card'}</h1>
      </section>
      <section className="page-card-editor">
        {card ? <CardEditor card={card} /> : <p>Card not found</p>}
      </section>
    </div>
  );
}

export default Card;
