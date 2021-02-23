import React, { useState, useEffect, useRef } from 'react';
import Header from 'components/Header';
import PeopleList from 'components/PeopleList';
import { swapiAPI } from 'services/swapiAPI';
import Pagination from 'components/Pagination';

function App() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPeople = useRef('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await swapiAPI.get('people', {
        params: {
          page: currentPage,
        },
      });

      totalPeople.current = response.data.count;
      setPeople(response.data.results);
    };

    fetchData();
  }, [currentPage]);

  const handlePagination = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  return (
    <>
      <Header title="Star Wars" />
      <PeopleList people={people} />

      {people.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPeople={totalPeople.current}
          handlePagination={handlePagination}
        />
      )}
    </>
  );
}

export default App;
