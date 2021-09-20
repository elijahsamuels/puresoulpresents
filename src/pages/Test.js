// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { getAllMusicianData } from "../actions/userActions";

// import { makeStyles } from "@material-ui/core/styles";

// const airtableURL = "https://api.airtable.com/v0/";
// const puresoulAPI = process.env.REACT_APP_PURESOULAPI;
// const musiciansTable = process.env.REACT_APP_MUSICIANS_TABLE;
// const datesTable = "ALL%20DATES?";
// const puresoulAPIkey = process.env.REACT_APP_PURESOULAPIKEY;
// const puresoulAPIkey2 = process.env.REACT_APP_PURESOULAPIKEY2;
// const allPureSoulPresentsMuisicians = `${airtableURL}${puresoulAPI}/${musiciansTable}${puresoulAPIkey}`;
// const allPureSoulPresentsDates = `${airtableURL}${puresoulAPI}/${datesTable}${puresoulAPIkey}`;
// const useStyles = makeStyles({
//   table: {
//     minWidth: 200,
//   },
// });

// //############################
// var Airtable = require('airtable');
// var base = new Airtable({apiKey: 'keyfrWpv2j3XMaL5E'}).base('app00Ee4sqvmw2krS');

// base('ROSTER').select({
//     // Selecting the first 3 records in Roster Only:
//     maxRecords: -1,
//     view: "Roster Only"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved: ', record);
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

// //############################

// export function Test(users) {
// //   const classes = useStyles();
// //   const [localUsers, setlocalUsers] = useState(null);

// //   useEffect(() => {
//     // fetch(`${allPureSoulPresentsMuisicians}`)
//     //   .then((response) => response.json())
//     //   // .then(data => console.log("data.records: ", data.records))
//     //   .then((data) => setlocalUsers(data.records))
//     //   // .then((data) => dispatch({ type: "SET_USERS". data}))
//     //   .catch((error) => console.log(error));
//     // console.log("useEffect Ran");
// //   }, []);

//   return <div className="test"></div>;
// }

// const mapStateToProps = (state) => {
//   return {
//     loading: state.loading,
//     users: state.users,
//   };
// };

// export default connect(mapStateToProps, { getAllMusicianData })(Test);
