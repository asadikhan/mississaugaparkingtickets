import Papa from "papaparse";

var parkingTickets2016;
var parkingTickets2017;
var parkingTickets2018;
var parkingTickets2019;
var parkingTickets2020;
var parkingTickets2021;


export async function LoadLatLongData() {
  let urls = [
    "data/Parking_Tickets_2020_geocoded.csv",
  ];

  return Promise.all(
    //pass array of promises to Promise.all
    urls //you have an array of urls
      .map(
        //map urls to promises created with parse
        (url) =>
          new Promise(
            (
              resolve,
              reject //create one promise
            ) =>
              Papa.parse(url, {
                download: true,
                header: true,
                complete: resolve, //resolve the promise when complete
                error: reject, //reject the promise if there is an error
              })
          )
      )
  )
    .then(function (results) {
      let latLongData = results[0];
      latLongData = results[0].data.map(function(row) {
        let latlong = {};
        latlong.lat = row.lat;
        latlong.lng = row.lon;
        return latlong;
      });
      return latLongData;
    })
    .catch(
      //log the error
      (err) => console.warn("Something went wrong:", err)
    );
}


export async function LoadParkingTicketsData() {
  let urls = [
    "./data/Parking_Tickets_2016.csv",
    "data/Parking_Tickets_2017.csv",
    "data/Parking_Tickets_2018.csv",
    "data/Parking_Tickets_2019.csv",
    "data/Parking_Tickets_2020.csv",
    "data/Parking_Tickets_2021.csv",
  ];

  return Promise.all(
    //pass array of promises to Promise.all
    urls //you have an array of urls
      .map(
        //map urls to promises created with parse
        (url) =>
          new Promise(
            (
              resolve,
              reject //create one promise
            ) =>
              Papa.parse(url, {
                download: true,
                header: true,
                complete: resolve, //resolve the promise when complete
                error: reject, //reject the promise if there is an error
              })
          )
      )
  )
    .then(function (results) {
      parkingTickets2016 = results[0];
      parkingTickets2017 = results[1];
      parkingTickets2018 = results[2];
      parkingTickets2019 = results[3];
      parkingTickets2020 = results[4];
      parkingTickets2021 = results[5];
    })
    .catch(
      //log the error
      (err) => console.warn("Something went wrong:", err)
    );
}

function getDataSetByYear(year) {
  switch (year) {
    case "2016":
      return parkingTickets2016;
    case "2017":
      return parkingTickets2017;
    case "2018":
      return parkingTickets2018;
    case "2019":
      return parkingTickets2019;
    case "2020":
      return parkingTickets2020;
    case "2021":
      return parkingTickets2021;
    default:
  }
}

export async function GetParkingTicketTimes(year) {
  let countByHour = [];
  let dataSetByYear = getDataSetByYear(year);
  let times = dataSetByYear.data.map((a) => a.ISSUETIME);
  // Go through each time and put them in appropriate hour bucket
  for (let i = 0; i < times.length; i++) {
    if (times[i]) {
      let h = 0;
      h = times[i].substring(0,times[i].indexOf(':'))
      if (h.startsWith('0')) {
        h = times[i].substring(1,2);
      }
      if (!countByHour[h]) {
        countByHour[h] = 0;
      }
      countByHour[h]++;
    }
  }

  return countByHour;

}
