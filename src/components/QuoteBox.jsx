import React, { useState } from "react";
import quotes from "../quotes.json"
import color from "../color.json";

const QuoteBox = () => {
  console.log(quotes);

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);

  const changeControl = () => {
    const newRandom = Math.floor(Math.random() * quotes.length);
    setIndex(newRandom);
  };

  document.body.style = `background: ${color[index]["#000000"]}`
  return (
    <div className='box1' style={{background: 'white',boxShadow: '0.3em 0.3em 1em #020202'}}>
      <div className="box2">
        <div className="minBox1" style={{color:`${color[index]["#000000"]}`}}><i className="fa-solid fa-quote-left"></i></div>
        <div className="minBox2" style={{color:`${color[index]["#000000"]}`}}><h1>{quotes[index].quote}</h1></div>
      </div>
      <div className="box3" style={{color:`${color[index]["#000000"]}`}}>
        <h2 style={{color:`${color[index]["#000000"]}`}}>{quotes[index].author}</h2>
      </div>
      <div className="box4">
        <button onClick={changeControl} style={{background:`${color[index]["#000000"]}`}}><i className="fa-solid fa-angle-right"></i></button>
      </div>
      <div className="box5"><h3>{color[index].Black}</h3></div>
      
      
    </div>

    
  )
};

export default QuoteBox