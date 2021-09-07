import React from "react";

export function UserInfo() {
  return (
    <div className="userDetails">
      <h3>User Information</h3>
      <p>
        <label>
          First Name
          <input name="first_name" placeholder="First Name" />
        </label>

        <label>
          Last Name
          <input name="last_name" placeholder="Last Name" />
        </label>
      </p>
      <p>
        <a href="${userGigList}">User Gig List</a>
      </p>
      <p>
        <a href="${editUserDetails}">Edit User Details</a>
      </p>
    </div>
  );
}

export default UserInfo;
