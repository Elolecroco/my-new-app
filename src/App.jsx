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
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  return (
  <div>
    <MyPokemonCard pokemon={pokemonList[currentPokemonIndex]} />
    <Navbar currentPokemonIndex={currentPokemonIndex} setCurrentPokemonIndex={setCurrentPokemonIndex} pokemonList={pokemonList} />
  </div>  
  )
}



export default App
