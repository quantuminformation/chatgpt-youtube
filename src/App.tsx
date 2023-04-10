import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BitcoinChart from './components/BitcoinChart';
import LocateMe from './components/LocateMe';

const App = () => {
  return (
      <div style={{ backgroundColor: '#1d1d1d', color: '#fff', minHeight: '100vh' }}>
        <Router>
          <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
            <Link to="/" style={{ fontSize: '1.5rem', textDecoration: 'none', color: '#fff' }}>
              MyApp
            </Link>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/bitcoin-chart" style={{ margin: '0 1rem', textDecoration: 'none', color: '#fff' }}>
                Bitcoin Chart
              </Link>
              <Link to="/locate-me" style={{ margin: '0 1rem', textDecoration: 'none', color: '#fff' }}>
                Locate Me
              </Link>
            </div>
          </nav>
          <main style={{ padding: '1rem' }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<h1>Welcome to MyApp</h1>} />
                <Route path="/bitcoin-chart" element={<BitcoinChart />} />
                <Route path="/locate-me" element={<LocateMe />} />
              </Routes>
            </Suspense>
          </main>
        </Router>
      </div>
  );
};

export default App;
