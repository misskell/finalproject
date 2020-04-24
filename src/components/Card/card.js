import React from 'react';
import './card.css';
import handbagimg from './img/handbag.jpeg';

class card extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 text-white bg-dark">
                    <img className="card-img-top" src={handbagimg} alt="hand bag" />
                    <div className="card-body">
                        <h5 className="card-title">Hand Bag</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Edit</a> &nbsp;
                        <a href="http://www.jquery2dotnet.com/" className="btn btn-outline-light btn-sm">Delete</a>
                    </div>
                </div>
            </div>

            );
    }
}


export default card;