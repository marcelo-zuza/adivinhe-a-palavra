import './StartScreen.css'

import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <h4>Desenvolvido por<br/> <a id='zuza' href="https://www.linkedin.com/in/marcelo-zuza/">MARCELO ZUZA</a></h4>
        <p>Clique no botão abaixo para começar o jogo</p>
        <button onClick={startGame}>Começar o jogo</button>
    </div>
  )
}

export default StartScreen