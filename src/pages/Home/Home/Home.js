import React from 'react';
import Category from '../../Category/Category';
import Banner from './Banner/Banner';
import BrandBanner from './BrandBanner/BrandBanner';
import Services from './Services/Services';


const Home = () => {
    return (
        <div className='mx-6'>
            <Banner></Banner>

            <Services></Services>

            <BrandBanner></BrandBanner>
        </div>
    );
};

export default Home;