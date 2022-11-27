import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../bookingModal/BookingModal';
import CategoryDetail from './CategoryDetail';

const Category = () => {
    const [phone, setPhone] = useState(null);

    const categories = useLoaderData()
    
    return (
        <div className='grid gap-8 grid-cols-1 lg:grid-cols-3 mt-4 mx-6'>
            {
             categories?.map(category => <CategoryDetail
             key={category._id}
             category={category}
             setPhone={setPhone}
             ></CategoryDetail>)     
            }
           { 
             phone &&
           <BookingModal
              phone={phone}
              setPhone={setPhone}
            ></BookingModal>}
        </div>
    );
};

export default Category;