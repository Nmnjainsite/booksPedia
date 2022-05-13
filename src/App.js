import "./styles.css";
import React, { useState } from "react";

var booksIndex = {
  javaScript: [
    { name: "eloquent javaScript", ratings: "4/5" },
    { name: "you don't know about javascript", ratings: "3.5/5" }
  ],
  fiction: [
    { name: "shiva the triology", ratings: "5/5" },
    { name: "The Lost Empire", ratings: "4/5" }
  ],
  business: [
    { name: "rich dad poor dad", ratings: "4/5" },
    { name: "your attitude", ratings: "5/5" }
  ]
};
// var bookIndexList = .value

export default function App() {
  var [userBook, setUserBook] = useState("fiction");

  function genreClickHandler(genre, event) {
    // userBook = event.target.value;
    // meaning = bookIndex(genre);
    setUserBook(genre);
  }
  return (
    <div className="App">
      <h1
        style={{ backgroundColor: "skyblue", padding: "1rem", margin: "0rem" }}
      >
        booksPedia📚
      </h1>
      <h2>books !! You must read</h2>
      <div>
        {Object.keys(booksIndex).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre} </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksIndex[userBook].map((book) => (
            <li key={book.name}>
              <div>{book.name}</div>
              <div>{book.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
