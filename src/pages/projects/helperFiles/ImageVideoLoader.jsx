import { useState } from 'react';
import PropTypes from 'prop-types'

export const ImageLoader = ({ lightSrc, heavySrc, imgStyle }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div >
      <img
        src={lightSrc}
        alt='slika'
        className={imgStyle}
        style={{
          display: loaded ? 'none' : 'block',          
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
      <img
        src={heavySrc}
        alt='slika'
        className={imgStyle}
        style={{
          display: loaded ? 'block' : 'none',
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
ImageLoader.propTypes = {
  lightSrc: PropTypes.any.isRequired,
  heavySrc: PropTypes.any.isRequired,
  imgStyle: PropTypes.any.isRequired
};