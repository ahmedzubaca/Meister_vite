import { useState} from 'react';
import PropTypes from 'prop-types';

export const ImageLoader = ({ lightSrc, heavySrc, imgStyle }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <picture>
      <source srcSet={lightSrc} type={`image/${lightSrc.split('.').pop()}`} />      
      <img            
        src={heavySrc}
        alt='slika'
        loading='lazy'
        className={imgStyle}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }} 
        onLoad={() => setLoaded(true)}
      />
    </picture>
  );
};
ImageLoader.propTypes = {
  lightSrc: PropTypes.string,
  heavySrc: PropTypes.string,
  imgStyle: PropTypes.any.isRequired
};