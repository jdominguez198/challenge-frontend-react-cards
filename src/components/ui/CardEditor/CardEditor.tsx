import { useState } from 'react';
import CardModel from '../../../models/CardModel';

import Button from '../Button/Button';
import Input from '../Input/Input';

import './CardEditor.scss';

type CardEditorProps = {
  card: CardModel
};

function CardEditor({ card }: CardEditorProps) {
  const [ name, setName ] = useState(card.name);
  const [ imgUrl, setImgUrl ] = useState(card.imgUrl);
  const fieldValidations = {
    name: [
      { type: 'required', error: 'This field is required.' },
      { type: 'minText', error: 'The text should have at least 3 characters.' }
    ],
    imgUrl: [
      { type: 'required', error: 'This field is required.' },
      { type: 'url', error: 'The url introduced is wrong.' }
    ]
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    const submitCard: CardModel = {
      id: card.id,
      name,
      imgUrl,
      userCount: card.userCount
    }
    console.log('SUBMIT: ', submitCard);
  };

  return (
    <div className="card-editor">
      <form
        className="card-editor-form"
        onSubmit={(event) => event.preventDefault()}
        autoComplete="off"
      >
        <div className="form-group">
          <Input
            className="form-group-input"
            type="text"
            placeholder="Type a Card name"
            value={name}
            onChange={(event: any) => setName(event.target.value)}
            validations={fieldValidations.name}
          />
        </div>
        <div className="form-group">
          <Input
            className="form-group-input"
            type="url"
            placeholder="Type a Image url"
            value={imgUrl}
            onChange={(event: any) => setImgUrl(event.target.value)}
            validations={fieldValidations.imgUrl}
          />
        </div>
      </form>
      <Button className="card-editor-action" shape="squared" onClick={submitHandler}>Save</Button>
    </div>
  );
}

export default CardEditor;
