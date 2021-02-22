import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import PeopleList from 'components/PeopleList';
import { swapiAPI } from 'services/swapiAPI';

function App() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await swapiAPI.get('people', {
        params: {
          page: currentPage,
        },
      });
      setPeople(response.data.results);
      console.log(people);
    };

    fetchData();
  }, []);

  const handlePagination = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <Header />
      <PeopleList people={people} handlePagination={handlePagination} />
    </>
  );
}

export default App;
