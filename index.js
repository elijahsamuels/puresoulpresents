// https://api.airtable.com/v0/app00Ee4sqvmw2krS/tblAi6AIRhl0FUfhT?api_key=keyfrWpv2j3XMaL5E
// https://api.airtable.com/v0/app00Ee4sqvmw2krS/ALL%20DATES?api_key=keyfrWpv2j3XMaL5E

const utf8 = require('utf8');
const fetch = require("node-fetch");

const airtableURL = "https://api.airtable.com/v0/";
const puresoulAPI = "app00Ee4sqvmw2krS/";
const musiciansTable = "tblAi6AIRhl0FUfhT?";
const datesTable = "ALL%20DATES?";
const puresoulAPIkey = "api_key=keyfrWpv2j3XMaL5E";

const allPureSoulPresentsMuisicians = `${airtableURL}${puresoulAPI}${musiciansTable}${puresoulAPIkey}`;
const allPureSoulPresentsDates = `${airtableURL}${puresoulAPI}${datesTable}${puresoulAPIkey}`;

const getAllPureSoulPresentsMusicians = () => {
  fetch(allPureSoulPresentsMuisicians)
  // .then((response) => console.log(response));
  .then(response => response.json())
  .then(data => console.log(data));
};

getAllPureSoulPresentsMusicians();
