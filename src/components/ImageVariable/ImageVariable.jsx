import React from 'react';

function ImageVariable({ width, src, alt }) {
  return (
    <img src={src} alt={alt} style={{ height: 60, width }} />
  );
}

export default ImageVariable;
