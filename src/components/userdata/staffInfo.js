import React from "react";

export function StaffInfo() {
  return (
    <div className="userDetails">
      <h3>Staff Info</h3>
      <p>
        <label>
          Staff Rating
          <select name="user_staff_rating" placeholder="">
            <option value="1">1. Great</option>
            <option value="2">2. Good</option>
            <option value="3">3. Ok</option>
            <option value="4">4. Questionable</option>
            <option value="5">5. Bad</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          Nickname
          <input name="user_nickname" placeholder="Super Spy Sam" />
        </label>
      </p>
      <p>
        <label>
          Staff Notes
          <textarea name="staff_notes" placeholder="Type here" />
        </label>
      </p>
    </div>
  );
}

export default StaffInfo;
