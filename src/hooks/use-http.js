import { useState, useCallback } from "react";

var Bottleneck = require("bottleneck/es5");

//Using bottleneck package to handle api call limit with limiter
//(1 max concurrent calls every 1000 ms)
const limiter = new Bottleneck({
  maxConcurrent: 1,
  minTime: 1000,
});

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //Send Request handles all the fetch logic, error and loading state.
  //applyData is a pointer to the function that
  //"tells" what should be done with the fetched data.
  const sendRequest = useCallback(async (requestURL, applyData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await limiter.schedule(() => fetch(requestURL)); //Here our fetch requests are limited to 1/s
      if (!response.ok) throw new Error("Request failed!");
      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }

    setIsLoading(false);
  }, []);

  //return isLoading and error to output conditional content in the component that uses the hook
  //return a pointer to sendRequest to be used whenever it is needed.
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
