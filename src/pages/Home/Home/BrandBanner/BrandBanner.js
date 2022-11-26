import React from 'react';

import phone3 from '../../../../Assets/phone-3.jpg'


const BrandBanner = () => {
    return (
        <section className='mt-5'>

            <h3 className='text-center text-3xl font-bold uppercase'>Contact US</h3>

            <div className="hero bg-black text-white mt-4">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={phone3} alt='' className=" w-1/3 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Popular Brands and Their Prices in Bangladesh:</h1>
                        <p className="py-6"> Mobile phones are one of the means of communication at the present time.
                            <br />
                            This is one of the essential things in our life. You will rarely see a single person who

                            spends his/her life without using a mobile phone.</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandBanner;