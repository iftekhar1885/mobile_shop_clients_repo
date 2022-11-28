import React from 'react';

const CategoryDetail = ({ category, setPhone }) => {

    const { title,
         img, location, original_price, resale_Price, year_use } = category;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">


                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl w-1/2" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-bold'> Original Price: {original_price}</p>
                    <p className='text-bold'> Resale Price: {resale_Price}</p>
                    <p className='text-bold'> Year of Use: {year_use}</p>
                    <p className='text-bold'>{location}</p>

                    <div className="card-actions">
                    
                        <label
                         htmlFor="booking-modal" 
                         className="btn btn-primary text-yellow-50"
                         onClick={() => setPhone(category)}
                         >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetail;