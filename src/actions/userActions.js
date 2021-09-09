import React from "react";
import { useEffect } from "react";

require("dotenv").config();

// const utf8 = require("utf8");
// const fetch = require("node-fetch");
const airtableURL = "https://api.airtable.com/v0/";
const puresoulAPI = process.env.REACT_APP_PURESOULAPI;
const musiciansTable = process.env.REACT_APP_MUSICIANS_TABLE;
const datesTable = "ALL%20DATES?";
const puresoulAPIkey = process.env.REACT_APP_PURESOULAPIKEY;
const allPureSoulPresentsMuisicians = `${airtableURL}${puresoulAPI}${musiciansTable}${puresoulAPIkey}`;
const allPureSoulPresentsDates = `${airtableURL}${puresoulAPI}${datesTable}${puresoulAPIkey}`;

// useEffect(() => {
//   getAllMusicianData()
// }, [])

// async function getAllMusicianData() {
//     await fetch(`${allPureSoulPresentsMuisicians}`)
//     .then((response) => response.json())
//     .then(json => console.log(json))
//     .catch((error) => console.log(error));
//   }

// THIS WORKS, but not really right
// export const getAllMusicianData = () => {
//   return fetch(`${allPureSoulPresentsMuisicians}`)
//   .then((response) => response.json())
//   .then(json => console.log(json))
//   .catch((error) => console.log(error));
// }

export const getAllMusicianData = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING" });
        fetch(`${allPureSoulPresentsMuisicians}`)
            .then((response) => response.json())
            .then((data) => dispatch({ type: "SET_USERS". data}))
            .catch((error) => console.log(error));
    };
};


// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch({ type: "LOADING" });
//     fetch("/users")
//       .then((response) => response.json())
//       .then((payload) => dispatch({ type: "SET_USERS", payload }));
//   };
// };

// async function getAllPureSoulPresentsMusicians() {
//   return () => {
//     await fetch(allPureSoulPresentsMuisicians)
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       });
//   };
// }

// export async function getAllPureSoulPresentsMusicians() {
//   try {
//     let musiciansList = await fetch(allPureSoulPresentsMuisicians)
//       .then((response) => response.json())
//       .then((data) => {
//         return data;
//       });
//     // .then(data => console.log(data));
//     // console.log(musiciansList.records[0])
//     // console.log(musiciansList.records[0].fields.Headshot)
//     // console.log(musiciansList.records[0].fields.Headshot[0].thumbnails.full)
//     return musiciansList();
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// }

// export default getAllMusicianData();
