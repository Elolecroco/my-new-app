import PropTypes from "prop-types"

function MyPokemonCard({ pokemon }) {
    return (
        pokemon.imgSrc ? <figure> 
        <img src={pokemon.imgSrc} alt={pokemon.name}/> <figcaption>{pokemon.name}</figcaption>
        </figure> : <figure><p>???</p> <figcaption>{pokemon.name}</figcaption></figure>)
}

MyPokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default MyPokemonCard;