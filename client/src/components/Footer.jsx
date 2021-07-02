import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright © {currentYear} MOovies. All rights reserved by Christian
        El-Hamaoui.
      </p>
    </footer>
  );
}

export default Footer;
