import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {


        const { data: users = [] } = useQuery({
            queryKey: ['buyer'],
            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/users`);
                const data = await res.json();
                return data;
            }
        })
    return (
        <div>
        <h2 className='text-3xl text-center'>All Seller</h2>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Favorite Color</th>
                    </tr>

                </thead>
                <tbody>

                    {
                        users.map((user, i) => {return user.role === 'buyer' && <tr key={user._id}>
                        <td>{i + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>

                    </tr>})
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllBuyers;