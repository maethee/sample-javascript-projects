import React, { PureComponent } from 'react';

import Logo from './Logo';

class Header extends PureComponent {

    componentWillMount(){

    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
                <div className="container">
                    <Logo></Logo>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">

                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;
