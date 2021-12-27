import SideBar from "../SideBar/index";
import Users from "./user";

import './index.style.scss'

const UserInfo = () => {

    return (
        <div className="infoBlock">
            <div className="infoBlock__tab">
                <SideBar />
            </div>
            <div className="infoBlock__user">
                <Users />
            </div>
        </div>
    )
}

export default UserInfo;
