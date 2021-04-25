import './Button.scss';

function Button(props: any) {
  const shapeClassName = (shape: string) => [
    ...(shape === 'link' && [ 'button__link' ]) || [],
    ...(shape === 'squared' && [ 'button__squared' ]) || [],
    ...(shape === 'rounded' && [ 'button__rounded' ]) || []
  ];

  const classNames = [
    'button',
    ...shapeClassName(props.shape || 'link'),
    ...props.className && [ props.className ]
  ];

  return (
    <button
      {...props}
      className={classNames.join(' ')}
    >
      {props.children}
    </button>
  );
}

export default Button;
