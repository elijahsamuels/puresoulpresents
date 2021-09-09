import React from "react";
import { UserPhoto } from "../components/userPhoto";
import { StaffInfo } from "../components/userdata/staffInfo";
import { ContactInfo } from "../components/userdata/contactInfo";
import { TaxInfo } from "../components/userdata/taxInfo";
import { UserInfo } from "../components/userdata/userInfo";
import { PaymentInfo } from "../components/userdata/paymentInfo";
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
