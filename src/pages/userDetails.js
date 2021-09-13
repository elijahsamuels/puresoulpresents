import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UserPhoto } from "../components/userPhoto";
import { StaffInfo } from "../components/userdata/staffInfo";
import { ContactInfo } from "../components/userdata/contactInfo";
import { TaxInfo } from "../components/userdata/taxInfo";
import { UserInfo } from "../components/userdata/userInfo";
import { PaymentInfo } from "../components/userdata/paymentInfo";
import { getAllMusicianData } from "../actions/userActions";

export function UserDetails() {
    return (
        <div className="userDetails">
            <Link to="/">Home </Link><br />
            <Link to="/userlist">User List</Link>

            <h2>User Card: </h2>
            <UserPhoto />
            <UserInfo />
            <ContactInfo />
            <TaxInfo />
            <StaffInfo />
            <PaymentInfo />
            {/* {getAllMusicianData()} */}
        </div>
    );
}

// *** include upload field for W9. ***

// export default UserDetails;


const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      users: state.users,
  };
};


export default connect(mapStateToProps, {getAllMusicianData})( UserDetails);
