const endpoint = document.getElementById("text");

async function getEndpoints(url) {
    const res = await fetch(url);
    const obj = await res.json();
 //   const {city, country, ip, latitude, longitude}= obj
    console.log(obj);
//    endpoint.textContent = `city: ${city} country:${country} ip: ${ip} longitude: ${longitude} latitude: ${latitude}`
    const {city, country, ip, latitude, longitude}= obj
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    const cityEl = document.createElement("span");
    cityEl.textContent = `City: ${city}`;
    const countryEl = document.createElement("p");
    countryEl.textContent = `Country: ${country}`;
    const ipEl = document.createElement("p");
    ipEl.textContent = `IP: ${ip}`;
    const latitudeEl = document.createElement("p");
    latitudeEl.textContent = `Latitude: ${latitude}`;
    const longitudeEl = document.createElement("p");
    longitudeEl.textContent = `Longitude: ${longitude}`;
    cardEl.append(cityEl, countryEl, ipEl, latitudeEl, longitudeEl);
    endpoint.append(cardEl);
    };


getEndpoints("https://get.geojs.io/v1/ip/geo.json");
