import React from 'react';
import './_footer.scss';
import {FaFacebook, FaInstagram} from 'react-icons/fa'


const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer>
      <div className='footer'>
        <span className='footer__copyright'>Copyright © { copyrightYear }. All rights reserved</span>
        <div>
          <ul className='footer_link'>
            <li><a href='https://github.com/CarlosMartinezRobles'>Carlos Martínez</a></li>
            <li><a href='https://github.com/rafa87garcia'>Rafael García Rea</a></li>
            <li><a href='https://github.com/Andreasabu'>Andrea Santa María</a></li>
            <li><a href='https://github.com/rbasterra'>Rafael Basterra</a></li>
          </ul>
        </div>
        <div className='footer__icons'>
          <FaFacebook className='icon icon-facebook'/>
          <FaInstagram className='icon icon-instagram'/>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
