import { useParams } from 'react-router-dom';

import CardEditor from '../../components/ui/CardEditor/CardEditor';
import CardModel from '../../models/CardModel';

import './Card.scss';

function Card() {
  const cards: CardModel[] = [];
  const { id } = useParams<{ id: string }>();
  const card = cards.find((card: CardModel) => card.id === id);

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
