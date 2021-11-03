async function fetchLocationApiData(url) {
  const myInit = {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await fetch(url, myInit).then((resp) => resp.json());

    const data = result.map((el) => {
      return { id: el.id, key: el.iso2, value: el.name };
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function fetchZipInfoApiHandler(url) {
  try {
    const res = await fetch(url).then((resp) => resp.json());
    // console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export { fetchLocationApiData, fetchZipInfoApiHandler };
