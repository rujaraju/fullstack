import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({onclick, label}) => {
    return (
        <button onClick={onclick}>{label}</button>
        )
}

const Statistic = ({label, value}) => {
        return(
    <p>{label}: {value}</p>
  )
}

const Statistics = ({values}) => {
    if (values[3].arvo === 0) {
        return (
            <p>Ei yhtään palautetta annettu!!</p>
            )
    }
    return values.map(elem => <Statistic key ={elem.label} label= {elem.label} value= {elem.arvo}  />);
}

const App = () => {
    const [hyva, setHyva] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [huono, setHuono] = useState(0)
    const [yhteensa, setYhteensa] = useState(0)
    const [keskiarvo, setKeskiarvo] = useState(0)
    const [positiivisia, setPositiivisia] = useState(0)
    var arvot = [
        {label:"Hyvä", arvo: hyva}, 
        {label:"Neutraali", arvo: neutral}, 
        {label:"Huono", arvo: huono},
        {label: "Yhteensä", arvo: yhteensa},
        {label:"Keskiarvo", arvo: keskiarvo},
        {label:"Positiivisia", arvo: positiivisia}
        ];
    
    const handleClick = (value) => {
        if (value === "hyvä"){
            setHyva(hyva + 1);
            setKeskiarvo((((hyva+1)*1 + huono*-1)/(yhteensa+1)).toFixed(2));
            setPositiivisia(((hyva+1) / (yhteensa+1)).toFixed(1));
        } else if (value === "huono"){
            setHuono(huono + 1);
            setKeskiarvo(((hyva*1 + (huono+1)*-1)/(yhteensa+1)).toFixed(2));
            setPositiivisia((hyva / (yhteensa+1)).toFixed(1));
        } else {
            setNeutral(neutral + 1);
            setKeskiarvo(((hyva*1 + huono*-1)/(yhteensa+1)).toFixed(2));
            setPositiivisia((hyva / (yhteensa+1)).toFixed(1));
        }
        setYhteensa(yhteensa+1);
        
    }



  return (
    <div>
    <h1>Mitäs mieltä olit meistä tänään?</h1>
    <Button label="Hyvä" onclick={() => handleClick("hyvä")} />
    <Button label="Neutraali" onclick={() => handleClick("")} />
    <Button label="Huono" onclick={() => handleClick("huono")} />
    <h3>Tulokset:</h3>
    <Statistics values={arvot} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

