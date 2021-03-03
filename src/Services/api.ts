import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

api.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_key: 'c9f4b20c4dd252baed36ef43a8c54f57',
    language: 'pt-BR'
  };
  return config;
});

export default api;