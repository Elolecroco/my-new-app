function Navbar({currentPokemonIndex, setCurrentPokemonIndex, pokemonList}) {
    // Bouton précédent
    const handleNextPokemon = () => {
        setCurrentPokemonIndex(currentPokemonIndex + 1)
    }
    // Bouton suivant
    const handlePreviousPokemon = () => {
        setCurrentPokemonIndex(currentPokemonIndex - 1)
    }

    return (
        <div className='prevLast'>
            {currentPokemonIndex > 0 ? <button className="button" onClick={handlePreviousPokemon}>Précédent</button> : <p className="firstPokemon">First pokemon</p>}
            {currentPokemonIndex < pokemonList.length - 1 ? <button className="button" onClick={handleNextPokemon}>Suivant</button> : <p className="lastPokemon">Last pokemon</p>}
        </div>
    )
    /*  Fonction qui permet de pouvoir cliquer sur suivant/précédent en boucle
    const handleNextPokemon = () => {
    setCurrentPokemonIndex((prevIndex) => {
      const pokemonIndex = prevIndex + 1;
      if (pokemonIndex >= pokemonList.length) {
        return 0
      }
      return pokemonIndex;
    });
  };

    const handlePreviousPokemon = () => {
    setCurrentPokemonIndex((prevIndex) => {
      const pokemonIndex = prevIndex - 1;
      if (pokemonIndex < 0 ) {
        return pokemonList.length - 1;
      }
      return pokemonIndex;
    }); */
}

export default Navbar