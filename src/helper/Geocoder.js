// import Papa from "papaparse";
const papa = require("papaparse");
const fs = require("fs");
const axios = require("axios");

Start();
var modifiedData;

function Start() {
  const options = {
    /* options */
    header: true,
  };

  const dataStream = fs.createReadStream(
    "../../public/data/Parking_Tickets_2021.csv"
  );
  const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

  dataStream.pipe(parseStream);

  let data = [];
  parseStream.on("data", (chunk) => {
    data.push(chunk);
  });

  parseStream.on("finish", () => {
    // console.log(data);
    // console.log(data.length);
    modifiedData = data;
    Geocode(data);
  });
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function save() {
  var csv = papa.unparse(modifiedData);
  fs.writeFileSync("FILE123.CSV", csv);
}

async function Geocode(data) {
  // Go through each record in parkingTickets2021
  for (let i = 0; i < data.length; i++) {
    // data.length; i++) {
    await sleep(1000);

    // Take out street address
    let address = data[i].LOCATIONDESC1;
    console.log(i + ' - ' + address);
    // Noticed that some addresses start with OP or NR in the data provided by the city that causes
    // issues with getting lat/long from nominatim. E.g. NR 4100 LIVING ARTS DR. It should be
    // 4100 LIVING ARTS DR without NR instead for geocoding to work.
    let addressPrefix = address.substring(0,1);
    if (addressPrefix.match(/[a-z]/i)) {
        address = address.substring(3, address.length);
    }

    // Call https://nominatim.openstreetmap.org/search?q=5456+oscar+peterson+blvd,+mississauga&format=xml&polygon_geojson=1&addressdetails=1
    axios
      .get(
        "https://nominatim.openstreetmap.org/search?q=" +
          address +
          ",+mississauga&format=json&polygon_geojson=1&addressdetails=1"
      )
      .then((response) => {
        // console.log(response.data.url);
        // console.log(response.data.explanation);
        // Modify parkingTickets2021 object and add the lat long
        if (response.data != undefined && response.data[0] != undefined) {
          modifiedData[i].lat = response.data[0].lat;
          modifiedData[i].lon = response.data[0].lon;
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }

  await sleep(10000);
  save();
}
