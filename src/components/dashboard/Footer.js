import React from 'react';

const Footer = ({ dark }) => (
  <div
    className={`${
      dark ? 'bg-NavDark text-yellow-50' : 'bg-white text-gray-700'
    } col-start-1 lg:col-start-3 col-end-13 bg-white shadow-2xl`}
  >
    <span className=" text-sm p-2 items-center flex justify-center">
      Copyright &copy; by Robert Niyitanga{' '}
    </span>
  </div>
);

export default Footer;
