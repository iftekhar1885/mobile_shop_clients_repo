import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../LayOut/DashboardLayout/DashBoardLayout";
import Main from "../../LayOut/Main";

import Blog from "../../pages/Blog/Blog";
import Buyers from "../../pages/Buyers/Buyers";

import Category from "../../pages/Category/Category";
import AddProducts from "../../pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../pages/Dashboard/Allusers/AllUsers";
import MyAllProducts from "../../pages/Dashboard/MyAppointment/MyAllProducts";

import MyAppointMent from "../../pages/Dashboard/MyAppointment/MyAllProducts";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Login/Login";
import ReportToAdmin from "../../pages/ReportToAdmin/ReportToAdmin";
import SignIn from "../../pages/SignIn/SignIn";
import DisPlayError from "../../Shared/DisplayError/DisPlayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import SellerRoute from "../SellerRoutes/SellerRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <DisPlayError></DisPlayError>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://mobile-shop-server.vercel.app/category?category_id=${params.id}`),
      },
      // {
      //   path:'/advirtise',
      //   element: <AdsProducts></AdsProducts>,
      // loader: () => fetch(`https://mobile-shop-server.vercel.app/addproduct`)
      // },


      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    errorElement: <DisPlayError></DisPlayError>,
    children: [
      {
        path: '/dashboard',
        element: <MyAppointMent></MyAppointMent>,
      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>,
      },
      {
        path: '/dashboard/allseller',
        element: <AllSeller></AllSeller>
      },
      {
        path: '/dashboard/buyers',
        element: <Buyers></Buyers>,
      },
      {
        path: '/dashboard/orders',
        element: <AllBuyers></AllBuyers>
      },
      {
        path:'/dashboard/report',
        element: <ReportToAdmin></ReportToAdmin>,
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/myallproducts',
        element: <MyAllProducts></MyAllProducts>,
      },
      
    ]
  }
])

export default router;