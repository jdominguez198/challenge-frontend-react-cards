import { useState } from 'react';
import CardModel from '../../../models/CardModel';

import Button from '../Button/Button';
import validateField from '../../../utils/validations';

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
          <input
            className="form-group-input"
            type="text"
            placeholder="Type a Card name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {fieldValidations.name.map((validation, index) =>
            !validateField(name, [ validation.type ]) &&
            <span key={`${validation.type}-${index}`} className="form-group-error">{validation.error}</span>)}
        </div>
        <div className="form-group">
          <input
            className="form-group-input"
            type="url"
            placeholder="Type a Image url"
            value={imgUrl}
            onChange={(event) => setImgUrl(event.target.value)}
          />
          {fieldValidations.imgUrl.map((validation, index) =>
            !validateField(imgUrl, [ validation.type ]) &&
            <span key={`${validation.type}-${index}`} className="form-group-error">{validation.error}</span>)}
        </div>
      </form>
      <Button className="card-editor-action" shape="squared" onClick={submitHandler}>Save</Button>
    </div>
  );
}

export default CardEditor;
