import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './hoc/layout';
import JoinUs from './components/JoinUs/joinUs';
import Login from './components/Login/login';
import AboutUs from './components/AboutUs/aboutUs';
import Blog from './components/Blog/blog';
import Chat from './components/Chat/chat';
import ContactUs from './components/ContactUs/contactUs';
import Calendar from './components/Calendar/calendar';
import Impressum from './components/Impressum/impressum';
import Account from './components/Account/account';


const Routes = () => {
    return (
        <Layout>
            <Switch>
                    <Route path="/" exact component={ Home }/>                
                    <Route path="/joinus" exact component={ JoinUs }/>               
                    <Route path="/login" exact component={ Login }/>               
                    <Route path="/aboutus" exact component={ AboutUs }/>               
                    <Route path="/blog" exact component={ Blog }/>               
                    <Route path="/chat" exact component={ Chat }/>               
                    <Route path="/contactus" exact component={ ContactUs }/>               
                    <Route path="/calendar" exact component={ Calendar }/>               
                    <Route path="/impressum" exact component={ Impressum }/>               
                    <Route path="/my-account" exact component={ Account }/>               
            </Switch>
        </Layout>
    );
};

export default Routes;