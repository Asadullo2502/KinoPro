import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
  Home, 
  Movies,
  SingleMovie,
  SingleShow,
  TvShow,
  SingleTopRated,
  TopRated,
  UpComing,
  SingleUpComing,
  SearchResults,
} from './pages'

import './assets/styles/main.scss'
import Header from './containers/Header'

function App() {
  return (
    <>
    <Router>
      <Header />
    <Switch>
    <Route exact path='/' component={Home} /> 
    <Route exact path='/All' component={Movies} /> 
    <Route exact path='/Popular' component={TopRated} /> 
    <Route exact path='/tvshows' component={TvShow} /> 
    <Route exact path='/Movies' component={UpComing} /> 
    <Route exact path='/Movies/:id' component={SingleUpComing} /> 
    <Route exact path='/movie/:id' component={SingleMovie} /> 
    <Route exact path='/tvshow/:id' component={SingleShow} /> 
    <Route exact path='/Popular/:id' component={SingleTopRated} /> 
    <Route exact path='/search/:searchQuery' component={SearchResults} /> 
    </Switch>
    </Router>
    </>
    );
  }
  
  export default App;
  