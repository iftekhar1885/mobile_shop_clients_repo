import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../LayOut/DashboardLayout/DashBoardLayout";
import Main from "../../LayOut/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import DashBoard from "../../pages/Dashboard/DashBoard/DashBoard";
import MyAppointMent from "../../pages/Dashboard/MyAppointment/MyAppointMent";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Home/Home/Services/Services";
import Login from "../../pages/Login/Login";
import SignIn from "../../pages/SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        // {
        //   path:'/services/:id',
        //   element: <Services></Services>,
        //   loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        // }, 
        {
         path: '/category/:id',
         element: <Category></Category>,
         loader: ({params}) => fetch(`http://localhost:5000/category?category_id=${params.id}`),
        },

        
        {
            path: '/login',
            element:<Login></Login>
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
      element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointMent></MyAppointMent>
        }
      ]
    }
])

export default router;