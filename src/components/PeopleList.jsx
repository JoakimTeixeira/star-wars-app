import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ person }) => {
  Person.propTypes = {
    person: PropTypes.string.isRequired,
  };

  return (
    <section>
      <div key={person.url}>
        <div>{person.name}</div>
        <div>{person.gender}</div>
      </div>
    </section>
  );
};

const PeopleList = ({ people }) => {
  PeopleList.propTypes = {
    people: PropTypes.string.isRequired,
  };

  return people.map((person) => {
    return <Person person={person} />;
  });
};

export default PeopleList;
