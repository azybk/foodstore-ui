import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'upkit/dist/style.min.css';
import Home from './pages/Home';
import store from './app/store';

import { listen } from './app/listener';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    listen()
  }, [])

  return (
    <Provider store={store}>

        <Router>
          <Routes>
            <Route path='/' Component={Home} />
          </Routes>
        </Router>
      
    </Provider>
  );
}

export default App;
