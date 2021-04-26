import { useEffect, useRef, useState } from 'react';
import './Image.scss';
import loading from './placeholder';

type ImageProps = {
  src: string,
  alt: string,
  title: string
}

const lazyLoad = (src: string, setSrc: any) => {
  const img = new Image();
  img.src = src;
  img.addEventListener('load', () => {
    setSrc(src);
  });
  img.addEventListener('error', () => {
    setSrc('');
  });
};

const createIntersectionObserver = (src: string, setSrc: any, setShouldLoad: any) => {
  return new IntersectionObserver(([{ intersectionRatio }]) => {
    if (intersectionRatio > 0) {
      setShouldLoad(true);
      lazyLoad(src as string, setSrc);
    }
  });
}

function ImageComponent({ src, alt, title}: ImageProps) {
  const ref = useRef(null);
  const [ shouldLoad, setShouldLoad ] = useState(false);
  const [ imgSrc, setSrc ] = useState(loading || src);

  useEffect(() => {
    if (!shouldLoad && ref.current) {
      const observer = createIntersectionObserver(src as string, setSrc, setShouldLoad);
      // @ts-ignore
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [shouldLoad, setShouldLoad, ref, src, setSrc]);

  return (
    <img src={shouldLoad ? imgSrc : ''} alt={alt} title={title} className="image" ref={ref}/>
  );
}

export default ImageComponent;
