import React from "react";
import Avatar from "./avatar";

const ManagerInfo = () => {
    let managerInfo = {
        avatarUrl: "https://avatars.githubusercontent.com/u/19779590?v=4",
        name: "Kirill Taran",
        position: "South Chertanovo Records"
    }

    return (
        <div className="manager-info width-4/12 grid-3">
            <Avatar className="member-avatar width-1/12" avatarUrl={managerInfo.avatarUrl} />
            <div className="text-info width-2/12 vertical-grid-2-slim">
                <div className="name height-1">
                    {managerInfo.name}
                </div>
                <div className="position height-1">
                    {managerInfo.position}
                </div>
            </div>
        </div>
    );
}

export default ManagerInfo;