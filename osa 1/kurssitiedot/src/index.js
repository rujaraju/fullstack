import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
  return (
      <h1>
        {props.course} 
      </h1>
  )
}

const Content = (props) => {
  return props.parts.map(elem => <Part part= {elem.name} exercises= {elem.exercises}  />);
}

const Part = (props) => {
  return (
      <p>
        {props.part} {props.exercises} 
      </p>
  )
}

const Sumtotal = (props) => {
 var sum = 0;
 for (var i = 0; i < props.sum.length; i++){
     sum+= props.sum[i].exercises;
 }
  return (
      <p>
        yhteensä {sum} tehtävää
      </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        name: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title course={course.name} />
      <Content parts={course.parts} />
       <Sumtotal sum={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
