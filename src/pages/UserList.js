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
        minWidth: 650,
    },
});

// { first_name: "Bob", last_name: "Smith", id: 1 },
// { first_name: "Jane", last_name: "Doe", id: 2 },
// { first_name: "John", last_name: "Doe", id: 3 },
// { first_name: "Bill", last_name: "Nye", id: 4 },

export function UserList(users) {
    // const UserList = (users) => {
    const classes = useStyles();

    const [localUsers, setlocalUsers] = useState(null);

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
            <p>
                Name:{" "}
                {localUsers &&
                    localUsers.map((user) => (
                        <p>
                            <strong>Name:</strong> {user.fields.Name} Phone: {user.fields.Phone} Email: {user.fields.Email} Instrument: {user.fields.Instrument}
                        </p>
                    ))}
            </p>

            {/* {localUsers.map(user => user.records.map(name => name.fields.Name))} */}

            {/* <p> {users} </p> */}
            {/* <p> {() => setlocalUsers(users)} </p> */}

            {/* <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {localUsers.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">{row.first_name}</TableCell>
                                <TableCell align="center">{row.last_name}</TableCell>
                                <TableCell align="center">{row.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
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
