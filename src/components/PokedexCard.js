import React from 'react'
import PokedexTag from './PokedexTag'

const PokedexCard = ({ pokemon }) =>
  <div className="pokedex-card">
    <img className="pokedex-card-img" src={pokemon.ThumbnailImage} alt="" />
    <div className="pokedex-card-details">
      <small className="pokedex-card-details__number">{`#${pokemon.number}`}</small>
      <h4 className="pokedex-card-details__title">{pokemon.name}</h4>
      <div className="pokedex-card__types">
        { pokemon.type.map((type, index) => (
            <PokedexTag
              key={index}
              type={type}
            />
          ))
        }
      </div>
    </div>
  </div>

export default PokedexCard
