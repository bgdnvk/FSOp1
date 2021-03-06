import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <br></br>
      <Button text="vote" onClick={() => saveVotes(selected, votes, setVotes) }></Button>
      <Button text="next anecdote" onClick={() => setRandomAnecdote(selected, setSelected)}></Button>
      <p>has {votes[selected]} votes</p>

      <h1>Anecdote with most votes</h1>
      {props.anecdotes[getMostVoted(votes)]}
    </div>
  )
}

const saveVotes = (selected, votes, setVotes) => {
  const copy = [...votes]
  copy[selected] +=1
  setVotes(copy)
}

const getMostVoted = (arr) => {
 return arr.indexOf(Math.max(...arr))
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text}
  </button>)

const randomNum = () => {
  return Math.floor(Math.random()*6)
  
}


const setRandomAnecdote = (state, setState) => {
  let random;
  do {
    random = randomNum()
  } while (random === state)
  setState(random)
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)