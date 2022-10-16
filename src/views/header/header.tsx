import { Link } from 'react-router-dom';
import NavbarCenter from '../navbar/navbarCenter';
import NavbarRight from '../navbar/navbarRight';

import './header.css'

const Header = () => {
  return (
    <div className="uk-container uk-navbar-container uk-container-expand">
      <nav className="uk-navbar" data-uk-navbar="mode:click">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">
            Inalterab
          </Link>
        </div>
        <NavbarCenter />
        <NavbarRight />
      </nav>
    </div>
  )
}

export default Header
