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

const Statistics = ({title, goodNum,
 neutralNum, badNum,
}) => {
  if(goodNum === 0 && neutralNum === 0 && badNum === 0 ){
    return(
      <div>
      <Title text={title}></Title>
      <p>No feedback given</p>

      </div>
    )
  }

  return(
    <div>
      <Title text={title}></Title>
      {//https://reactjs.org/docs/conditional-rendering.html
      }
      {
        (goodNum === 0 && neutralNum === 0 && badNum === 0 ) &&
        <p>No feedback given</p>
      }
      <Statistic text="good" value={goodNum}></Statistic>
      <Statistic text="neutral" value={neutralNum}></Statistic>
      <Statistic text="bad" value={badNum}></Statistic>

      <Statistic text="all" value={sumStates(goodNum, neutralNum, badNum)}></Statistic>
      <Statistic text="average" value={calcAverage(goodNum, neutralNum, badNum)}></Statistic>
      <Statistic text="positive" value={calcPositive(goodNum, neutralNum, badNum)}></Statistic>
    </div>
  )
}

const Statistic = ({text, value}) => (<p>{text} {value}</p>)

const sumStates = ( good, neutral, bad) => {
  return good+neutral+bad
}

const calcAverage = (g, n, b) => {
  return (g*1+n*0+b*-1)/sumStates(g,n,b)
}

const calcPositive = (g, n, b) => {
  return g*(100/sumStates(g,n,b)) +" %"
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  console.log(sumStates(good, neutral, bad));
  console.log(calcAverage(good, neutral, bad));
  console.log(calcPositive(good, neutral, bad));
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