import React, { Component } from 'react';

/**
 * PortfolioItem
 * @desc Display list of portfolio or interesting article
 * @props {name: String , category: String , image : {thumbnail: PathUrl , full: PathUrl}}
 * */

class PortfolioItem extends Component {

    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={ this.props.image.full }>
                    <img className="img-fluid" src={ this.props.image.thumbnail } alt=""></img>
                    <div className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                            <div className="project-category text-faded">
                                { this.props.category }
                            </div>
                            <div className="project-name">
                                { this.props.name }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

PortfolioItem.displayName = 'Portfolio section'

export default PortfolioItem;
