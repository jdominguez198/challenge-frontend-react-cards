import Button from '../Button/Button';

import './CardEditor.scss';
import CardModel from "../../../models/CardModel";

type CardEditorProps = {
  card: CardModel
};

function CardEditor({ card }: CardEditorProps) {
  return (
    <div className="card-editor">
      <form className="card-editor-form" autoComplete="off">
        <input
          className="form-input"
          type="text"
          placeholder="Type a Card name"
          value={card.name}
        />
        <input
          className="form-input"
          type="url"
          placeholder="Type a Image url"
          value={card.imgUrl}
        />
      </form>
      <Button className="card-editor-action" shape="squared">
        Save
      </Button>
    </div>
  );
}

export default CardEditor;
