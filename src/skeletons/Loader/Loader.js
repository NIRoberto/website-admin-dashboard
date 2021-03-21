import React from 'react';
import ImgLoader from 'assets/spinner/294.svg';

const Loader = () => (
  <div className="flex items-center  justify-center bg-white">
    <img src={ImgLoader} alt="Loader" />
  </div>
);

export default Loader;
