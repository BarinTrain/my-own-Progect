import Cards from "./cards";

import './index.style.scss'

const User: React.FC = () => {
    return (
        <div className="mainContent">
            <div className="mainContent__cards">
                <Cards />
            </div>
        </div>
    )
}

export default User;
