import React, { useEffect, useState } from "react";
import MyPokemonCard from './components/PokemonCard'
import FilterType from "./Filter";
import axios from 'axios'

function PokemonsList({filteredPokemonList}) {
    return (
        <div className='pokemonCardContainer'> 
          {filteredPokemonList
          filteredPokemonList.map((pokemon) => (
          <MyPokemonCard key={pokemon.name} imgSrc={pokemon.imgSrc} name={pokemon.name} type={pokemon.type} description={pokemon.description} />
          ))}
        </div>
    )
}

export default PokemonsList;