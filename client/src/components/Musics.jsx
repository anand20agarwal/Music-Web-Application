import React from 'react';
import './Style.css';
import SongsImage from '../assets/img/Songs.jpg'; // Corrected import statement
import Header from './Header';

function Musics() {
  return (
    <div>
        <Header/>
      <h1 className='Header'>Music Page</h1>
      <div className='Song'>
        <img src={SongsImage} alt="Songs" />
      </div>
      <p className='p1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur fugit inventore fuga culpa excepturi reprehenderit numquam at. Ea vitae asperiores delectus nihil, nesciunt unde quisquam repellat quod perspiciatis ad expedita.</p>
    </div>
  );
}

export default Musics;
