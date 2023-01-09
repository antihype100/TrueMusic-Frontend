import React from "react";
import LeftSideBar from "../sidebars/LeftSidebar/LeftSidebar";
import RightSideBar from "../sidebars/RightSideBar/RightSideBar";

interface IBaseLayoutNoAuth {
    children: any
}

const BaseLayout = ({children}:  IBaseLayoutNoAuth) => {

    return (
            <div className='baseLayoutNoAuth'>

                <LeftSideBar/>

                {children}

                <RightSideBar/>
            </div>
    )

}

export default BaseLayout

