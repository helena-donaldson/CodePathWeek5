import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import StartingCard from './StartingCard.jsx'
import Banned from './Banned.jsx'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [image, setImg] = useState(null)
  const [breed, setBreed] = useState("")
  const [origin, setOrigin] = useState("")
  const [lifespan, setLifespan] = useState("")
  const [bannedPhrases, setBannedPhrases] = useState([]);

  const makeQuery = () => {
    let query = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`;
  
    callAPI(query).catch(console.error);

    // if (json.url == null) {
    //   alert("Oops! Something went wrong with that query, let's try again!")
    // }
    // else {
      
    // }
  }

  const callAPI = async (query) => {
    const response = await fetch(query, {
        headers: {
      'x-api-key': ACCESS_KEY
    }
    });
    const json = await response.json();
    console.log(json);
    console.log(json[0].url);

    let notBanned = true;
    for (let i = 0; i < bannedPhrases.length; i++) {
        if (bannedPhrases[i] == json[0].breeds[0].name ||
          bannedPhrases[i] == json[0].breeds[0].origin ||
          bannedPhrases[i] == json[0].breeds[0].life_span){
            notBanned = false;
          }
    }
    if(notBanned){
      setImg(json[0].url);
      setBreed(json[0].breeds[0].name);
      setOrigin(json[0].breeds[0].origin);
      setLifespan(json[0].breeds[0].life_span);
    }else{
      callAPI(query).catch(console.error);
    }
  }

  const addBannedPhrase = (val) => {
    setBannedPhrases((bannedPhrases) => [...bannedPhrases, val])
  }

  const removeBanned = (val) => {
   setBannedPhrases((bannedPhrases) => bannedPhrases.filter(item => item !== val));
  }


  return (
    <div class="app">
      <h1>Explore the Wonderful World of Cats!</h1>
      <br></br>
      <div class="cardContainer">{image ? (
        <Card funct={(e) => addBannedPhrase(e.target.value)} img={image} breed={breed} origin={origin} lifespan={lifespan} title="Title" description="Description"/>
      ) : (
        <StartingCard />
        )}
      <div class="bannedContainer">
       <Banned funct={(e) => removeBanned(e.target.value)} banned={bannedPhrases}/>
      </div>
      </div>
      <br></br>
      <div class="btnContainer">
        <button id="exploreBtn" onClick={makeQuery}>Explore more!</button>
      </div>
      <br></br>
    </div>
  )
}

export default App
