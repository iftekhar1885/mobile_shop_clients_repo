import React from 'react';
import AdsProducts from '../../AdSProducts/AdsProducts';
import Category from '../../Category/Category';
import Banner from './Banner/Banner';
import BrandBanner from './BrandBanner/BrandBanner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>

            <Services></Services>

            <AdsProducts></AdsProducts>

            <BrandBanner></BrandBanner>
        </div>
    );
};

export default Home;