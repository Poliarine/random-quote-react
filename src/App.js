import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [randomQuote, setRandomQuote] = useState([]);
  const [randomAuthor, setRandomAuthor] = useState([]);

  // useEffect((props) => {
    
  //   fetch("https://type.fit/api/quotes")
  //     .then(function (response) {
  //       return response.json();        
  //     })
  //     .then(function (quotes) {
  //       const randomQuoteGet = quotes[Math.floor(Math.random()*quotes.length)];
  //       console.log(randomQuoteGet);

  //       let randomQ = randomQuoteGet.text;
  //       let randomA = randomQuoteGet.author;
        
  //       console.log(randomQ);
  //       console.log(randomA);
        
  //       //  setRandomQuote(randomQ)
  //       //  setRandomAuthor(randomA)
  //     });
  // }, [randomQuote, randomAuthor]);
 
  let handleClick = () => {

    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();        
      })
      .then(function (quotes) {

        const randomQuoteGet = quotes[Math.floor(Math.random()*quotes.length)];
        console.log(randomQuoteGet);

        let randomQ = randomQuoteGet.text;
        let randomA = randomQuoteGet.author;
        
         setRandomQuote(randomQ)
         setRandomAuthor(randomA)
      });
  };

  return (
    <div class="wrapper" id="quote-box" className="App">
      <h1>Random quote machine</h1>
      <div class="quote-div">
        <p id="text">{randomQuote}</p>
        <div>
          <p id="author">{randomAuthor}</p>
        </div>
      </div>
      <div class="buttons">
        <a id="tweet-quote" href="www">
          Twitter
        </a>
        <a id="social-quote" href="www">
          Social media
        </a>
        <Button onClick={handleClick} 
        id="new-quote">
          New quote
        </Button>
      </div>
    </div>
  );
}

export default App;
