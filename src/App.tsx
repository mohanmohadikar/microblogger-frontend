import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page/home-page';
import { useState } from 'react';
import Authentication from './components/authentication/authentication';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Authentication />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
