import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/search-results" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
