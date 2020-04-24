import React from 'react';
import Card from '../Card/card';
import '../../assets/css/styles.css';
import ProfilePic from "react-rounded-image";
import profimg from './img/SmartSelect_20200422-110347_WhatsApp.jpg';
import './account.css';

class account extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
            <div className="container aboutus">
                <br/><br/><br/><br/>
                <h2 className="aboutus-title">My Account</h2>
                <div class="row">
                    <div className="col-md-2 col-sm-12">
                    <ProfilePic
                        image={profimg}
                        roundedSize="0"
                        imageWidth="110"
                        imageHeight="110"
                    />
                    </div>
                    <div className="col-md-10 col-sm-12 pt-2">
                        <span style={{fontSize:'30px'}}>MaRRIIIIDDDAaa</span><span id="edit_space">Edit</span><span style={{marginLeft:'5%'}}>Messages</span>
                        <hr style={{border: '1.2px solid #5576BA'}}/>
                        <span>Dusseldorf, Berk Markt</span>
                    </div>
                </div>
                
                <br/><br/>
                <h4 className="aboutus-title">My Ads</h4>
                <div class="row">                
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        );
    }
}


export default account;