import { useRef } from 'react';

import Icon from '../Icon/Icon';

import './Button.scss';

function fireEvent (element: any, data: any) {
  if (!element) {
    return;
  }

  const customEvent = new CustomEvent('button:click', { bubbles: true, detail: data});
  element.dispatchEvent(customEvent);
}

function Button(props: any) {
  const buttonRef = useRef(null);

  const shapeClassName = (shape: string) => [
    ...(shape === 'link' && [ 'button__link' ]) || [],
    ...(shape === 'squared' && [ 'button__squared' ]) || [],
    ...(shape === 'rounded' && [ 'button__rounded' ]) || []
  ];

  const classNames = [
    'button',
    ...shapeClassName(props.shape || 'link'),
    ...(props.className && [ props.className ]) || []
  ];

  const clickHandler = (event: any) => {
    fireEvent(buttonRef.current, event);
    props.hasOwnProperty('onClick') && props.onClick(event);
  };

  return (
    <button
      ref={buttonRef}
      {...props}
      className={classNames.join(' ')}
      onClick={clickHandler}
    >
      {props.lefticon && <Icon className="button-left-icon" icon={props.lefticon}/>}
      <span className="button-text">{props.children}</span>
      {props.righticon && <Icon className="button-right-icon" icon={props.righticon}/>}
    </button>
  );
}

export default Button;
