import 'upkit/dist/style.min.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
