import {Route, Router, Routes} from "react-router-dom";
import {Home} from "../pages/home";


export const RouterTrank = () =>{

    return(
        <Routes>
            <Route path={''} element={<Home></Home>}></Route>
        </Routes>
    )
}