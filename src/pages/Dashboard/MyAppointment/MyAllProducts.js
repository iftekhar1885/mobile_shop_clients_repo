import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyAllProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `https://mobile-shop-server.vercel.app/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-4'>My Orders</h2>
            <div className="overflow-x-auto m-3">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Price</th>
                            <th>Location</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking?._id}>

                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.resale_Price}</td>
                                <td>{booking.location}</td>


                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllProducts;