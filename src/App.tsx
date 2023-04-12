import { lazy, Suspense } from 'solid-js';
import { Router, Route, Link } from 'solid-app-router';

const BitcoinChart = lazy(() => import('./components/BitcoinChart'));
const LocateMe = lazy(() => import('./components/LocateMe'));
const GoogleMapsAutocompleteInput = lazy(() => import('./components/GoogleMapsAutocompleteInput'));

const App = () => {
    return (
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/bitcoin-chart">Bitcoin Chart</Link>
                    </li>
                    <li>
                        <Link href="/locate-me">Locate Me</Link>
                    </li>
                    <li>
                        <Link href="/google-maps-autocomplete-input">Google Maps Autocomplete Input</Link>
                    </li>
                </ul>
            </nav>

            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/bitcoin-chart" element={<BitcoinChart />} />
                    <Route path="/locate-me" element={<LocateMe />} />
                    <Route path="/google-maps-autocomplete-input" element={<GoogleMapsAutocompleteInput />} />
                </Suspense>
            </Router>

            <style>
                {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 1rem;
          }

          nav ul {
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin: 0;
          }

          nav li {
            margin-right: 1rem;
          }

          a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
          }

          a:hover {
            color: #000;
          }

          /* Additional styles for high contrast and nice on the eyes */
          body {
            background-color: #fff;
            color: #333;
          }

          a {
            color: #0077FF;
          }

          a:hover {
            color: #0055FF;
          }

          /* Minimal styles for SolidJS */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
            </style>
        </div>
    );
};

export default App;
