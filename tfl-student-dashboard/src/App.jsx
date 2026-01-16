import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layouts/Sidebar';
import StudentDashboard from './pages/StudentDashboard';


export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        
        <div className="row">
          <div className="col-md-4 p-4">
          <Sidebar />
          </div>
          <div className="col-md-8 p-4">
            <Routes>
              <Route path='/' element={<StudentDashboard />} />
              <Route path='/dashboard' element={<StudentDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}