import { useFormikContext, useField, ErrorMessage } from "formik";
import FormField from "./FormField";
import { fetchLocationApiData } from "../../services/api";
import { useState, useEffect } from "react";
import SelectField from "./SelectField";

const AsyncSelectionField = (props) => {
  const { values: country, touched, setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const [selectedCountry, setSelectedCountry] = useState(country.country);
  const [disabled, setDisabled] = useState(true);
  const [selectedState, setSelectedState] = useState(country.state);
  const [stateArr, setStateArr] = useState([]);
  const [cityArr, setCityArr] = useState([]);
  useEffect(() => {
    // set the value of state, based on country
    let url;
    if (
      touched.country &&
      country.country !== selectedCountry &&
      country.country
    ) {
      (async function () {
        url = `https://api.countrystatecity.in/v1/countries/${country.country}/states`;
        const data = await fetchLocationApiData(url);
        setStateArr([{ id: 0, key: "", value: "" }, ...data]);
      })();
      setSelectedCountry(country.country);
      setFieldValue("state", " ");
      setFieldValue("city", " ");
    }

    if (touched.country && country.country !== "" && country.state === "") {
      (async function () {
        url = `https://api.countrystatecity.in/v1/countries/${country.country}/states`;
        const data = await fetchLocationApiData(url);
        setStateArr([{ id: 0, key: "", value: "" }, ...data]);
      })();
      setFieldValue("city", " ");
    }

    if (
      touched.country &&
      country.state !== "" &&
      country.state !== selectedState
    ) {
      setSelectedState(country.state);
      url = `https://api.countrystatecity.in/v1/countries/${country.country}/states/${country.state}/cities`;
      (async function () {
        const data = await fetchLocationApiData(url);
        setCityArr([{ id: 0, key: "", value: "" }, ...data]);
      })();
      setFieldValue("city", " ");
    }
    if (
      touched.country &&
      country.country === selectedCountry &&
      country.country
    ) {
      setDisabled(false);
    }
    console.log(country);
  }, [
    selectedCountry,
    selectedState,
    country,
    touched.country,
    country.country,
    country.state,
    touched.state,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      {props.name === "country" && (
        <>
          <FormField
            label="Post/Zip code"
            name="postcode"
            type="text"
            disabled={disabled}
          />
          <SelectField {...props} {...field} options={props.options} />
          <ErrorMessage className="error" component="div" name={field.name} />
        </>
      )}
      {props.name === "state" && stateArr.length > 1 && (
        <>
          <SelectField {...props} {...field} options={stateArr} />
          <ErrorMessage className="error" component="div" name={field.name} />
        </>
      )}
      {props.name === "city" && cityArr.length > 1 && (
        <>
          <SelectField {...props} {...field} options={cityArr} />
          <ErrorMessage className="error" component="div" name={field.name} />
        </>
      )}
    </>
  );
};

export default AsyncSelectionField;
