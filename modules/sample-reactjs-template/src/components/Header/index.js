import React, { PureComponent } from 'react';

import Menu from './Menu';
import Logo from './Logo';
//import Info from 'components/Header/Info';

//Plugins
//import $ from 'jquery';

class Header extends PureComponent {

    componentWillMount(){
        // $(window).scroll(function() {
        //     if ($("#mainNav").offset().top > 100) {
        //         $("#mainNav").addClass("navbar-shrink");
        //     } else {
        //         $("#mainNav").removeClass("navbar-shrink");
        //     }
        // });
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
                <div className="container">
                    <Logo />
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <Menu />
                    </div>
                </div>
            </nav>
        );
    }
}


export default Header;
