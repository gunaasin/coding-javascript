import React from 'react';
import { Game } from '../Game/Game';
// import { Rabitrun } from '../Game/Rabitrun'

export const Leftbox = () => {
  return (
    <div className='leftbox'>
      <div className='game-box'>
        <Game />
        {/* <Rabitrun/> */}
      </div>
      <div className="hint-box">
        <h2 >Step :</h2>
        <ul>
         <Dummidata/><Dummidata/><Dummidata/><Dummidata/><Dummidata/><Dummidata/><Dummidata/><Dummidata/><Dummidata/>
        </ul>
      </div>
    </div>
  )
}




export const Dummidata= () => {
  return (
    <div> <li> Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit,
       amet consectetur adipisicingaudantium natus nobis at reiciendis inventore quo dolorem necessitatibus maiores? </li>
    </div>
  )
}
