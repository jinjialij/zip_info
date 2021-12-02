import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchLocationApiData, fetchZipInfoApiHandler } from "./services/api";

import "./App.css";

import DataForm from "./components/DataForm/DataForm";
import MainNavigation from "./components/Navigation/MainNavgation";
import Formpage from "./components/DataForm/Formpage";
import ZipList from "./components/ZipList/ZipList";
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
    const data = await fetchZipInfoApiHandler(
      "https://meetuphere.herokuapp.com/countries"
    );
    const countries = data.countries.map((el) => {
      return { id: el.id, key: el.iso2, value: el.name };
    });
    setCountryArr(() => {
      return [{ id: 0, key: "", value: "" }, ...countries];
    });
  }

  async function fetchZipInfo(info) {
    const url = `https://api.zippopotam.us/${info.country}/${info.postcode}`;
    try {
      const data = await fetchZipInfoApiHandler(url);
      if (data && data.places && data.places.length > 0) {
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
      } else {
        alert("Cannot find information of this post code, please try another.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
      console.error(error);
    }
  }

  async function fetchZipLists(info) {
    const url = `https://api.zippopotam.us/${info.country}/${info.state}/${info.city}`;
    try {
      const data = await fetchZipInfoApiHandler(url);
      if (data && data.places && data.places.length > 0) {
        const transformedData = {
          country: data.country,
          places: data.places,
          state: data.state,
          placeName: data["place name"],
        };
        setZipList(transformedData);
      } else {
        alert("Cannot find information of this place, please try another.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <>
      <MainNavigation />
      <main className="container">
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
