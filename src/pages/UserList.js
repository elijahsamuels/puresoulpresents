import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMusicianData } from "../actions/userActions";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const airtableURL = "https://api.airtable.com/v0/";
const puresoulAPI = process.env.REACT_APP_PURESOULAPI;
const musiciansTable = process.env.REACT_APP_MUSICIANS_TABLE;
const datesTable = "ALL%20DATES?";
const puresoulAPIkey = process.env.REACT_APP_PURESOULAPIKEY;
const allPureSoulPresentsMuisicians = `${airtableURL}${puresoulAPI}${musiciansTable}${puresoulAPIkey}`;
const allPureSoulPresentsDates = `${airtableURL}${puresoulAPI}${datesTable}${puresoulAPIkey}`;

const useStyles = makeStyles({
    table: {
        minWidth: 200,
    },
});

export function UserList(users) {

    const classes = useStyles();

    const [localUsers, setlocalUsers] = useState(null);
    const userW9 = `W9`;

    useEffect(() => {
        fetch(`${allPureSoulPresentsMuisicians}`)
            .then((response) => response.json())
            // .then(data => console.log(data.records[0].fields.Name))
            .then((data) => setlocalUsers(data.records))
            // .then((data) => dispatch({ type: "SET_USERS". data}))
            .catch((error) => console.log(error));
        console.log("useEffect Ran");
    }, []);
        
    return (
        <div className="userList">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/userdetails">User Details</Link>
            </li>
            <h1>User list</h1>
            {console.log(localUsers && localUsers.map((user) => user.fields))}
            {/* <p>
                {localUsers &&
                    localUsers.map((user) => (
                        <p>
                            <strong>Name:</strong> {user.fields.Name} Phone: {user.fields.Phone} Email: {user.fields.Email} Instrument: {user.fields.Instrument}
                        </p>
                    ))}
            </p> */}

            {/* {localUsers.map(user => user.records.map(name => name.fields.Name))} */}

            {/* <p> {users} </p> */}
            {/* <p> {() => setlocalUsers(users)} </p> */}

            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">All Good?</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Instrument</TableCell>
                            <TableCell align="center">City</TableCell>
                            <TableCell align="center">Bio</TableCell>
                            <TableCell align="center">W9</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {localUsers &&
                            localUsers.map((user) => (
                                <TableRow key={user.name}>
                                    <TableCell align="center">
                                        { user.fields.Phone && user.fields.Phone && user.fields.Instrument && user.fields.City && user.fields.Bio ? <font color="green">Good</font> : <font color="red">Info Missing</font>}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.Name}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.Phone ? user.fields.Phone : <font color="red">missing phone number</font>}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.Email ? user.fields.Email : <font color="red">missing email</font>}
                                        {/* {user.fields.Email ? <a href="mailto:${user.fields.Email}">{user.fields.Email}</a> : <font color="red">missing email</font>} */}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.Instrument ? user.fields.Instrument : <font color="red">missing instrument(s)</font>}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.City ? user.fields.City : <font color="red">missing city</font>}
                                    </TableCell>
                                    <TableCell align="center">
                                        {user.fields.Bio ? user.fields.Bio : <font color="red">missing bio</font>}
                                    </TableCell>
                                    {/* <TableCell align="center">{user.fields[`W9`]}</TableCell> */}
                                    {/* <TableCell align="center">{user.fields.Headshot["url"]}</TableCell> */}
                                    {/* <TableCell align="center">{user.id}</TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        users: state.users,
    };
};

export default connect(mapStateToProps, { getAllMusicianData })(UserList);
