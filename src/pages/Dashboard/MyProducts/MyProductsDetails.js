import React from 'react';

const MyProductsDetails = ({product}) => {
    const {_id, product_name, image, price, previous, mobile, description, condition, location} = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                     {product_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-bold text-rose-700'>Sell Price: ${price}</p>
                <p className='font-bold text-rose-700'>Market Price: ${previous}</p>
                <p className='font-bold text-red-700'>Contact No: {mobile}</p>
                <p>Condition: {condition}</p>
                <p>location: {location}</p>
                <p className='text-blue-400'>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Edit</div>
                    {/* <div onClick={() => handleDelete(_id)} className="badge badge-outline">Delete</div> */}
                </div>
            </div>
        </div>
    );
};

export default MyProductsDetails;