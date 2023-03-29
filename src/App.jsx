import { useState } from 'react'
import './App.css'
import MyPokemonCard from './components/PokemonCard'

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

  const handleNextPokemon = () => {
    setCurrentPokemonIndex(currentPokemonIndex + 1)
    /* setCurrentPokemonIndex((prevIndex) => {
      const pokemonIndex = prevIndex + 1;
      if (pokemonIndex >= pokemonList.length) {
        return 0
      }
      return pokemonIndex;
    }); */
  };

  const handlePreviousPokemon = () => {
    setCurrentPokemonIndex(currentPokemonIndex - 1)
    /* setCurrentPokemonIndex((prevIndex) => {
      const pokemonIndex = prevIndex - 1;
      if (pokemonIndex < 0 ) {
        return pokemonList.length - 1;
      }
      return pokemonIndex;
    }); */
  };

  return (
  <div>
    <MyPokemonCard pokemon={pokemonList[currentPokemonIndex]} />
    <div className='prevLast'>
      {currentPokemonIndex > 0 ? <button className="button" onClick={handlePreviousPokemon}>Précédent</button> : <p className="firstPokemon">First pokemon</p>}
      {currentPokemonIndex < pokemonList.length - 1 ? <button className="button" onClick={handleNextPokemon}>Suivant</button> : <p className="lastPokemon">Last pokemon</p>}
    </div>
  </div>  
  )
}



export default App
