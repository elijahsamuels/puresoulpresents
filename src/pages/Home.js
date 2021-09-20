import React from "react";
import { Link } from 'react-router-dom';
import userSamplePhoto from "../images/puresoulpresents.png";


export function Index() {
        return (
            <div>
				{/* <h1>Welcome to PureSoul Presents</h1> */}
                <br /><img src={userSamplePhoto} alt="User" width="300" />
				<br /><Link to="/userdetails">User Details</Link>
				<br /><Link to="/userlist">User List</Link>
				<br /><Link to="/contact">Contact</Link>
				{/* <br /><Link to="/test">Test</Link> */}
                
            </div>
        );
    }

export default Index;
