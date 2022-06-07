import styles from './App.module.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import MovieDetails from './pages/MovieDetails';
import Help from "./pages/Help";


const App = () => {
  return (

    <Router>

      <header className={styles.header}>
        {/* className={styles.titleApp}>Movies</h1> */}
            
            <Link to='/home'>Home</Link>
            <br />
            <Link to='/details'>Movies</Link>
            <br />
            <Link to ='/help'>Help</Link>

      </header>

      <main>
        <Routes>
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/details' element={<MovieDetails/>} />
          <Route path='/help' element={<Help/>} />
        </Routes>
      </main>

    </Router>
  );
}

export default App;
