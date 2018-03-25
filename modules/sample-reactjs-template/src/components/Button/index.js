import React, { PureComponent } from 'react';

var buttonStyle = {
    margin: '10px 10px 10px 0'
};

class Button extends PureComponent {
    render: function () {
    return (
        <button
            className="btn btn-default"
            style={buttonStyle}
            onClick={this.props.handleClick}>{this.props.label}</button>

}

export default Button;

