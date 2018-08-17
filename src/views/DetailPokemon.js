import React from 'react'
import PokedexTag from '../components/PokedexTag'

class DetailPokemon extends React.Component {
  getUrlThumbnail = () => {
    const { pokemon } = this.props.location.state
    return (!pokemon) ? '' : `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png`
  }

  pokemonTags = () => {
    return this.props.location.state.pokemon.type.map((type, index) => {
      return <PokedexTag key={index} type={type} />
    })
  }

  weaknessTags = () => {
    return this.props.location.state.pokemon.weakness.map((type, index) => {
      return <PokedexTag key={index} type={type} />
    })
  }

  render() {
    const { name, number } = this.props.location.state.pokemon

    return (
      <main className="main-section mb-5">
        <div className="container">
          <section className="pokedex-item mt-5">
            <div className="row">
              <div className="col-md-12">
                <h1 className="pokedex-detail__title text-center mb-5">
                  {name}
                  <span className="text-muted">#{number}</span>
                </h1>
                <hr/>
                <div className="row">
                  <div className="col-md-5">
                    <img className="pokedex-detail__image" src={ this.getUrlThumbnail() } alt="" />
                  </div>
                  <div className="col-md-7">
                    <h4>Tipo</h4>
                    { this.pokemonTags() }
                    <h4 className="mt-3">Debilidades</h4>
                    { this.weaknessTags() }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    )
  }
}

export default DetailPokemon
