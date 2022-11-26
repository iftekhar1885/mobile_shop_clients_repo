import React from 'react';

import phone from '../../../../Assets/phone-2.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 text-black bg-light">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={phone} alt='' className=" w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Mobile Phone Offer</h1>
                    <p className="py-6"> Mobile phones are one of the means of communication at the present time.
                    <br/>
                     This is one of the essential things in our life. You will rarely see a single person who 
                     
                     spends his/her life without using a mobile phone.</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;