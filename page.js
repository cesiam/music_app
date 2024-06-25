"use client"
import CardsContainer from "./Components/cardsContainer";
import { Container } from "postcss";
import connect from "./connectOpenai";
import { connectSpotify } from "./Components/card";
import { useEffect, useState } from 'react';
import accessAPI from "./accessAlbumAPI"
// import accessToken from "./getAccessToken";

export default function App(){
  
  const [mood, setMood] = useState('');
  const [showSongs, setShowSongs] = useState(false);
  const [songs, setSongs] = useState([]);

  const handleMoodChange = (event) => {
    setMood(() => event.target.value);
  }
  const handleSearch = async (event) =>{
    console.log("searching for ", mood);
    setShowSongs(() => true);
    const output = await connect(mood);
    console.log(output);
    const parsed = JSON.parse(output);
    const songs_ = parsed.songs;
    // const song = parsed.songs[0];
    // const {track, artist, album, year} = song;
    // const response  = await accessAPI(album);
    // const img = response.results.albummatches.album[0].image[2]['#text'];
    // console.log(img);
    for (let song of songs_){
      const album = song.album;
      const response  = await accessAPI(album);
      const img = response.results.albummatches.album[0].image[2]['#text'];
      song["image_url"] = img;
    }
    setSongs(() => songs_);
//     const dummy_url = 'https://lastfm.freetls.fastly.net/i/u/174s/7836dab5fb9012c02c1af646730a154a.png';
//     const dummy = [{
//       "track": "Happy",
//       "artist": "Pharrell Williams",
//       "album": "G I R L",
//       "year": 2013
//   },{
//     "track": "Happy",
//     "artist": "Pharrell Williams",
//     "album": "G I R L",
//     "year": 2013
// },{
//   "track": "Happy",
//   "artist": "Pharrell Williams",
//   "album": "G I R L",
//   "year": 2013
// },{
//   "track": "Happy",
//   "artist": "Pharrell Williams",
//   "album": "G I R L",
//   "year": 2013
// },{
//   "track": "Happy",
//   "artist": "Pharrell Williams",
//   "album": "G I R L",
//   "year": 2013
// },{
//   "track": "Happy",
//   "artist": "Pharrell Williams",
//   "album": "G I R L",
//   "year": 2013
// },{
//   "track": "Happy",
//   "artist": "Pharrell Williams",
//   "album": "G I R L",
//   "year": 2013
// }]
//     for (let i= 0; i < dummy.length; i++){
//       let song = dummy[i];
//       song["image_url"] = dummy_url;
//       song["id"] = i;
      
//     }
//     setSongs(() => dummy);

    

  }
  
  console.log("val", showSongs)
  return (
    <div className="app">
        {showSongs && <CardsContainer songs={songs} />}
        <div className="searchBar-container">
          <input
          className="searchBar"
          type="text"
          placeholder="Search for songs based on mood"
          value={mood}
          onChange={handleMoodChange}
          />
        <button onClick={handleSearch}>Search</button>
        </div>
       
      
    </div>
  )
}