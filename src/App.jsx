import { useState } from 'react'
import './App.css'
import MyPokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'
function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "Grass",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      type: "Fire",

    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      type: "Water",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      type: "Electric",
    },
    {
      name: "Mew",
    },
  ];

  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [currentPokemonType, setCurrentPokemonType] = useState(0);


  return (
  <div>
    <MyPokemonCard pokemon={pokemonList[currentPokemonIndex]} />
    
    <div className="boutons">
      {pokemonList.map((pokemon, index) => (
        <Navbar 
        key={pokemon.name}
        name={pokemon.name}
        index={index}
        type={pokemon.type}
        currentPokemonIndex={currentPokemonIndex}
        setCurrentPokemonIndex={setCurrentPokemonIndex}
        setCurrentPokemonType={setCurrentPokemonType}
        currentPokemonType={currentPokemonType} />
      ))}
    </div>
  </div>  
  )
}



export default App
