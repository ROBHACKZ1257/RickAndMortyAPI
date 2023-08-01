import React from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'
import Homepage from './Hompage';

function Profile({currentCharacter}) {
    const navigate = useNavigate()
    const episodes = currentCharacter.episodes || [];
    console.log(currentCharacter)
  return (
    <div>
        <button className='button' onClick={() => navigate ('/') }>GO BACK!</button>
        <h1>{currentCharacter.name}</h1>
        <div className='rick_morty-profile'>
        <img src={currentCharacter.image} alt={currentCharacter.name} className='currentCharacter-image' />
        </div>
    <p>Status: {currentCharacter.status}</p>
    <p>Species: {currentCharacter.species}</p>
    <p>Type: {currentCharacter.type}</p>
    <p>Gender: {currentCharacter.gender}</p>
    <p>Location: {currentCharacter.location.name}</p>
    <p>Episodes: {currentCharacter.episode.length}</p>
      {currentCharacter.episode.map((episode) => (
        console.log(episode) // This is supposed to call in the episodes one by one but since there is 
        //51 episodes that would be too time consuming for me to call them in at once. 
        
        // <div className='episode-container' key={episode.name}>
        //   <h1>{episode.name}</h1>
        //   <p>Air-date: {episode.air_date}</p>
        //   <p>Episode: {episode.episode}</p>
        // </div>
      ))}
      
    </div>
  );
}


export default Profile