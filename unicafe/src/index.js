// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => {
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
  {text}
  </button>
)

const Feedback = ({title, gBtnTxt, gBtnClick,
nBtnTxt, nBtnClick, bBtnTxt, bBtnClick}) => {
  return (
    <div>
      <Title text={title}></Title>
      <Button handleClick={gBtnClick} text={gBtnTxt}></Button>
      <Button handleClick={nBtnClick} text={nBtnTxt}></Button>
      <Button handleClick={bBtnClick} text={bBtnTxt}></Button>
    </div>
  )
}

const increaseState = (state, setState) => {
  setState(state+1)
} 

const Phrase = ({text, num}) => (<p>{text} {num}</p>)

const Statistics = ({title, goodText, goodNum,
neutralText, neutralNum, badText, badNum}) => {
  return(
    <div>
      <Title text={title}></Title>
      <Phrase text={goodText} num={goodNum}></Phrase>
      <Phrase text={neutralText} num={neutralNum}></Phrase>
      <Phrase text={badText} num={badNum}></Phrase>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  return (
    <div>
    <Feedback
    title="give feedback"
    gBtnClick={()=> increaseState(good, setGood)}
    gBtnTxt="good"

    nBtnClick={()=>increaseState(neutral, setNeutral)}
    nBtnTxt="neutral"

    bBtnClick={() => increaseState(bad, setBad)}
    bBtnTxt="bad"
    ></Feedback>

    <Statistics
    title="statistics"
    goodText="good"
    goodNum={good}

    neutralText="neutral"
    neutralNum={neutral}

    badText="bad"
    badNum={bad}
    ></Statistics>
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)