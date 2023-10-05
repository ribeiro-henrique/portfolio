import './App.css';
import LightPiramid from './components/LigthPiramid';
import DarkPiramid from './components/DarkPiramid';
import Content from './pages/Content';
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
