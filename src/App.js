import React, { useState } from "react";

import "./App.css";
import { data } from "./questionData";

function App() {
  const [quest, setQuest] = useState(0);
  const [score, setScore] = useState(0)
  const [displayScore, setDisplayScore] = useState(false)
  
  
  const handleClick = (e) => {
    const nxtQuest = quest + 1;
    // const updateScore = score + 1
    const value = e.target.value;
    if (nxtQuest < data.length ) {
      setQuest(nxtQuest);

    }
    else{
      setDisplayScore(true)
    }

    if (data[quest].correct === value) {
      
      setScore(score + 1)
      
      console.log(true+" score is: "+ (score + 1));

    } else {
      console.log(false);
    }
    
    // let var = quest < data.length
    
    console.log("clicked", quest);
  };
  return (
    <div className="App">
      <div className="quiz-container">
        Here will be the questions

        <div className="quest_container">
          {displayScore ?
          
          <h1 className="end_txt">You've reached the end, your score is {score}</h1>
          :
          <>
          <div className="qts_opts">
          {data[quest].question}
          </div>
          <div className="options">
            {data[quest].options.map((ans) => (
              // <input onClick={handleClick}  className="ans_txt" type="button" value={ans.answer} />
              <button onClick={handleClick}  className="ans_txt" type="button" value={ans.answer}>{ans.answer}</button>
            ))}
          </div>
          
          </>
          
          }
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
