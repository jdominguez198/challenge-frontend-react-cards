import Card from '../Card/Card';
import CardModel from '../../../models/CardModel';
import './CardsList.scss';

type CardsListProps = {
  cards: CardModel[],
  editCardHandler: any,
  deleteCardHandler: any
};

function CardsList({ cards, editCardHandler, deleteCardHandler }: CardsListProps) {
  return (
    <div className="cards-list">
      {cards.map(card =>
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          imgUrl={card.imgUrl}
          total={card.userCount}
          editHandler={editCardHandler}
          deleteHandler={deleteCardHandler}
        />
      )}
    </div>
  );
}

export default CardsList;
