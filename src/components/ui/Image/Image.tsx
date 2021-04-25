import './Image.scss';

type ImageProps = {
  src: string,
  alt: string,
  title: string
}

function Image({ src, alt, title}: ImageProps) {
  return (
    <img src={src} alt={alt} title={title} className="image"/>
  );
}

export default Image;
