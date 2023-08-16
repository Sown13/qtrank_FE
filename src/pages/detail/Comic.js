import {Outlet} from "react-router-dom";

export default function Comic(){
    return(
        <div className={"comic"}>
        <Outlet></Outlet>
        </div>
    )
}