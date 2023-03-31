import PropTypes from "prop-types"

function MyPokemonCard({ pokemon }) {
    return (
        <figure className="pokemonCard">  
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} className="pokemonLook" alt={pokemon.name}/> : <p className="nonexistent">???</p>}
        <div className="description">
            <figcaption className="pokemonName">{pokemon.name}</figcaption>
        {pokemon.type ? <p className="pokeType">{pokemon.type}</p> : <p className="nonexistentType">???</p>}    
        </div>
        </figure>)
}

MyPokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        type: PropTypes.string,
    }).isRequired,
}

export default MyPokemonCard;