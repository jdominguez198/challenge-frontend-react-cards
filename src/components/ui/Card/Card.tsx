import { useEffect, useRef, useState } from 'react';

import Button from '../Button/Button';
import Image from '../Image/Image';
import Icon from '../Icon/Icon';

import './Card.scss';

type CardProps = {
  id: string,
  name: string,
  imgUrl: string,
  total: number,
  editHandler: any,
  deleteHandler: any
};

const createIntersectionObserver = (setShouldLoad: any) => {
  return new IntersectionObserver(([{ intersectionRatio }]) => {
    if (intersectionRatio > 0) {
      setShouldLoad(true);
    }
  });
}

function Card({ id, name, imgUrl, total, editHandler, deleteHandler }: CardProps) {
  const [ shouldLoad, setShouldLoad ] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = createIntersectionObserver(setShouldLoad);
    // @ts-ignore
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [shouldLoad, setShouldLoad, ref]);

  return (
    <div className={`card ${!shouldLoad ? 'card__waiting' : ''}`} ref={ref}>
      {shouldLoad ?
        <div className="card-wrapper">
          <div className="card-image">
            <Image src={imgUrl} alt={name} title={name}/>
          </div>
          <div className="card-info">
            <div className="card-description">
              <span className="card-name">Name: {name}</span>
              <span className="card-total">Count: {total}</span>
            </div>
            <div className="card-actions">
              <Button onClick={() => editHandler(id)} className="card-actions-edit">
                <Icon icon="edit" />
              </Button>
              <Button onClick={() => deleteHandler(id)} className="card-actions-delete">
                <Icon icon="delete" />
              </Button>
            </div>
          </div>
        </div>
      : ''}
    </div>
  );
}

export default Card;
