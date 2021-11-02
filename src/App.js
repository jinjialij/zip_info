import { Route, Switch } from "react-router-dom";

import "./App.css";

import DataForm from "./components/DataForm/DataForm";
import MainNavigation from "./components/Navigation/MainNavgation";
import Formpage from "./components/DataForm/Formpage";
import ZipList from "./components/ZipList/ZipList";
import { useState, useEffect } from "react";
import { fetchLocationApiData, fetchZipInfoApiHandler } from "./services/api";
import { Container } from "react-bootstrap";
import ZipInfo from "./components/ZipInfo/ZipInfo";
import ZipCard from "./components/ZipInfo/ZipCard";

function App() {
  const [countryArr, setCountryArr] = useState(fetchDataHandler);
  const [zipInfo, setZipInfo] = useState({});
  const [zipList, setZipList] = useState({});
  useEffect(() => {
    fetchDataHandler();
  }, []);

  async function fetchDataHandler() {
    const data = await fetchLocationApiData(
      "https://api.countrystatecity.in/v1/countries"
    );
    // console.log(data);
    setCountryArr(() => {
      return [{ id: 0, key: "", value: "" }, ...data];
    });
  }

  async function fetchZipInfo(info) {
    console.log(info);
    const url = `http://api.zippopotam.us/${info.country}/${info.postcode}`;
    const data = await fetchZipInfoApiHandler(url);
    const places = data.places[0];
    const transformedData = {
      postcode: data["post code"],
      country: data.country,
      placeName: places["place name"],
      state: places.state,
      lat: places.latitude,
      long: places.longitude,
    };
    setZipInfo(transformedData);
  }

  async function fetchZipLists(info) {
    const url = `http://api.zippopotam.us/${info.country}/${info.state}/${info.city}`;
    // console.log(url);
    const data = await fetchZipInfoApiHandler(url);
    const transformedData = {
      country: data.country,
      places: data.places,
      state: data.state,
      placeName: data["place name"],
    };
    // console.log(transformedData);
    setZipList(transformedData);
  }

  return (
    <>
      <MainNavigation />
      <main className="container-fluid">
        <Switch>
          <Route path="/" exact={true}>
            <Formpage>
              <ZipInfo countries={countryArr} onGetZipInfo={fetchZipInfo} />
              {zipInfo.postcode && <ZipCard info={zipInfo} />}
            </Formpage>
          </Route>
          <Route path="/lists">
            {!zipList.country && (
              <Formpage>
                <DataForm
                  countries={countryArr}
                  onGetZipLists={fetchZipLists}
                />
              </Formpage>
            )}
            {zipList.country && <ZipList data={zipList} />}
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
