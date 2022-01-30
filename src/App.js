import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'

function App() {
  // TODO add loading spinner
  const [isLoading, setIsLoading] = useState(false);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    loadAnimals()
  }, []); // second argument makes useEffect run on page load

  const loadAnimals = () => {
    const getAnimals = async () => {
      setIsLoading(true)
      fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
        .then(response => response.json())
        .then(
        (result) => setAnimals([...result])
        )
      setIsLoading(false)
    }
    getAnimals()
  }

  return (
    <div className="App">
        <Header loadAnimals={loadAnimals}/>
        <Home animals={animals} isLoading={isLoading} />
        <Footer />
    </div>
  );
}

export default App;
