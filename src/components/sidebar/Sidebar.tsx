import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to='/'>
            <FaIcons.FaHome /> Inicio
          </Link>
        </li>
        <li>
          <Link to='/login'>
            <FaIcons.FaUserAlt /> Login
          </Link>
        </li>
      </ul>
    </div>
  );
};
