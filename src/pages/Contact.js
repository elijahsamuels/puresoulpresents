import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMusicianData } from "../actions/userActions";
import Mailer from "../components/mailerEmailJS";

export function Contact() {
    return (
        <div className="userDetails">
            <br /><Link to="/">Home </Link>
            <br /><Link to="/userlist">User List</Link>
            <br /><Link to="/userdetails">User Details</Link>
            <Mailer />
        </div>
    );
}



const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      users: state.users,
  };
};


export default connect(mapStateToProps, {getAllMusicianData})( Contact);
