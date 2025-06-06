import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
