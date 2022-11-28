import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../LayOut/DashboardLayout/DashBoardLayout";
import Main from "../../LayOut/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import AddProducts from "../../pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../../pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../pages/Dashboard/Allusers/AllUsers";
import MyAllProducts from "../../pages/Dashboard/MyAppointment/MyAllProducts";
import MyProduct from "../../pages/Dashboard/MyAppointment/MyAllProducts";
import MyAppointMent from "../../pages/Dashboard/MyAppointment/MyAllProducts";
import MyProducts from "../../pages/Dashboard/MyProducts/MyProducts";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Login/Login";
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
        path: '/dashboard/myallproducts',
        element: <MyAppointMent></MyAppointMent>,
      },
      {
        path: '/dashboard/allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/allseller',
        element: <SellerRoute><AllSeller></AllSeller></SellerRoute>
      },
      {
        path: '/dashboard/buyers',
        element: <BuyerRoute><AllBuyers></AllBuyers></BuyerRoute>
      },
      {
        path: '/dashboard/addproducts',
        element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
      },
      {
        path: '/dashboard/myproducts',
        element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
      },
      {
        path:'/dashboard/myallproducts',
        element:<BuyerRoute><MyAllProducts></MyAllProducts></BuyerRoute>,
      }
    ]
  }
])

export default router;