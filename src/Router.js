import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import DetailPokemon from './views/DetailPokemon'
import Header from './partials/Header'
import Footer from './partials/Footer'

const Router = _ =>
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/detail/:pokemonName" component={DetailPokemon} />
      <Footer />
    </React.Fragment>
  </BrowserRouter>

export default Router
