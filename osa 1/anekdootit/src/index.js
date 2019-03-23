import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [aanet, setAanet] = useState(0)
  const [aaniLista, setAaniLista] = useState([0,0,0,0,0,0])
  const [eniten , setEniten] = useState(0)
  const [yhteensa, setYhteensa] = useState(0)
  const vaihda = () => {
      var random =Math.floor(Math.random() * 6) 
      setSelected(random);
      setAanet(aaniLista[random]);
  }
  const aanesta = () => {
      var array = aaniLista;
      array[selected] = array[selected]+1;
      setAaniLista(array);
      setAanet(aaniLista[selected]);
      var biggest = Math.max(...array);
      setEniten(array.indexOf(biggest));
      setYhteensa(yhteensa + 1);
  }
if (yhteensa === 0){
  return (
    <div>
      <h3>{props.anecdotes[selected]}</h3>
    <p>{aanet} ovat äänestäneet tätä</p>
    <button onClick={() => vaihda()}>Seuraava</button>
    <button onClick={() => aanesta()}>Äänestä</button>
    <p>(Tässä näytetään suosituin anekdootti kun ääniä on annettu.)</p>
    </div>
  )} else {
      return (
          <div>
      <h3>{props.anecdotes[selected]}</h3>
    <p>{aanet} ovat äänestäneet tätä</p>
    <button onClick={() => vaihda()}>Seuraava</button>
    <button onClick={() => aanesta()}>Äänestä</button>
    <p>Eniten ääniä saaneet anekdootti:</p>
    <h3>{props.anecdotes[eniten]}</h3>
    </div>
    )
  }
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