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
import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}
const Content = (props) => {
  const allParts = props.parts;
  console.log(allParts);
  const course = props
  console.log("course is",course);


return(
  <div>
 
      <Part 
      name={allParts[0].name}
      exercises={allParts[0].exercises}
      >
      </Part>
      <Part 
      name={allParts[1].name}
      exercises={allParts[1].exercises}
      >
      </Part>
      <Part 
      name={allParts[2].name}
      exercises={allParts[2].exercises}
      >
      </Part>

  </div>
)
}

const Part = (props) =>{
  return(
    <div>
    <p>
      {props.name} {props.exercises}
    </p>
    </div>
  )
}

const Total = (props) => {
return(
  <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  </div>
)
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course);
  console.log(course.parts);
  console.log(course.parts[0]);



  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}
      course={course}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))