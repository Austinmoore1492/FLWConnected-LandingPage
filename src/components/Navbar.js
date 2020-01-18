import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      window.scrollY <= 300
        ? nav.setAttribute('style', 'opacity: 0;  transition: all 0.5s ease;')
        : nav.setAttribute(
            'style',
            'background-color: #333; color: #f0f0f0; opacity: 1; transition: all 0.5s ease;'
          );
    };
  });

  return (
    <nav id="navbar" className="navbar bg-dark">
      <h2>FLW Connected</h2>
    </nav>
  );
};

export default Navbar;
