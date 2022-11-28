import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ phone, setPhone }) => {
    const { title, resale_Price, location } = phone;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.phone.value;


        console.log(name, email, phone);
        const booking = {
            title,
            email,
            mobile,
            location,
            name,
            resale_Price,

        }

        fetch('https://mobile-shop-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPhone(null);
                    toast.success('Purchase Confirmed')

                }


            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled readOnly placeholder="Your Name" className="input w-full input-bordered" />
                        <input name='email' type="email" defaultValue={user?.email} disabled readOnly placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder='phone number' className="input w-full input-bordered" />
                        <input type="text" value={resale_Price} className="input w-full input-bordered" />

                        <input type="text" value={location} className="input w-full input-bordered" />


                        <br />
                        <input className='btn btn-accent w-full max-w-sm' type='submit' value='submit' />

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;