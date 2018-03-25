import React, { Component } from 'react';

import PortfolioItem from './PortfolioItem'

class Portfolio extends Component {

    componentWillMount(){

    }

    render() {

        const portfolios = [
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/1.jpg', full:'img/portfolio/fullsize/1.jpg'}},
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/6.jpg', full:'img/portfolio/fullsize/2.jpg'}},
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/3.jpg', full:'img/portfolio/fullsize/3.jpg'}},
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/4.jpg', full:'img/portfolio/fullsize/4.jpg'}},
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/5.jpg', full:'img/portfolio/fullsize/5.jpg'}},
            {name: 'React Sample', category: 'Sample', image : {thumbnail: 'img/portfolio/thumbnails/6.jpg', full:'img/portfolio/fullsize/6.jpg'}}
            ];

        const listItems = portfolios.map((value, n) =>
            // Wrong! The key should have been specified here:
            <PortfolioItem { ...value } key={n} />
        );

        return (
            <section className="p-0" id="portfolio">
                <div className="container-fluid">
                    <div className="row no-gutter popup-gallery">
                        { listItems }
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount(){
        console.log('order componentDidMount')
    }
}

Portfolio.displayName = 'Portfolio section'

export default Portfolio;