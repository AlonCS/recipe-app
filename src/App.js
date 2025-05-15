import { BrowserRouter, Switch, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/home'
import Create from './pages/create/create'
import Search from './pages/search/search'
import Recipe from './pages/recipe/recipe'

// styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App