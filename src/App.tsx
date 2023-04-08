import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const LocateMe = lazy(() => import('./components/LocateMe'));
const LocateMe2 = lazy(() => import('./components/LocateMe2'));

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <nav style={{ width: '20%' }}>
            <ul>
              <li>
                <NavLink to="/locateme" activeClassName="active">
                  Locate Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/locateme2" activeClassName="active">
                  Locate Me 2
                </NavLink>
              </li>
            </ul>
          </nav>
          <div style={{ width: '80%' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/locateme" element={<LocateMe />} />
                <Route path="/locateme2" element={<LocateMe2 />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
  );
};

export { App };
