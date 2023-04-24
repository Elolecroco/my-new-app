import { useEffect, useState } from 'react'
import './App.scss'
import pokemonList from './PokemonData'
import MyPokemonCard from './components/PokemonCard'
import Navbar from './components/Navbar'
import FilterType from './components/Filter'

function App() {
  
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(null);
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);
  const [selectedType, setSelectedType] = useState(null);

  console.log(currentPokemonIndex)

  return (
    <div className='pokemonBody'>
        <FilterType pokemonList={pokemonList} setFilteredPokemonList={setFilteredPokemonList} setSelectedType={setSelectedType} />
      <div className='pokemonList'> 
        <div className='pokemonCardContainer'> 
          {filteredPokemonList.map((pokemon) => (
          <MyPokemonCard key={pokemon.name} imgSrc={pokemon.imgSrc} name={pokemon.name} type={pokemon.type} description={pokemon.description} />
          ))}
        </div>
          
        <div className="boutons">
          {filteredPokemonList.map((pokemon, index) => (
            <Navbar 
            key={pokemon.name}
            name={pokemon.name}
            index={index}
            type={pokemon.type}
            currentPokemonIndex={currentPokemonIndex}
            setCurrentPokemonIndex={setCurrentPokemonIndex}
            selectedPokemon={selectedPokemon} 
            setSelectedPokemon={setSelectedPokemon}
             />
          ))}
        </div>
      </div>
    </div>  
  )
}

export default App
