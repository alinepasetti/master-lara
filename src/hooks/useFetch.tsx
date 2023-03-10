import { useEffect, useState } from 'react';
import { RequestStatus } from 'contexts/RecipesProvider/types';

// const isObjectEqual = (objA, objB) => {
//   return JSON.stringify(objA) === JSON.stringify(objB);
// };

export const useFetch = (instanceName) => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.RECIPES_IDLE,
  );
  const [instance] = useState(instanceName);
  const [result, setResult] = useState(null);
  const [request, setRequest] = useState<{ url: string; options: object }>(
    null,
  );

  useEffect(() => {
    if (request) {
      console.log(
        `useFetch${instance} > request useEffect > requesting to url`,
        request.url,
      );
      let wait = false;
      const controller = new AbortController();
      // const signal = controller.signal;

      const fetchData = async () => {
        await new Promise((r) => setTimeout(r, 1000));

        try {
          // const response = await fetch(request.url, {
          //   signal,
          //   ...request.options,
          // });

          // const jsonResult = await response.json();
          const response = (request.url, request.options).toString();

          const jsonResult = response;

          if (!wait) {
            setResult(jsonResult);
            console.log(
              `useFetch${instance} > request useEffect > request finished, result set!`,
            );
          }
        } catch (error) {
          if (!wait) {
            setRequestStatus(RequestStatus.RECIPES_ERROR);
          }
          console.log('MY ERROR:', error.message);
        }
      };

      fetchData();
      return () => {
        wait = true;
        controller.abort();
      };
    }
  }, [request, setRequest, instance]);

  return { result, setRequest, requestStatus, setRequestStatus };
};
