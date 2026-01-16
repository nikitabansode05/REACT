import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className=" bg-dark text-white min-vh-100 p-3 d-flex flex-column">
      <h2 className='mb-4'>Transflower</h2>
      <ul className="nav flex-column mt-4">
        <li className="nav-item"><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/projects">Projects</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/assessments">Assessments</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;