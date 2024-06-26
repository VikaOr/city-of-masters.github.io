import { createBrowserRouter } from "react-router-dom";
import Main_page from './../Pages/Main_page.jsx';
import Price from './../Pages/Prices.jsx';
import Lamps from "../Pages/Lamps.jsx";
import Ceiling from "../Pages/Ceiling.jsx";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main_page/>,

    },
    {
        path: '/price',
        element: <Price/>,
    },
    {
        path: '/lamps',
        element: <Lamps/>,
    },
    {
        path: '/ceiling',
        element: <Ceiling/>
    }
]);