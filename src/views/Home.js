import React from 'react'
import _ from 'lodash'
import { getPokemon } from '../services/pokemon'
import PokedexCard from '../components/PokedexCard'

class Home extends React.Component {
  state = {
    pokemon: [],
    limit: 12,
    filter: ''
  }

  async componentDidMount() {
    try {
      const { data: pokemon } = await getPokemon()
      await this.setState({ pokemon })
    } catch(error) {
      console.error(error)
    }
  }

  filteredPokemon = () => {
    let filteredPokemon = (this.state.filter === '') ? this.state.pokemon : this.state.pokemon.filter(item => {
      return _.includes(item.name.toLowerCase(), this.state.filter.toLowerCase())
    })
    return filteredPokemon.slice(0, this.state.limit)
  }

  showMorePokemon = () => {
    this.setState({limit: this.state.limit + 12}, this.filteredPokemon)
  }

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value })
  }

  printPokemon = () => (
    this.filteredPokemon().map((item, index) => (
      <div
        className="col-md-4 col-lg-3 mb-3"
        key={index}
        onClick={ () => this.goToDetails(item) }
        >
        <PokedexCard pokemon={item} />
      </div>
    ))
  )

  goToDetails = pokemon => {
    this.props.history.push(`/detail/${pokemon.slug}`, { pokemon })
  }

  printButton = () => (
   this.state.filter === ''
    ? <button className="btn btn-primary" onClick={this.showMorePokemon}>Cargar más pokemon</button>
    : null
  )

  render() {
    return (
      <React.Fragment>
        <section className="pokedex-filters mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6 ml-auto mr-auto">
                <div className="text-center">
                  <label>Busca a tu pokemon favorito:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Introduce el nombre del pokemon"
                    onChange={ this.handleChangeFilter }
                  />
                  <small id="emailHelp" className="form-text text-muted">Actualmente solo se pueden hacer búsquedas por nombre</small>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main className="main-section mb-5">
          <div className="container">
            <section className="podexex-items">
              <div className="row">
                { this.printPokemon() }
              </div>
              <div className="row">
                <div className="col-md-12 text-center mt-3">
                  { this.printButton() }
                </div>
              </div>
            </section>
          </div>
        </main>
      </React.Fragment>
    )
  }
}

export default Home
