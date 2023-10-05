import './App.css';
import LightPiramid from './components/LigthPiramid';
import DarkPiramid from './components/DarkPiramid';
import { useState } from 'react';

function App() {
const [theme, setTheme] = useState('claro');

const toggleTheme = () => {
  setTheme(theme === 'claro' ? 'escuro' : 'claro');
}

  return (
    <div className={`App ${theme}`}>
      { theme === 'claro' ? <LightPiramid /> : <DarkPiramid /> }
      <h1 className='h1'>Henrique Ribeiro</h1>
      {
        theme === 'claro' ?
        <span className='span-claro' onClick={toggleTheme}>☼</span> :
        <span className='span-escuro' onClick={toggleTheme}>☽</span>
      }
      <p>Olá, sou o Henrique! Desenvolvedor Frontend e Advogado pela OAB-MG.</p>
      <p>Atualmente estudo na <a className='link' href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a></p>
    </div>
  )
}

export default App
