import './App.css';
import About from './Content/About/About';
import Main from './Content/Main/Main';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Main/> */}
    <Router>
      <Routes>
      {/* <Route exact path="/" element={<Home/>}>
        </Route> */}
        <Route exact path="/" element={<Main/>}>
        </Route>
        <Route exact path="/About" element={<About/>}>
        </Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
    
    </>
  );
}

export default App;
