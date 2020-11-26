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

      <table>
      
      <Statistic text="good" value={goodNum}></Statistic>
      <Statistic text="neutral" value={neutralNum}></Statistic>
      <Statistic text="bad" value={badNum}></Statistic>

      <Statistic text="all" value={sumStates(goodNum, neutralNum, badNum)}></Statistic>
      <Statistic text="average" value={calcAverage(goodNum, neutralNum, badNum)}></Statistic>
      <Statistic text="positive" value={calcPositive(goodNum, neutralNum, badNum)}></Statistic>
      </table>
      
    </div>
  )
}

// const Statistic = ({text, value}) => (<p>{text} {value}</p>)
const Statistic = ({text, value}) => (<tbody><tr><td>{text}</td><td>{value}</td></tr></tbody>)


const sumStates = ( good, neutral, bad) => {
  return good+neutral+bad
}

const calcAverage = (g, n, b) => {
  return toFixedDec((g*1+n*0+b*-1)/sumStates(g,n,b))
}

const calcPositive = (g, n, b) => {
  return toFixedDec(g*(100/sumStates(g,n,b))) +" %"
}

const toFixedDec = (num) => {
  return Number.parseFloat(num).toFixed(2)
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // console.log(sumStates(good, neutral, bad));
  // console.log(calcAverage(good, neutral, bad));
  // console.log(calcPositive(good, neutral, bad));
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