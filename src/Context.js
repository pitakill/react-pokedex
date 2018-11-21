import React from 'react'
import { getPokemon } from './services/pokemon'

export const ContextPokemon = React.createContext()

class Context extends React.Component {
  state = {
    pokemon: [],
    limit: 12,
    filter: ''
  }

  getPokemon = async () => {
    try {
      const { data: pokemon } = await getPokemon()
      await this.setState({ pokemon })
    } catch(error) {
      console.error(error)
    }
  }

  filteredPokemon = () => {
    const filteredPokemon = this.state.filter === ''
      ? this.state.pokemon
      : this.state.pokemon.filter(item => (
          item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
    )
    return filteredPokemon.slice(0, this.state.limit)
  }

  showMorePokemon = () => {
    this.setState({limit: this.state.limit + 12}, this.filteredPokemon)
  }

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value })
  }

  render() {
    const context = {
      state: this.state,
      filteredPokemon: this.filteredPokemon,
      getPokemon: this.getPokemon,
      handleChangeFilter: this.handleChangeFilter,
      showMorePokemon: this.showMorePokemon
    }

    return (
      <ContextPokemon.Provider value={ context }>
        { this.props.children }
      </ContextPokemon.Provider>
    )
  }
}

export default Context
