import PropTypes from "prop-types"

function MyPokemonCard({ pokemon }) {
    return (
        <figure>  
        {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
        </figure>)
}

MyPokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default MyPokemonCard;