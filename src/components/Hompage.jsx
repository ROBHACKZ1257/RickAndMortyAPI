import { useEffect, useState } from 'react';
import '../App.css';
import '../index.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

export default function Homepage({setcurrentCharacters}) {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  const navigate = useNavigate()


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let characterApi = `https://rickandmortyapi.com/api/character`;
    let locationApi = `https://rickandmortyapi.com/api/location`;
    let episodeApi = `https://rickandmortyapi.com/api/episode`;

    // Fetch character data
    let characterResponse = await fetch(characterApi);
    const characterData = await characterResponse.json();
    setCharacters(characterData.results);

    // Fetch location data
    let locationResponse = await fetch(locationApi);
    const locationData = await locationResponse.json();
    setLocations(locationData.results);

    // Fetch episode data
    let episodeResponse = await fetch(episodeApi);
    const episodeData = await episodeResponse.json();
    setEpisodes(episodeData.results);
  }

  function Infobutton(character) {
    let name = character.name.replace(/\s/g, '') // create /about/:RickSanchez(profileimageclicked) 12:12PM
    setcurrentCharacters((previouschar) => previouschar= character)
    navigate(`/about/${name}`)
  }

  function Characters() {
    return characters.map((character) => (
      <div className='character-container' onClick={() =>{Infobutton(character)}} key={character.name}>
        <h1 className='text-hover'>{character.name}</h1>
        {/* <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Gender: {character.gender}</p> */}
        <img src={character.image} alt={character.name} className='character-image' />
      </div>
    ));
  }
  

  function Location() {
    return locations.map((location) => (
      <div className='location-container' key={location.name}>
        <h1>{location.name}</h1>
        {/* <p>Type: {location.type}</p>
        <p>Planet: {location.planet}</p>
        <p>Dimension: {location.dimension}</p> */}
      </div>
    ));
  }

  function Episode() {
    return episodes.map((episode) => (
      <div className='episode-container' key={episode.name}>
        <h1>{episode.name}</h1>
        <p>Air-date: {episode.air_date}</p>
        <p>Episode: {episode.episode}</p>
      </div>
    ));
  }

  return (
    <div className='Homepage'>
      <Header />
      <div className='rick_morty-container'>
        {/* Render the Characters, Location, and Episode components */}
        <Characters />
        {/* <Location />
        <Episode /> */}
      </div>
    </div>
  );
}

