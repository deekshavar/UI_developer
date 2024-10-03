import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGrid from './ImageGrid';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async (pageNum) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=5&page=${pageNum}&order=Desc`
      );
      setData((prevData) => [...prevData, ...response.data]);
    } catch (err) {
      setError('Error fetching data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handleScroll = () => {
    const scrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const threshold = document.documentElement.offsetHeight - 100; // Adjust threshold for earlier trigger

    // Check if near the bottom and not already loading
    if (scrollPosition >= threshold && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {data.length > 0 && <ImageGrid data={data} />}
    </div>
  );
};

export default InfiniteScroll;
