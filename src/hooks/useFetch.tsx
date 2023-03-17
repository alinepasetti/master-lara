import { useEffect, useState } from 'react';
import { RequestStatus } from 'contexts/RecipesProvider/types';

// const isObjectEqual = (objA, objB) => {
//   return JSON.stringify(objA) === JSON.stringify(objB);
// };
export const useMock = true;
const url = 'https://edamam-recipe-search.p.rapidapi.com/search?q=';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EDAMAN_API_KEY,
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com',
  },
};

export const useFetch = (instanceName: string) => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(
    RequestStatus.RECIPES_IDLE,
  );
  const [instance] = useState(instanceName);
  const [result, setResult] = useState(null);
  const [endPoint, setEndPoint] = useState<string>('');

  useEffect(() => {
    if (endPoint) {
      console.log(
        `useFetch${instance} > request useEffect > requesting to endPoint`,
        endPoint,
      );
      let wait = false;
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchData = async () => {
        try {
          const requestUrl = `${url}${endPoint}`;
          console.log(
            `useFetch${instance} > request useEffect > url `,
            requestUrl,
          );
          const response = await fetch(requestUrl, {
            signal,
            ...options,
          });

          const jsonResult = await response.json();
          console.log(
            `useFetch${instance} > request useEffect > jsonResult`,
            jsonResult,
          );
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
      if (!useMock) {
        fetchData();
      } else {
        setResult(endPoint);
        console.log(
          `useFetch${instance} > request useEffect > mocking request!`,
        );
      }
      return () => {
        wait = true;
        controller.abort();
      };
    }
  }, [endPoint, setEndPoint, instance]);

  return { result, setEndPoint, requestStatus, setRequestStatus };
};
