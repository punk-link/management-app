import React from "react";
import Avatar from "./avatar";

let managerInfo = {
    avatarUrl: "https://avatars.githubusercontent.com/u/19779590?v=4",
    name: "Kirill Taran",
    position: "South Chertanovo Records"
}

const ManagerInfo = () => {
    return (
        <div className="manager-info width-3 grid-6">
            <Avatar className="width-2" avatarUrl={managerInfo.avatarUrl} />
            <div className="text-info width-4">
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