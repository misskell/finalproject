import React from 'react';
import '../../assets/css/styles.css';
import aboutusimage from './img/aboutus1.jpeg';

class aboutUs extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className="aboutus-section">
                <br/><br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="aboutus">
                                <h2 className="aboutus-title">About Us</h2>
                                <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                                <a className="aboutus-more" href="#">read more</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="aboutus-banner">
                                <img style={{width: '270px'}} src={aboutusimage} alt />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6 col-xs-12">
                            <div className="feature">
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Vera</h4>
                                            <p>Fron-End Web Developer ( <a href="#">vera@swapnation.de</a>) </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Noor</h4>
                                            <p>Web Developer & Designer ( <a href="#">noor@swapnation.de</a>) </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="feature-box">
                                    <div className="clearfix">
                                        <div className="iconset">
                                            <span className="glyphicon glyphicon-cog icon" />
                                        </div>
                                        <div className="feature-content">
                                            <h4>Marida</h4>
                                            <p>Back-End Web Developer ( <a href="#">marida@swapnation.de</a>) </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}



export default aboutUs;