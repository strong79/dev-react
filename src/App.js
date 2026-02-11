import useCounter from "./hooks/UseCounter"
import "./App.css";
import { useState } from "react";

function App() {
  

  const Year = useCounter(2000)
  const Month = useCounter(1)
  const Date = useCounter(1)

  return (
    <>
      <div className="container">
        <h1>Enter your birthday.</h1>
        <div className="content__container">
          <div className="input__container">
            <input type="text" placeholder="Year" value={Year.count} />
            <div className="buttons">
              <button onClick={Year.increment}>+</button>
              <button onClick={Year.decrement}>-</button>
            </div>
            <span>(Y)</span>
          </div>
          <div className="input__container">
            <input type="text" placeholder="Month" value={Month.count}/>
            <div className="buttons">
              <button onClick={Month.increment}>+</button>
              <button onClick={Month.decrement}>-</button>
            </div>
            <span>(M)</span>
          </div>
          <div className="input__container">
            <input type="text" placeholder="Date" value={Date.count}/>
            <div className="buttons"> 
              <button onClick={Date.increment}>+</button>
              <button onClick={Date.decrement}>-</button>
            </div>
            <span>(D)</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
