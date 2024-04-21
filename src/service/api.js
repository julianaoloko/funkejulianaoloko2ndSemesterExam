import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'julianaoloko';


export const getRepos = async (page = 1, per_page = 10, query = '') => {
  const url = `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?page=${page}&per_page=${per_page}&q=${query}`;
  const response = await axios.get(url);
  return response.data;
};

export const getRepo = async (repoName) => {
  const url = `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`;
  const response = await axios.get(url);
  return response.data;
};