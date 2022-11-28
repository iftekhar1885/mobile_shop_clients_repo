import React, { useState } from 'react';
import toast from 'react-hot-toast';

const MyProductsDetails = ({ product }) => {
    const [deleteProduct, setDeleteProduct] = useState([])

    const { _id, title, img, original_price, year_use, mobile, details, condition, location } = product;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this products')
        if (proceed) {
            fetch(`https://mobile-shop-server.vercel.app/sell/${id}`, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = deleteProduct.filter(details => details._id !== id);
                        setDeleteProduct(remaining);
                    }
                })
        }
    }

    const handleAdvirtice = id => {
        fetch(`https://mobile-shop-server.vercel.app/sell/${id}`,
            {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },

            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('product added in advirtise');
                }

            })
            .catch(err => console.error(err));
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-20">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='font-bold text-rose-700'>Sell Price: ${original_price}</p>
                <p className='font-bold text-rose-700'>Year use: {year_use}</p>
                <p className='font-bold text-red-700'>Contact No: {mobile}</p>
                <p>Condition: {condition}</p>
                <p>location: {location}</p>
                <p className='text-blue-400'>{details}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleAdvirtice(_id)}
                        className="btn btn-info"
                    >Advertise</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                    <button className="btn btn-info">Status</button>
                </div>
            </div>
        </div>



    );
};

export default MyProductsDetails;