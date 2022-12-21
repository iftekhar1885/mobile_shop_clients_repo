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
        const original_price = form.price.value;
        const year_use = form.previous.value;
        const mobile = form.number.value;
        const details = form.message.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const category_id = form.id.value;

        // console.log(name, price, mobile, previous, description, condition,category_id, location);

        const createProduct = {
            title: name,
            img: photoURL,
            email: email,
            original_price,
            year_use,
            mobile,
            details,
            condition,
            location,
            category_id,

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
        <div className='w-full p-2 mt-5 mb-10'>
            <h3 className='text-3xl text-center mt-5 font-bold'>Add Products</h3>

            <form className='grid mt-5' onSubmit={handleAddProduct}>
                <div className='grid justify-items-center gap-2 shadow-lg rounded-lg mb-0 bg-yellow-400 w-full'>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Service Image URl</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Your photo url" className="input input-bordered w-1/2" />

                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input name='price' type="text" placeholder="price" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input name='number' type="text" placeholder="Please give your number" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Year Of Use</span>
                    </label>
                    <input name='previous' type="text" placeholder="year of use" className="input input-bordered w-1/2" />
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='message' type='text' className="textarea textarea-bordered w-1/2" placeholder="Product Description" required></textarea>
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <textarea name='condition' type='text' className="textarea textarea-bordered w-1/2" placeholder="condition" required></textarea>
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <textarea name='location' type='text' className="textarea textarea-bordered w-1/2" placeholder="Your Location" required></textarea>
                    <div className="form-control grid justify-items-center w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Choice Your Phone</span>
                    </label>
                            <select name='id' className="select select-bordered w-full max-w-xs">

                                <option value='01'>Iphone</option>
                                <option value='02'>Realme</option>
                                <option value='03'>Oppo</option>
                            </select>
                        </div>
                    <br />
                    <input className='btn w-1/2 mb-5' type='submit' value='ADD PRODUCT'></input>
                </div>


            </form>



        </div>
    );
};

export default AddProducts;