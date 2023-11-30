import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Favorites from "../Favorites/Favorites";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
            path:'/',
            element: <Product></Product>
            },
            {
                path:'/addProduct',
                element: <AddProduct></AddProduct>
                },
            {
            path:'/favorite',
            element:<Favorites></Favorites>
            },
    ],
},
])
export default router;