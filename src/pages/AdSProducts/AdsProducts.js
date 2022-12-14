import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

import AdsProductCard from '../AdsProductsCard/AdsProductCard';
import BookingModal from '../bookingModal/BookingModal';

const AdsProducts = () => {
    const [adsProduct, setAdsProduct] = useState(null);


    const { data: addproduct = [] } = useQuery({
        queryKey: ['addproduct'],
        queryFn: () => fetch(`https://mobile-shop-server.vercel.app/addproduct`)
            .then(res => res.json())
    })
    return (
        <div className='mt-16'>
            <div>
                <h2 className='text-center text-3xl font-bold uppercase'>This Is Ads Part</h2>
                <h4 className='text-center text-1xl font-bold mt-3 uppercase'>We Provide This Services</h4>
                <h4 className='text-center text-1xl font-bold mt-3 uppercase'>And This Service Is Available Now</h4>


            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    addproduct?.map(product => <AdsProductCard
                        key={product?.id}
                        product={product}
                        setAdsProduct={setAdsProduct}
                    ></AdsProductCard>)
                }
                {

                    adsProduct &&
                    <BookingModal
                        adsProduct={adsProduct}
                        setAdsProduct={setAdsProduct}
                    ></BookingModal>}

            </div>
        </div>
    );
};

export default AdsProducts;