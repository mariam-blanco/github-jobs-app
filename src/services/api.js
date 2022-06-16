import axios from 'axios';

const apiClient = axios.create({
   baseURL: 'https://fake-server-github-jobs-app.herokuapp.com',
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
   },
});

export const getData = params => apiClient.get(params);

export const getJobs = () => apiClient.get('/jobs');

export const getJob = id => apiClient.get('/jobs/' + id);
