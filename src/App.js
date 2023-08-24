import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import 'upkit/dist/style.min.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
