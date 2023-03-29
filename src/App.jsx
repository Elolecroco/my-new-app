import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import MyPokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'
import { func } from 'prop-types'
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

  useEffect(
      () => {
        alert("Hello fellow pokemon trainer!")
      },
      []
    )

  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  pokemonList[currentPokemonIndex].name === "Pikachu" ? alert("Pika, pikachuuuuu!!") : "";

  return (
  <div>
    <MyPokemonCard pokemon={pokemonList[currentPokemonIndex]} />
    <Navbar currentPokemonIndex={currentPokemonIndex} setCurrentPokemonIndex={setCurrentPokemonIndex} pokemonList={pokemonList} />
  </div>  
  )
}



export default App
