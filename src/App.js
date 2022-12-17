import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  Action: [
    { name: "Avatar: The Way of Water", rating: "8.2/10" ,descrption:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."},
    { name: "The Peripheral", rating: "7.9/10" },
    { name: " Andor", rating: "8.4/10" }
  ],
  Fantacy: [
    { name: "Troll", rating: "5.8/10" },
    { name: "Willow", rating: "7.2/10" },
    { name: "The Addams Family ", rating: "6.9/10" }
  ],
  Romance: [
    { name: "Lady Chatterley's Lover ", rating: "6.7/10" },
    { name: "Falling for Christmas ", rating: "5.2/10" },
    { name: " The Holiday ", rating: "6.9/10" }
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
