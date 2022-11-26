import React from 'react';
import SlotM from './SlotMach';


const App = () => {
  
  return (
    <>
    <h1 className='heading_syle'>
      🎰Welcom to <span style={{fontWeight:"bold"}}>slot machine game </span>🎰</h1>

      <div className='slot_machine'>
   
      <SlotM x='😄' y='😄' z='😄' />
      <SlotM x='😄' y='😄' z='😄' />
      <SlotM x='🍎' y='🍓' z='🍏' />
      <SlotM x='💚' y='💚' z='💚'/>
      </div>
    
    </>
  )
};


export default App;