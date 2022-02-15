import axios, { AxiosRequestConfig, Method } from 'axios';

const LOCAL_HOST = '//localhost:3200/';

const backEndClient = axios.create({
  baseURL: LOCAL_HOST,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
  },
});


async function performGet<T>(path: string): Promise<T> {
  return await get<T>(path);
}

async function get<T>(path: string): Promise<T> {
  const response = await backEndClient.get(path);
  return response.data as T;
}