import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

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
