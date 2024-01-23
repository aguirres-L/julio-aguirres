import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './About'; // Crea componentes para cada página que vayas a utilizar
import Home from '../page/Home';
import Contact from '../page/Contact';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={<Home/>} />
        <Route path="/about" component={About} />
        <Route path="/contacto" component={<Contact/>} />
        <Route path="/productos" component={About} />
        {/* Añade más rutas para tus diferentes páginas */}
      </Switch>
    </Router>
  );
};

export default Routes;
