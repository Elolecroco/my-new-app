function FilterType({pokemonList, setFilteredPokemonList, setSelectedType}) {
    // Bouton par pokémon
    const allTypes = [...new Set(pokemonList.map(pokemon => pokemon.type))];

    const handleFilterClick = (type) => {
        if (type === "All Types") {
          setFilteredPokemonList(pokemonList);
          setSelectedType(null)
        } else {
        const filteredList = pokemonList.filter(pokemon => pokemon.type === type);
        setFilteredPokemonList(filteredList);
        setSelectedType(type)
        }
      };
      
    return (
        <div className='group-btn'>
            <button 
            key="All Types"
            className="button"
            onClick={() => handleFilterClick("All Types")}>All Types</button>
            {allTypes.map((type) => (
                type ? <button 
                key={type}
                className={`button ${type}`} onClick={() => handleFilterClick(type)}>
                {type}</button> : <button className="button" onClick={() => handleFilterClick(type)}>???</button>
            ))}
        </div>
    )
}

export default FilterType