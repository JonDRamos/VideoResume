import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EditProfile from './EditProfile';

import './App.css';

function App() {
  return (

               
    <Router>
        <div className="App">

            <Routes>
                <Route path="/" element={<EditProfile/>} />
                <Route path="EditProfile" element={<EditProfile/>} />
            </Routes>

            
        </div>
    </Router>
);
}


export default App;
