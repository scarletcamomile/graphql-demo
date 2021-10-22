import { Route, Link } from 'react-router-dom';
import { ViewCats } from './components/ViewCats';
import { AddCatForm } from './components/AddCatForm';
import './styles/App.css';

const App = () => {

  return (
    <main className="app">
      <Link to="/new_cat" className="add-new-cat-button">I want to add a cat</Link>
      <Route path="/new_cat">
        <AddCatForm />
      </Route>
      <Route path="/" exact>
        <ViewCats />
      </Route>
    </main>
  );
}

export { App };
