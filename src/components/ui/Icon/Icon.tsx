import iconsCollection from '../../../assets/icons/collection';

import './Icon.scss';

function Icon(props: any) {
  const printIcon = (icon: string) => (iconsCollection.hasOwnProperty(icon) && iconsCollection[icon]) || '';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`icon ${props.className || ''}`}
      dangerouslySetInnerHTML={{ __html: printIcon(props.icon) }}
    />
  );
}

export default Icon;
