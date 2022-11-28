import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import MyProductsDetails from './MyProductsDetails';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProduct] = useState([])



    useEffect(() => {
        fetch(`https://mobile-shop-server.vercel.app/sell?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [user?.email])
    return (
        <div>
            <h2 className='text-3xl font-bold mt-3 text-center'>Seller Added {products.length} Products</h2>

            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 m-5 sm:grid-cols-1 shadow-xl'>
             
                {
                    products.map(product => <MyProductsDetails

                        key={product._id}
                        product={product}
                    ></MyProductsDetails>)
                }
            </div>
        </div>
    );
};

export default MyProducts;