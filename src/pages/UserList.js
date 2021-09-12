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
import userSamplePhoto from "../images/userSamplePhoto.png";

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

    const userName = (userData) => {
        return userData.Name ? userData.Name : <font color="red">Missing Name</font>
    }

    const userPhone = (userData) => {
        return userData.Phone ? userData.Phone : <font color="red">Missing Phone</font>
    }

    const userInstrument = (userData) => {
        return userData.Instrument ? userData.Instrument : <font color="red">Missing Instrument</font>
    }

    const userCity = (userData) => {
        return userData.City ? userData.City : <font color="red">Missing City</font>
    }

    const userBio = (userData) => {
        return userData.Bio ? userData.Bio : <font color="red">Missing Bio</font>
    }

    // This string interpolation needs to be fixed
    const userEmail = (userData) => {
        return userData.Email ? <a href="mailto:${user.Email}">{userData.Email}</a> : <font color="red">Missing Email</font>
    }

    const userW9URL = (userData) => {
        return userData["W9"] ? <a href={userData["W9"][0].url}>User W9</a> : <font color="red">missing W9</font>
    }

    const userHeadshot = (userData) => {
        return userData["Headshot"] ? <a href={userData["Headshot"][0].url}>Headshot</a> : <font color="red">missing Headshot</font>
    }

    const userHeadshotURL = (userData) => {
        return userData["Headshot"] ? <img src={`${userData["Headshot"][0].url}`} alt="User" width="100" /> : <img src={userSamplePhoto} alt="User" width="100" />
    }

    const userHeadshotThumbnails = (userData) => {
        return userData["Headshot"] ? 
        <span><a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[0].url}`}>Small</a>{" "}<a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[1].url}`}>Medium</a>{" "}<a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[2].url}`}>Large</a></span> : false
    }

    const missingData = (userData) => {
        let missingItems = []
        
        return userData.Phone && userData.Phone && userData.Instrument && userData.City && userData.Bio && (userW9URL(userData).props.color !== "red" ) && (userHeadshot(userData).props.color !== "red" ) ? <font color="green">Good</font> : <font color="red">Info Missing</font>
        // userData.Name ? true : missingItems.push(userData.Name)
        // userData.Phone ? true : missingItems.push(userData.Phone)
        // return missingItems

    }

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
                            <TableCell align="center">Headshot</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {localUsers && localUsers.map((user) => (
                            <TableRow key={user.name}>
                                <TableCell align="center">
                                    {missingData(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userName(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userPhone(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userEmail(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userInstrument(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userCity(user.fields)}
                                </TableCell>
                                <TableCell align="center" width="200">
                                    {userBio(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userW9URL(user.fields)}
                                </TableCell>
                                <TableCell align="center">
                                    {userHeadshotURL(user.fields)}<br />
                                    {userHeadshotThumbnails(user.fields)}
                                </TableCell>
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
