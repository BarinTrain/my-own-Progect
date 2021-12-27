
import SideBar from "../SideBar/index";
import Cards from "./cards";

import './index.style.scss'

const User: React.FC = () => {
    return (
        <div className="mainContent">
            <div className="mainContent__sideBar">
                <SideBar />
            </div>
            <div className="mainContent__cards">
                <Cards />
            </div>
        </div>
    )
}

export default User;
