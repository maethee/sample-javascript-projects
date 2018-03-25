
import React, { PureComponent } from 'react';

class Info extends PureComponent {
    render() {
        return (
            <div id="banner" className="container">
                <div className="title">
                    <h2>Maethee</h2>
                    <span className="byline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
                </div>
                <ul className="actions">
                    <li><a className="button">Etiam posuere</a></li>
                </ul>
            </div>
        );
    }
}


export default Info;