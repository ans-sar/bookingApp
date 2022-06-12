import React from 'react';
import Features from "../../components/features/Features.jsx"
import Navbar from '../../components/navbar/Navbar.jsx';
import Header from '../../components/header/Header.jsx';
import PropertyList from '../../components/propertyList/PropertyList.jsx';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties.jsx';
import MailList from '../../components/maillist/MailList.jsx';
import Footer from '../../components/footer/Footer.jsx';
import "./home.css";


const Home = () => {
    return(
        <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
            <Features />
            <h1 className='homeTitle'>Browse By Property Type</h1>
            <PropertyList/>
            <h1>Homes guests love</h1>
            <FeaturedProperties/>
            <MailList />
            <Footer />
        </div>
       
        </div>
    )
}
export default Home;