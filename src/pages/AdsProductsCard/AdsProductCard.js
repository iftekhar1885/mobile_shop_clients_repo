import React from 'react';

const AdsProductCard = ({product}) => {

    const { img, location, original_price, year_use, mobile, condition, details } = product;
    console.log(product);
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                {/* {title} */}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className='font-bold text-rose-700'>Sell Price: ${original_price}</p>
            <p className='font-bold text-rose-700'>Year use: {year_use}</p>
            <p className='font-bold text-red-700'>Contact No: {mobile}</p> 
            <p>Condition: {condition}</p>
            <p>location: {location}</p>
            <p className='text-blue-400'>{details}</p>
           {/* <div className="card-actions justify-end">
                <button
                onClick={() => handleAdvirtice(_id)}
                className="btn btn-info"
                 >Advertise</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
            </div> */}
         </div>
    </div>
    );
};

export default AdsProductCard;