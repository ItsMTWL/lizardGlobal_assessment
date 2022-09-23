import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';

function App() {  
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Details/:object_id" element={<DetailPage/>}/>

      </Routes>
    </Router>

  </div>
}

export default App;

