import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/home'
import create from './pages/create/create'
import recipe from './pages/recipe/recipe'
import search from './pages/search/search'

//styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        {/* Route 1 */}
        <Route exact path='/'>
          <Home />
        </Route>
        {/* Route 2 */}
        <Route path='/create'>
          <create />
        </Route>
        {/* Route 3 */}
        <Route  path='/recipe/:id'>
          <recipe />
        </Route>
        {/* Route 4 */}
        <Route path='search'>
          <recipe />
        </Route>





      </Switch>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App