import { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

export default function SearchTimeshare(props) {
    const [searchParams] = useSearchParams();

    useEffect(() => {
      const queryParams = searchParams.toString();
      const apiUrl = `http://localhost:8000/search?${queryParams}`; // WILL IMPLEMENT LATER
  
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Process the data received from the API
        })
        .catch((error) => {
          // Handle any errors here
        });
    }, [searchParams]);
    return (
        <>

        </>
    );
}