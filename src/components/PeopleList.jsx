import React from 'react';
import PropTypes from 'prop-types';

const People = ({ people }) => {
  People.propTypes = {
    people: PropTypes.string.isRequired,
  };

  return (
    <section>
      {people.map((person) => {
        return (
          <div key={person.url}>
            <div>{person.name}</div>
            <div>{person.gender}</div>
          </div>
        );
      })}
    </section>
  );
};

const PeopleList = ({ people }) => {
  PeopleList.propTypes = {
    people: PropTypes.string.isRequired,
  };

  return <People people={people} />;
};

export default PeopleList;
