import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMusicianData } from "../actions/userActions";

export function UserList() {
    return (
        <div className="userList">
            <li><Link to="/">Home</Link></li>
			<li><Link to="/userdetails">User Details</Link></li>
asdfad
        </div>
    );
}


const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      users: state.users,
  };
};


export default connect(mapStateToProps, {getAllMusicianData})(UserList);
