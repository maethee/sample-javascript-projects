import React, { Component } from 'react';

//Childs components
import Timeline from './components/Timeline'

class Home extends Component {
    constructor(props) {
        super(props);
        console.log('order constructor')
    }
    componentWillMount(){
        console.log('order componentWillMount')
    }
    render() {
        console.log('order render')
        return (
            <div className={`scene`}>
                <header className="masthead">
                    <div className="header-content">
                        <div className="header-content-inner">
                            <h1 id="homeHeading">Feed from Facebook</h1>
                            <p></p>
                        </div>
                    <Timeline />
                    </div>
                </header>
            </div>
        );
    }
    componentDidMount(){
        console.log('order componentDidMount')
    }

    // TODO update flow componentWillReceiveProps() --> shouldComponentUpdate() --> componentWillUpdate() --> render() --> componentDidUpdate()

    //TODO Unmounting componentWillUnmount()

    //TODO Other APIs setState() , forceUpdate()
}

Home.defaultProps = {
    template: 'blue'
};

Home.displayName = 'Home scene'

export default Home;
