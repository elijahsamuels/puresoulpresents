import React from "react";
import { UserPhoto } from "./userPhoto";
import { StaffInfo } from "./userdata/staffInfo";
import { ContactInfo } from "./userdata/contactInfo";
import { TaxInfo } from "./userdata/taxInfo";
import { UserInfo } from "./userdata/userInfo";
import { PaymentInfo } from "./userdata/paymentInfo";
import { getAllMusicians } from "../actions/userActions"

export function UserDetails() {
  return (
    <div className="userDetails">
      <h2>User Card: </h2>
      <UserPhoto />
      <UserInfo />
      <ContactInfo />
      <TaxInfo />
      <StaffInfo />
      <PaymentInfo />
      {/* {getAllMusicians()} */}
    </div>
  );
}

export default UserDetails;
