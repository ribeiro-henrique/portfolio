import './App.css';
import LightPiramid from './components/LigthPiramid';
import DarkPiramid from './components/DarkPiramid';
import Content from './pages/Content';
import { useState } from 'react';
import { Howl } from 'howler';

function App() {
const [theme, setTheme] = useState('claro');
const [sound, setSound] = useState(null);

const toggleTheme = () => {
  setTheme(theme === 'claro' ? 'escuro' : 'claro');
  
}

const playOrPauseMusic = () => {
  if (sound && sound.playing()) {
    sound.pause();
  } else {
    const newSound = new Howl({
      src: ['src/assets/hathor.mp3'],
    });

    newSound.play();
    setSound(newSound);
  }
}

  return (
    <div className={`App ${theme}`}>
      { theme === 'claro' ? <LightPiramid /> : <DarkPiramid /> }
      <h1 className='h1'>Henrique Ribeiro</h1>
      <div className='theme-music-container'>
        {
          theme === 'claro' ?
          <span className='span-claro' onClick={toggleTheme}>☼</span>  :
          <span className='span-escuro' onClick={toggleTheme}>☽</span>
        }
        <span className='span-claro' onClick={playOrPauseMusic}>♪</span>
      </div>
      <div className='presentation'>
        <p>Olá, sou o Henrique!</p>
        <p>Dev Full Stack e Advogado.</p>
      </div>
      <br />
      <Content />
    </div>
  )
}

export default App
