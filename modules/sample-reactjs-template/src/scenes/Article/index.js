import React, { Component } from 'react';

/**
 *  Article
 *  @desc describe of article
 *  @props
 * */


class Article extends Component {

    render() {
        return (
            <section id="article">
                <div className={`container`}>
                    <div className="row">
                        <div className="col-lg-8 col-md-8">
                            <div class="col-lg-12 "><h2 class="section-heading">การเขียน Socket io และ ความเข้าใจ</h2><hr class="primary" /></div>
                            <div class="row no-gutter popup-gallery">
                                <div class="col-sm-12">
                                    <a class="portfolio-box" href="img/portfolio/fullsize/1.jpg">
                                        <img class="img-fluid" src="img/portfolio/thumbnails/1.jpg" alt=""></img>
                                            <div class="portfolio-box-caption">
                                                <div class="portfolio-box-caption-content">
                                                    <div class="project-category text-faded">Sample</div>
                                                    <div class="project-name">React Sample</div>
                                                </div>
                                            </div>
                                    </a>
                                    <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
                                        &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                                    </code></pre>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div class="row tp-con">
                                <h4 className="topic">Topics</h4>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit
                                        <ul>
                                            <li>Phasellus iaculis neque</li>
                                            <li>Purus sodales ultricies</li>
                                            <li>Vestibulum laoreet porttitor sem</li>
                                            <li>Ac tristique libero volutpat at</li>
                                        </ul>
                                    </li>
                                    <li>Faucibus porta lacus fringilla vel</li>
                                    <li>Aenean sit amet erat nunc</li>
                                    <li>Eget porttitor lorem</li>
                                </ul>
                            </div>
                            <div class="row tp-con">
                                <h4 className="topic">Repository</h4>
                                <div className="col-md-12">
                                    <p class="list-of-links ">
                                        <a href="https://github.com/maethee/sample-io-socket">github.com/maethee/sample-io-socket</a>
                                    </p>
                                    <h5>Keywords</h5>
                                    <p class="list-of-links ">
                                        <span>btree</span> ,
                                        <span>leveldb</span> ,
                                        <span>levelup</span> ,
                                        <span>binary</span> ,
                                        <span>mvcc</span> ,
                                        <span>database</span> ,
                                        <span>json</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

Article.displayName = 'Article scene'

export default Article;