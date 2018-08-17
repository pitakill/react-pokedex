import React from 'react'

const PokedexTag = ({ type }) =>
  <span className={`pokedex-tag-${type} pokedex-tag badge mr-2`}>
    {type}
  </span>

export default PokedexTag
