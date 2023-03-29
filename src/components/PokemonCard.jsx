import PropTypes from "prop-types"

function MyPokemonCard({ pokemon }) {
    return (
        <figure className="pokemonCard">  
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} className="pokemonLook" alt={pokemon.name}/> : <p className="nonexistent">???</p>}
        <figcaption className="pokemonName">{pokemon.name}</figcaption>
        </figure>)
}

MyPokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default MyPokemonCard;