import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Home';
import Songs from './Songs';
import SongForm from './SongForm';
import NavBar from "./NavBar";

function App() {
  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/songs">
            <Songs />
          </Route>
          <Route path="/add-song">
            <SongForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
