import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Dashboard from './containers/Dashboard';
import configureStore from './store/configureStore';
import NotFound from './NotFound';
import './App.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  </Provider>
);
export default App;