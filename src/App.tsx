import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const LocateMe = lazy(() => import('./components/LocateMe'));

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <nav style={{ width: '20%' }}>
            <ul>
              <li>
                <NavLink to="/locateme" className="active">
                  Locate Me
                </NavLink>
              </li>
            </ul>
          </nav>
          <div style={{ width: '80%' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/locateme" element={<LocateMe />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
  );
};

export { App };
