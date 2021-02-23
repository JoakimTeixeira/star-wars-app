import React, { useState, useEffect, useRef } from 'react';
import PeopleList from 'components/PeopleList';
import { getPeople } from 'services/swapiAPI';
import Pagination from 'components/Pagination';

const Home = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPeople = useRef('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPeople(currentPage);

      totalPeople.current = response.count;
      setPeople(response.results);
    };

    fetchData();
  }, [currentPage]);

  const handlePagination = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  return (
    <>
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
};

export default Home;
