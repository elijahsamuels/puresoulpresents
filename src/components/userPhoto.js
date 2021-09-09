import React from "react";
import userSamplePhoto from "../images/userSamplePhoto.png";

export function UserPhoto() {
    return (
        <div className="userPhoto">
            <h3>User Photo</h3>
            <img src={userSamplePhoto} alt="User" width="200" />
        </div>
    );
}

export default UserPhoto;
