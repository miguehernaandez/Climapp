import React from 'react';
import SearchBar from './SearchBar.jsx';
import '../styles/Nav.css';

function Nav({onSearch}) {
  return (
  <div className='general'>
  <div className='logoHenry'>
  <div className='textoImagen'>Climapp</div>
  </div>
  <div className='divInputs'>
  <SearchBar onSearch={onSearch}/>
  </div>
  </div>
  );
};

export default Nav;
