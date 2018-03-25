import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

class Menu extends PureComponent {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to='/' className="nav-link js-scroll-trigger">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/article' className="nav-link js-scroll-trigger">Article</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="/#contact">Contact</a>
                </li>
            </ul>
        );
    }
}

export default Menu;