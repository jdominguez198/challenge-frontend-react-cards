import Card from '../Card/Card';
import CardModel from '../../../models/CardModel';
import './CardsList.scss';

type CardsListProps = {
  cards: CardModel[],
  editCardHandler: any,
  deleteCardHandler: any
};

function CardsList({ cards, editCardHandler, deleteCardHandler }: CardsListProps) {
  if (!cards || !cards.length || cards.length === 0) {
    return (
      <p>No cards</p>
    );
  }

  return (
    <div className="cards-list">
      {cards.map((card: CardModel) =>
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
