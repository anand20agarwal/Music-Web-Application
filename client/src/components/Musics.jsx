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
      <p className='p1'>Music is a universal language that expresses emotions, brings people together, and exists in various genres like pop, rock, and classical. It has the power to heal, reduce stress, and help with focus while studying or working. In movies, music enhances emotions and makes scenes more impactful. Instruments like the guitar, piano, and drums create beautiful melodies that touch hearts. Music is also a way to preserve culture and tell stories through lyrics and rhythms. Singing along to favorite songs can boost mood and energy instantly. No matter the language, music connects people worldwide. It plays a crucial role in celebrations, ceremonies, and everyday life. Many find comfort in music during tough times, making it a source of strength. Ultimately, music is an inseparable part of human life, bringing joy and meaning.</p>
    </div>
  );
}

export default Musics;
