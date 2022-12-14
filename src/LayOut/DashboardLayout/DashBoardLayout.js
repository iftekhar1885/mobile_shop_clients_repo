import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../../src/Shared/Navbar/Navbar';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/UseAdmin';
import useBuyer from '../../hooks/useBuyer/UseBuyer';
import useSeller from '../../hooks/UseSeller';


const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side ml-3 shadow-lg ">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-100 bg-light text-black shadow-lg">

                        {
                            isBuyer &&  <>
                                <li><Link to='/dashboard/orders'>My Orders</Link></li>
                               
                               
                            </>
                        }

                        {
                            isAdmin && <>
                               
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/buyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/report'>Report To Admin</Link></li>
                            </>
                        }

                    
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addproducts'>Add Product</Link></li>
                                <li><Link to='/dashboard/myproducts'>My Product</Link></li>
                            </>

                        }
                      
                      {/* <li><Link to='/dashboard/addproducts'>Add Product</Link></li>
                     <li><Link to='/dashboard/myproducts'>My Product</Link></li> */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;