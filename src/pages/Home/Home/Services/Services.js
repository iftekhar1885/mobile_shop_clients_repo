import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';

const Services = () => {

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: () => fetch(`https://mobile-shop-server.vercel.app/services`)
            .then(res => res.json())
    })



    return (
        <div className='mt-16'>
            <div>
                <h2 className='text-center text-3xl font-bold uppercase'>Our Services Category</h2>
                <h4 className='text-center text-1xl font-bold mt-3 uppercase'>We Provide This Services</h4>


            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}

                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;