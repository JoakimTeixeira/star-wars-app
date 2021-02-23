import { create } from 'axios';

const swapiAPI = create({
  baseURL: 'https://swapi.dev/api/',
  headers: { 'Content-Type': 'application/json' },
});

export const getPeople = async (currentPage) => {
  const response = await swapiAPI.get('people', {
    params: {
      page: currentPage,
    },
  });

  return response.data;
};
