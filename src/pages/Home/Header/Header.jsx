import React from 'react';
import logo2 from '../../../assets/img/logo2.png';

function Header() {
  return (
    <div className='head-dist-h'>
        <a href="/"><img src={logo2} alt="Lions Club" /></a>
        <div>
            <h3 className='head-lions-i'>LIONS INTERNATIONAL</h3>
            <h3 className='head-dist-num'>DISTRICT 317-F</h3>
        </div>
    </div>
  )
}

export default Header
