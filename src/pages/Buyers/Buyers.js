import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['buyer'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-shop-server.vercel.app/users`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-center m-6 font-bold'>My Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-1/4 ml-5">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>EMAIL</th>
                            <th>USER TYPE</th>
                            <th>DELETE</th>
                        </tr>

                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => {
                                return user.role === 'buyer' && <tr key={user._id}>
                                    <td>{i + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td> Verified</td>
                                    <td><button className=' btn btn-primary'>Delete</button></td>

                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;