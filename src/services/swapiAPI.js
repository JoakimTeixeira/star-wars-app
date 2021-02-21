import { create } from 'axios';

export const swapiAPI = create({
  baseURL: 'https://swapi.dev/api/',
  headers: { 'Content-Type': 'application/json' },
});
