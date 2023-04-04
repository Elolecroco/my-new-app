import PropTypes from "prop-types"

function MyPokemonCard({ imgSrc, name, type, description }) {
    return (
        <div className={`pokemonCard ${type}`}> 
            <div className="pokeName-container">
                <p className="pokeName">{name}</p>
                {type ? <p className= {`desc ${type}`}>{type}</p> : <p className="nonexistentType">???</p>} 
            </div>
            {imgSrc ? <img src={imgSrc} className={`pokemonLook ${type}`} alt={name}/> : <p className="nonexistent">???</p>}
            <div className="desc-container">
                <p className="description">{description}</p>
            </div>
        </div>)
}

MyPokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
}

export default MyPokemonCard;