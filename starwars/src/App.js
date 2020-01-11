import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import StarWarsCharacter from './components/StarWarsCharacter'
import styled from 'styled-components'



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then((resp) => {
      setData(resp.data.results)
      console.log(resp.data.results)
    })
      .catch(err => {
        console.log('there was an error getting the people info: ', err)
      })
    
  }, [])

let Header = styled.h1`
font-size: 4em;
margin: 0 auto;
text-align: center;
`

let Footer = styled.div`
margin-bottom: 5em;
`

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
    {console.log(data)}
    {
      data.map((person) => {
        return <StarWarsCharacter person={person}/>
      })
    }
    <Footer />
    </div>
  );
}

export default App;
