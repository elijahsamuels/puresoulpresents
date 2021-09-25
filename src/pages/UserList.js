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
const puresoulAPIkey2 = process.env.REACT_APP_PURESOULAPIKEY2;
const allPureSoulPresentsMuisicians = `${airtableURL}${puresoulAPI}/${musiciansTable}${puresoulAPIkey}`;
const allPureSoulPresentsDates = `${airtableURL}${puresoulAPI}/${datesTable}${puresoulAPIkey}`;

const Airtable = require('airtable');
const base = new Airtable({apiKey: puresoulAPIkey2}).base(puresoulAPI);

// console.log(
//   "base: ",
//   base("ROSTER")
//     .select()
//     .all()
//     .then(resp => resp )
// );

const useStyles = makeStyles({
    // table: {
    //     minWidth: 3,
    // },
});

export function UserList() {

    const classes = useStyles();
    
    const userTernary = (userData, missingItem) => {
        return userData.localItem
          ? { true: userData.localItem }
          : { false: <font color="red">Missing {missingItem}</font> };
    }

    const userName = (userData) => {
        let missingItem = "Name"
        userData.localItem = userData.Name
        return Object.values(userTernary(userData, missingItem))       
  
    }

    const userPhone = (userData) => {
        let missingItem = "Phone"
        userData.localItem = userData.Phone
        return Object.values(userTernary(userData, missingItem))       
    }
    
    const userInstrument = (userData) => {
        let missingItem = "Instrument"
        userData.localItem = userData.Instrument
        return Object.values(userTernary(userData, missingItem))
    }
    
    const userCity = (userData) => {
        let missingItem = "City"
        userData.localItem = userData.City
        return Object.values(userTernary(userData, missingItem))       
    }
    
    const userBio = (userData) => {
        let missingItem = "Bio"
        userData.localItem = userData.Bio
        return Object.values(userTernary(userData, missingItem))       
    }
    
    const userEmail = (userData) => {
        let missingItem = "Email"
        userData.localItem = userData.Email
        return Object.values(userTernary(userData, missingItem))       
    }
    
    const userW9URL = (userData) => {
        let missingItem = "W9"
        
        // console.log(userData)
        // console.log(userData["W9"])
        // console.log("userTernary(userData, missingItem: ", userTernary(userData, missingItem) )
        // console.log("missingItem: ", missingItem )
        // console.log("userData[w9][0].url: ", userData["W9"] )
        if (userData["W9"] === undefined){
            return <font color="red">Missing {missingItem}</font>
        } else if (userData["W9"][0].url){
            userData.localItem = userData["W9"][0].url
            // console.log("userData.localItem: ", userData.localItem)
            return <a href={`${Object.values(userTernary(userData, missingItem))}`}>User {missingItem}</a>
            // return Object.values(userTernary(userData, missingItem)) 
        }
    }
    
    const userHeadshot = (userData) => {
        let missingItem = "Headshot"
    
        if (userData["Headshot"]){
            userData.localItem = userData["Headshot"][0].url
            return <img src={`${userData["Headshot"][0].url}`} alt="User" width="100" />
        } else {
            return <img src={userSamplePhoto} alt="User" width="100" /> 
        }
    }

    const userHeadshotThumbnails = (userData) => {
        return userData["Headshot"] ? 
        <span>
            <a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[0].url}`}>Small</a>{" "}
            <a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[1].url}`}>Medium</a>{" "}
            <a href={`${Object.values(userData["Headshot"][0]["thumbnails"])[2].url}`}>Large</a>
        </span> 
        : false
    }

    const missingData = (userData) => {
        // filter out user items that are undefined, and list those items. undefinded items are missing,
        // once the list is generated, use this info to send user an email requesting that info.
        let items = []
        
        if (typeof userPhone(userData)[0] !== "string") {
            items.push("Phone")
        }
        
        if (typeof userEmail(userData)[0] !== "string") {
            items.push("Email")
        }
        
        if (!Array.isArray(userInstrument(userData)[0])) {
            items.push("Instrument")
        }
        
        if (typeof userCity(userData)[0] !== "string") {
            items.push("City")
        }

        if (typeof userBio(userData)[0] !== "string") {
            items.push("Bio")
        }
        
        if (userW9URL(userData).props.href === undefined ) {
            items.push("W9")
        }
            
        if (userHeadshot(userData).props.src.includes("userSamplePhoto")) {
            items.push("Headshot")
        }
        
        if (items.length > 0) {
            let missingItemsList = items.map((item) => <li>{item}</li>);
            return <font color="red">Items Missing: {missingItemsList}</font>
        } else {
            return <font color="green">Good</font>
        }
    }

    const sendUserEmailAboutMissingData = (userData) => {
        // console.log("missingData Func: ", missingData(userData).props.children[1] === "o")
        if (missingData(userData).props.children[1] === "o") {
            // console.log("All good! Nothing to email about")
        } else {
            let missingInfo = missingData(userData).props.children[1]
            
            let emailLink = "mailto:" + Object.values(userEmail(userData))
            + "?cc=elijah@puresoulpresents.com, billy@puresoulpresents.com"
            + "&subject=" + encodeURIComponent("PureSoul Presents - Missing Musician Info")
            + "&body=" + encodeURIComponent("Email body here \n We\'re missing the following information from you: ") + missingInfo;
            // console.log(missingData(userData).props.children[1])
            // console.log(Object.values(userEmail(userData))[0])
            

        }

        // window.location.href = emailLink;
    }
//         let email = document.getElementById(`${userData.Email}`);
//         let subject = ('PureSoul Presents - Missing Musician Info');
//         let body = ('Hello! We seem to be missing some important infomation about you.');
//         document.write('<a href="mailto:' + '?subject=' + subject + '&body=' + body + '>' + 'Click here to send email as well' + '<'+'/a>');
// }
    // const emailUserAboutMissingData = (userData) => {
    //     missingData(userData)

    // }

    const [localUsers, setlocalUsers] = useState(null);

    useEffect(() => {
        base('ROSTER').select({ 
            maxRecords: 200, // Selecting N records in Roster Only:
            pageSize: 20,
            view: "Roster Only"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            setlocalUsers(records)
        }, function done(err) {
            if (err) { console.error(err); return; }
        }
        )}, []);

    const [pageUsers, setPageUsers] = useState(null);

    useEffect(() => {
        base('ROSTER').select({ 
            maxRecords: 200, // Selecting N records in Roster Only:
            pageSize: 20,
            view: "Roster Only"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            setPageUsers(fetchNextPage)
        }, function done(err) {
            if (err) { console.error(err); return; }
        }
        )}, []);
    

        // useEffect(() => {
    //     fetch(`${allPureSoulPresentsMuisicians}`)
    //         .then((response) => response.json())
    //         .then(data => console.log("data.records: ", data.records))
    //         .then((data) => setlocalUsers(data.records))
    //         // .then((data) => dispatch({ type: "SET_USERS". data}))
    //         .catch((error) => console.log(error));
    //     console.log("useEffect Ran");
    // }, []);
        const handleClick = () => {
            console.log("clicked!")
            console.log(setPageUsers())
            setPageUsers()
        }
    return (
        <div className="userList">
            <span>
                <Link to="/">Home</Link>
            </span>
            <span>
                <Link to="/userdetails">User Details</Link>
            </span>

            <h1>PureSoul Presents Musician List</h1>
            <button onClick={handleClick}>Next</button>  

            <TableContainer key={"tableContainer"} id={"tableContainer"} component={Paper}>
                <Table key={"table"} id={"table"} className={classes.table} sx={{ minWidth: 650 }} size="small" >
                    <TableHead key={"tableHead"} id={"tableHead"} >
                        <TableRow key={"tableRow"} id={"tableRow"}>
                            <TableCell key={"allgood"} id={"allgood"} align="left" width="10%">All Good?</TableCell>
                            <TableCell key={"firstname"} id={"firstname"} align="center" width="10%">Name</TableCell>
                            <TableCell key={"phone"} id={"phone"} align="center" width="10%">Phone</TableCell>
                            <TableCell key={"email"} id={"email"} align="center" width="10%">Email</TableCell>
                            <TableCell key={"instrument"} id={"instrument"} align="center" width="10%">Instrument</TableCell>
                            <TableCell key={"city"} id={"city"} align="center" width="10%">City</TableCell>
                            <TableCell key={"bio"} bio={"bio"} align="center" height="10">Bio</TableCell>
                            <TableCell key={"w9"} id={"w9"} align="center" width="5%">W9</TableCell>
                            <TableCell key={"headshot"} id={"headshot"} align="center">Headshot</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody 
                        key={"tableBody"} 
                        id={"tableBody"}>
                            {localUsers && localUsers.map((user) => (
                                <TableRow 
                                    key={"userRow_"+user.id} 
                                    id={"userRow_"+user.id}>
                                    <TableCell 
                                        key={"userMissingData_"+user.id} 
                                        id={"userMissingData_"+user.id} 
                                        align="left">
                                        {missingData(user.fields)}
                                        <br />
                                        {sendUserEmailAboutMissingData(user.fields)}
                                        {/* <button onclick={sendUserEmailAboutMissingData(user)}>Send Email</button> */}
                                    </TableCell>
                                    <TableCell 
                                        key={"userName_"+user.id} 
                                        id={"userName_"+user.id} 
                                        align="center">
                                        {userName(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userPhone_"+user.id} 
                                        id={"userPhone_"+user.id} 
                                        align="center">
                                        {userPhone(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userEmail_"+user.id} 
                                        id={"userEmail_"+user.id} 
                                        align="center">
                                        {userEmail(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userInstrument_"+user.id} 
                                        id={"userInstrument_"+user.id} 
                                        align="center">
                                        {userInstrument(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userCity_"+user.id} 
                                        id={"userCity_"+user.id} 
                                        align="center">
                                        {userCity(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userBio_"+user.id} 
                                        id={"userBio_"+user.id} 
                                        align="center" width="" height="10">
                                        {userBio(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userW9URL_"+user.id} 
                                        id={"userW9URL_"+user.id} 
                                        align="center">
                                        {userW9URL(user.fields)}
                                    </TableCell>
                                    <TableCell 
                                        key={"userHeadshot_"+user.id} 
                                        id={"userHeadshot_"+user.id} 
                                        align="center">
                                        {userHeadshot(user.fields)}
                                        <br/>
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
