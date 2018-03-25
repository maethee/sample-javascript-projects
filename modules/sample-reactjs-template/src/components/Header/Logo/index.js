import React, { PureComponent } from 'react';

import logo from '../../../imgs/logo-mate-02.png';

class Logo extends PureComponent {
    render() {
        return (
            <a className="navbar-brand js-scroll-trigger" href="#page-top"> <img src={logo} className="App-logo" alt="logo" width={`100px`}/></a>
        );
    }
}

export default Logo;