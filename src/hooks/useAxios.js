import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

function useAxios(url) {
  const [state, setState] = useState([]);
  const addState = async (route = "") => {
    const frontSlash = url[url.length - 1];
    let response;
    frontSlash === "/"
      ? (response = await axios.get(`${url}${route}`))
      : (response = await axios.get(`${url}/${route}`));

    console.log(response);
    setState((data) => [...data, { ...response.data, id: uuidv4() }]);
  };
  console.log(state);
  return [state, addState];
}

export default useAxios;
