import React from 'react';
import SlotM from './SlotMach';


const App = () => {
  
  return (
    <>
    <h1 className='heading_syle'>
      ๐ฐWelcom to <span style={{fontWeight:"bold"}}>slot machine game </span>๐ฐ</h1>

      <div className='slot_machine'>
   
      <SlotM x='๐' y='๐' z='๐' />
      <SlotM x='๐' y='๐' z='๐' />
      <SlotM x='๐' y='๐' z='๐' />
      <SlotM x='๐' y='๐' z='๐'/>
      </div>
    
    </>
  )
};


export default App;