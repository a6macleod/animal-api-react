import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'
import styled from 'styled-components'

function App() {
  // TODO add loading spinner
  // Styling
  const StyledDiv = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    min-height: 100vh;
    margin: 0;
    background: linear-gradient(hsla(216, 92%, 73%, 1), hsla(95, 62%, 65%, 1));
    .wrapper {
      max-width: 1200px;
      margin: auto
    }
  `;

  // state
  const [isLoading, setIsLoading] = useState(false);
  const [animals, setAnimals] = useState([]);

  // load animal info
  useEffect(() => {
    loadAnimals()
  }, []); // second argument makes useEffect run on page load & will run on whatever state is in there if any

  const loadAnimals = async () => {
    setIsLoading(true)
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/9')
      .then(response => response.json())
      .then(
      (result) => setAnimals([...result])
      )
    setIsLoading(false)
  }

  return (
    <StyledDiv className="App">
      <div className='wrapper'>
        <Header loadAnimals={loadAnimals} />
        <Home animals={animals} isLoading={isLoading} />
        <Footer loadAnimals={loadAnimals} />
      </div>
    </StyledDiv>
  );
}

export default App;
