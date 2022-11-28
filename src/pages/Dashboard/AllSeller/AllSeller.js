import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-shop-server.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-center m'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ads</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => {
                                return user.role === 'seller' && <tr key={user._id}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.price}</td>

                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;