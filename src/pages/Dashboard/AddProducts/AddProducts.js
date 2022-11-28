import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const previous = form.previous.value;
        const mobile = form.number.value;
        const description = form.message.value;
        const condition = form.condition.value;
        const location = form.location.value;

        console.log(name, price, mobile, previous, description, condition, location);

        const createProduct = {
            product_name: name,
            image: photoURL,
            email: email,
            price,
            previous,
            mobile,
            description,
            condition,
            location,

        }
        fetch(`https://mobile-shop-server.vercel.app/sells`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(createProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Add Product Succesfully');
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='w-96 p-7'>
            <h3 className='text-3xl text-center mt-5 font-bold'>Add Products</h3>

            <form className='grid justify-items-center' onSubmit={handleAddProduct}>
                <div className='grid justify-items-center gap-4 m-3 shadow-lg rounded-lg p-5 mb-0 bg-yellow-400 w-full'>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text">Service Image URl</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Your photo url" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input name='price' type="text" placeholder="price" className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input name='number' type="text" placeholder="Please give your number" className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text">Year Of Use</span>
                    </label>
                    <input name='previous' type="text" placeholder="year of use" className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='message' type='text' className="textarea textarea-bordered w-full" placeholder="Product Description" required></textarea>
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <textarea name='condition' type='text' className="textarea textarea-bordered w-full" placeholder="condition" required></textarea>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <textarea name='location' type='text' className="textarea textarea-bordered w-full" placeholder="Your Location" required></textarea>
                    <br />
                    <input className='btn m-3 w-full' type='submit' value='ADD PRODUCT'></input>
                </div>


            </form>



        </div>
    );
};

export default AddProducts;