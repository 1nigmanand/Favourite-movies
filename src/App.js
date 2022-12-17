import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Action: [
    { name: "Avatar: The Way of Water", rating: "8.2/10" ,descrption:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."},
    { name: "The Peripheral", rating: "7.9/10",descrption:"Set in the future when technology has subtly altered society, a woman discovers a secret connection to an alternate reality as well as a dark future of her own." },
    { name: " Andor", rating: "8.4/10",descrption:"Prequel series to Star Wars' 'Rogue One'. In an era filled with danger, deception and intrigue, Cassian will embark on the path that is destined to turn him into a Rebel hero." }
  ],
  Fantacy: [
    { name: "Troll", rating: "5.8/10" ,descrption:"Deep in the Dovre mountain, something gigantic wakes up after a thousand years in captivity. The creature destroys everything in its path and quickly approaches Oslo."},
    { name: "Willow", rating: "7.2/10",descrption:"20 years after vanquishing the wicked queen Bavmorda, the sorcerer Willow Ufgood leads a group of misfits on a dangerous rescue mission into the unknown." },
    { name: "The Addams Family ", rating: "6.9/10",descrption:"Con artists plan to fleece an eccentric family using an accomplice who claims to be their long-lost uncle." }
  ],
  Romance: [
    { name: "Lady Chatterley's Lover ", rating: "6.7/10",descrption:"An unhappily married aristocrat begins a torrid affair with the gamekeeper on her husband's country estate."},
    { name: "Falling for Christmas ", rating: "5.2/10",descrption:"In the days leading up to Christmas, a young and newly engaged heiress experiences a skiing accident. After being diagnosed with amnesia, she finds herself in the care of the handsome lodge owner and his daughter." },
    { name: " The Holiday ", rating: "6.9/10",descrption:"Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love." }
  ]
};
var styling = {
  backgroundColor: "orange",
  // color: "",
  border: "solid black 2px",
  width: "17%",
  marginLeft: "auto",
  marginRight: "auto",
  padding:"1rem",
  borderRadius:"1rem"
  // fontSize:"3rem"
};

export default function App() {
  var [selectedgenre, setGenre] = useState("Action");

  function catchaclick(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div style={{ backgroundColor: " #8F00FF", padding: "3px" }}>
        <h1 style={styling}>🎥 Movies ​🎬​</h1>
        <h2>Welcome to my favourite movie liberary.</h2>
        {Object.keys(moviesDB).map((genre) => {
          return (
            <button
              style={{
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop:"0.5rem",
                paddingBottom:"0.5rem",
                margin: "0.5rem",
                borderRadius: "0.5rem"
              }}
              onClick={() => catchaclick(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedgenre].map((movie) => {
            return (
              <li
                keys={movie.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "solid black 2px",
                  width: "70%",
                  // margin: "1rem 0rem",
                  borderRadius: "3rem",
                  marginTop: "2rem",
                  marginLeft: "7rem",
                  backgroundColor: "palegoldenrod",
                  color: "black",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div><h2 style={{color:"red"}}>{movie.name}</h2></div>
                <div>{movie.rating}</div>
                <div>{movie.descrption}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
