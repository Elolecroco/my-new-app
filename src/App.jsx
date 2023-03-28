import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropTypes from "prop-types"
import MyPokemonCard from './components/PokemonCard'

const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew"
    }
];

function App() {
  return <MyPokemonCard pokemon={pokemonList[0]} />
}



export default App
