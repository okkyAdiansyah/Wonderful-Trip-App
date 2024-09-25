'use client';

import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    status: 400
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        await axios({
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url : url,
        })
        .then(res => {
            setData(res.data.payload);
            setLoading(!loading);
        })
        .catch(error => {
            setError(prevState => ({...prevState, isError: true, status: error.response.status}))
        })
    }

    fetchData();

  }, [url])
  return {loading, error, data};
}

export default useFetch