import {Link, Routes} from 'react-router-dom';

function Header() {
  return (
    
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Brand Logo */}
          <h2 className="navbar-brand mb-0">Collaborative Coding Platform</h2>

          {/* Navigation Links */}
          
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/show" className="nav-link">Show Users</Link>
              </li>
              <li className="nav-item">
                <Link to="/count" className='nav-link'>Count</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
}

export default Header;