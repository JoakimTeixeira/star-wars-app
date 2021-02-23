import React from 'react';
import { objectOf, oneOfType, arrayOf, string, object, array } from 'prop-types';

const Person = ({ person }) => {
  Person.propTypes = {
    person: objectOf(oneOfType([string, array])).isRequired,
  };

  return (
    <section>
      <div>{person.name}</div>
      <div>{person.gender}</div>
    </section>
  );
};

const PeopleList = ({ people }) => {
  PeopleList.propTypes = {
    people: arrayOf(object.isRequired).isRequired,
  };

  return people.map((person) => {
    return <Person key={person.url} person={person} />;
  });
};

export default PeopleList;
